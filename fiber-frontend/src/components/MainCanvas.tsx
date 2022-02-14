import * as THREE from 'three';
import { PerspectiveCamera, Vector3 } from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, ThreeEvent, useThree } from '@react-three/fiber';
import { detectWheelDirection, mouseWheelDirection } from '../utils/mouse';
import { zeroPad } from '../utils/math';
import { getImageFromDicomConverterApi } from '../services/imageService';
import { JsonDcm } from '../models/JsonDcm';

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
  const imgIdRef = useRef(imgId);

  const [jsonDcm, setJsonDcm] = useState(new JsonDcm([[]]));

  useEffect(() => {
    if (imgIdRef.current !== imgId) {
      getImageFromDicomConverterApi(imgId)
        .then((res) => {
          setJsonDcm(new JsonDcm(res.pixelData));
        })
        .catch((e) => {
          console.log('Line 40 in MainCanvas.tsx', e);
        });
    }
  }, [imgId]);

  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
  const textureData = new Uint8Array(4 * 255 * 255);
  for (let i = 0; i < jsonDcm.pixelData.length; i++) {
    for (let j = 0; j < jsonDcm.pixelData.length; j++) {
      const stride = (i * 255 + j) * 4;
      textureData[stride] = jsonDcm.pixelData[i][j];
      textureData[stride + 1] = jsonDcm.pixelData[i][j];
      textureData[stride + 2] = jsonDcm.pixelData[i][j];
      textureData[stride + 3] = 255;
    }
  }
  const texture2d = new THREE.DataTexture(
    textureData,
    255,
    255,
    THREE.RGBAFormat,
  );
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
