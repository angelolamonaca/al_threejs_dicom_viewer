import { Vector3 } from 'three';
import React from 'react';
import { Canvas as FiberCanvas } from '@react-three/fiber';
import { Provider } from 'react-redux';
import CanvasCamera from './CanvasCamera';
import CanvasPanel from './CanvasPanel';
import { store } from '../../redux/store';

const Canvas = (props: any): JSX.Element => {
  const { scaleToApply } = props;

  return (
    <FiberCanvas
      {...props}
      id="divCanvas"
      style={{
        minHeight: '200px',
        height: 'calc(70vh - 16px)',
        minWidth: '200px',
        backgroundColor: '#8a9dc3',
      }}
    >
      <CanvasCamera position={new Vector3(0, 0, 5)} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Provider store={store}>
        <CanvasPanel
          position={new Vector3(0, 0, 0)}
          size={new Vector3(4, 4, 0.1)}
          scaleToApply={scaleToApply | 0}
        />
      </Provider>
    </FiberCanvas>
  );
};

export default Canvas;
