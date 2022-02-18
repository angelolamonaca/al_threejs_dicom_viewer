/**
 * @created 14/02/2022/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

import { Vector3 } from 'three';
import React from 'react';
import { Canvas as FiberCanvas } from '@react-three/fiber';
import Camera from './ThreeObjects/Camera/Camera';
import Panel from './ThreeObjects/Panel/Panel';

const Canvas = (props: any): JSX.Element => (
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
    <Camera position={new Vector3(0, 0, 5)} />
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Panel position={new Vector3(0, 0, 0)} size={new Vector3(4, 4, 0.1)} />
  </FiberCanvas>
);

export default Canvas;
