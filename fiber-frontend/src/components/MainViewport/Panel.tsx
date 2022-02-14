import * as THREE from 'three';
import { Vector3 } from 'three';
import React, { useEffect, useState } from 'react';
import { ThreeEvent } from '@react-three/fiber';
import { JsonDcm } from '../../models/JsonDcm';
import { getImageFromDicomConverterApi } from '../../services/imageService';
import { panelScrollHandler } from './PanelEvents';
import { PixelData } from '../../models/PixelData';

/**
 * @created 14/02/2022/02/2022 - 17:01
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca
 * @date 14/02/2022
 */

const Panel = ({
  position,
  size,
}: {
  position: Vector3;
  size: Vector3;
}): JSX.Element => {
  const [imgId, setImgId] = useState('000');
  const [jsonDcm, setJsonDcm] = useState(new JsonDcm([[]]));

  useEffect(() => {
    getImageFromDicomConverterApi(imgId, true)
      .then((res) => {
        setJsonDcm(new JsonDcm(res.pixelData, res.metadata));
      })
      .catch((e) => {
        console.log(
          'No available pixel data or metadata, server side error',
          e,
        );
      });
  }, []);

  useEffect(() => {
    getImageFromDicomConverterApi(imgId, false)
      .then((res) => {
        setJsonDcm(new JsonDcm(res.pixelData));
      })
      .catch((e) => {
        console.log('No available pixel data, server side error', e);
      });
  }, [imgId]);

  const scene = new THREE.Scene();
  const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
  const dataTexture = jsonDcm.getPixelDataAsThreeDataTexture();
  const material = new THREE.MeshBasicMaterial({ map: dataTexture });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  return (
    <primitive
      position={position}
      object={scene}
      onWheel={(e: WheelEvent | ThreeEvent<WheelEvent>) =>
        setImgId(panelScrollHandler(e, imgId))
      }
    />
  );
};

export default Panel;
