/**
 * @created 14/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

import { Vector3 } from 'three';
import React from 'react';
import { Canvas as FiberCanvas } from '@react-three/fiber';
import CanvasCamera from './CanvasCamera';
import CanvasPanel from './CanvasPanel';

const Canvas = (props: any): JSX.Element => {
  const { contrastToApply } = props;

  return (
    <FiberCanvas
      {...props}
      id="divCanvas"
      style={{
        minHeight: '200px',
        height: 'calc(70vh - 16px)',
        minWidth: '200px',
        backgroundColor: '#abccff',
      }}
    >
      <CanvasCamera position={new Vector3(0, 0, 5)} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <CanvasPanel
        position={new Vector3(0, 0, 0)}
        size={new Vector3(4, 4, 0.1)}
        contrastToApply={contrastToApply | 0}
      />
    </FiberCanvas>
  );
};

export default Canvas;
