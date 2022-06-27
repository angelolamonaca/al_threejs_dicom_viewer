import * as THREE from 'three';
import React, { useEffect, useState } from 'react';
import { ThreeEvent } from '@react-three/fiber';
import { JsonDcm } from '../../models/JsonDcm';
import { getImageFromDicomConverterApi } from '../../services/imageService';
import { panelScrollHandler } from '../../utils/mouse/PanelEvents';
import Panel from '../../models/Panel';
import { useAppSelector } from '../../redux/hooks';

/**
 * @created 14/02/2022 - 17:01
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca
 * @date 14/02/2022
 */

const CanvasPanel = (
  props: any,
): JSX.Element => {
  const visibility = useAppSelector((state) => state.visibility);
  const {
    position,
    size,
  } = props;
  const [imgId, setImgId] = useState('000');
  const [jsonDcm, setJsonDcm] = useState(new JsonDcm());
  const { contrastApplied } = props;

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

export default CanvasPanel;
