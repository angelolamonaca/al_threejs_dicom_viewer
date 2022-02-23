import * as THREE from 'three';
import React, { useEffect, useState } from 'react';
import { ThreeEvent } from '@react-three/fiber';
import { JsonDcm } from '../../../models/JsonDcm';
import { getImageFromDicomConverterApi } from '../../../services/imageService';
import { panelScrollHandler } from './PanelEvents';
import Panel from './Panel';

/**
 * @created 14/02/2022 - 17:01
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca
 * @date 14/02/2022
 */

const PanelElement = (
  props: any,
): JSX.Element => {
  const {
    position,
    size,
  } = props;
  const [imgId, setImgId] = useState('000');
  const [jsonDcm, setJsonDcm] = useState(new JsonDcm());
  const { contrastApplied } = props;
  console.log('Line 27 in PanelElement.tsx', contrastApplied);

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

  let scene = new THREE.Scene();
  if (jsonDcm.pixelData) {
    scene = Panel(size, jsonDcm.pixelData);
  }

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

export default PanelElement;
