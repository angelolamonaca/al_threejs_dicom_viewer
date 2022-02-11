import * as THREE from 'three';
import { PerspectiveCamera, Vector3 } from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, ThreeEvent, useThree } from '@react-three/fiber';
import { detectWheelDirection, mouseWheelDirection } from '../utils/mouse';
import { zeroPad } from '../utils/math';
import { getImageFromDicomConverterApi } from '../services/imageService';

const Camera = ({ position }: { position: Vector3 }): JSX.Element => {
  const scene = new THREE.Scene();
  const { camera, gl } = useThree();
  const perspectiveCamera: PerspectiveCamera = camera as PerspectiveCamera;
  const canvas = document.getElementsByTagName('canvas')[0];
  perspectiveCamera.aspect = canvas.width / canvas.height;
  perspectiveCamera.updateProjectionMatrix();
  gl.setSize(canvas.width, canvas.height);

  perspectiveCamera.position.set(position.x, position.y, position.z);
  scene.add(perspectiveCamera);
  return <primitive object={scene} />;
};

const Cube = ({
  position,
  size,
}: {
  position: Vector3;
  size: Vector3;
}): JSX.Element => {
  const [imgId, setImgId] = useState('000');
  const [pixelArray, setPixelArray] = useState([[]]);
  const imgIdRef = useRef(imgId);
  const pixelArrayRef = useRef(pixelArray);

  useEffect(() => {
    pixelArrayRef.current = pixelArray;
  });

  useEffect(() => {
    if (imgIdRef.current !== imgId) {
      getImageFromDicomConverterApi('000').then((res) => {
        setPixelArray(res);
      });
    }
  }, [imgId]);

  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
  const temp = new Uint8Array(4 * 255 * 255);
  for (let i = 0; i < pixelArray.length; i++) {
    for (let j = 0; j < pixelArray.length; j++) {
      const stride = (i * 255 + j) * 4;

      temp[stride] = pixelArray[i][j];
      temp[stride + 1] = pixelArray[i][j];
      temp[stride + 2] = pixelArray[i][j];
      temp[stride + 3] = 255;
    }
  }
  const texture2d = new THREE.DataTexture(temp, 255, 255, THREE.RGBAFormat);
  texture2d.needsUpdate = true;
  const material = new THREE.MeshBasicMaterial({ map: texture2d });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  return (
    <primitive
      position={position}
      object={scene}
      onWheel={(event: ThreeEvent<WheelEvent> | WheelEvent) => {
        const scrollDirection = detectWheelDirection(event);
        switch (scrollDirection) {
          case mouseWheelDirection.UP:
            setImgId(zeroPad(parseInt(imgId, 10) + 1, 3));
            break;
          case mouseWheelDirection.DOWN:
            setImgId(zeroPad(parseInt(imgId, 10) - 1, 3));
            break;
          default:
            break;
        }
      }}
    />
  );
};

const MainCanvas = (): JSX.Element => (
  <Canvas
    style={{
      height: '70vh',
      minWidth: '200px',
      backgroundColor: '#abccff',
    }}
  >
    <Camera position={new Vector3(0, 0, 5)} />
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Cube position={new Vector3(0, 0, 0)} size={new Vector3(4, 4, 0.1)} />
  </Canvas>
);

export default MainCanvas;
