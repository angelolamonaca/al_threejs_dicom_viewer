import React, { useEffect, useRef, useState } from 'react';
import getLocalJson from '../services/imageService';
import { Frame } from '../models/Frame';
import { JSONMRI } from '../models/JSONMRI';

let localJson: JSONMRI;
let jsonMri: JSONMRI;
let frame: Frame;

const Viewport: React.FunctionComponent = () => {
  const [frameState, setFrameState] = useState(160);
  const canvasElement = useRef<HTMLCanvasElement>(null);

  const refreshCanvas = async (): Promise<void> => {
    if (!localJson) {
      localJson = await getLocalJson('assets/images/T1C_Intensity.json');
    }
    if (!jsonMri) {
      jsonMri = new JSONMRI(
        localJson.size,
        localJson.origin,
        localJson.spacing,
        localJson.direction,
        localJson.data,
      );
    }
    frame = jsonMri.getFrame(frameState);
    if (canvasElement.current) {
      canvasElement.current.width = 153;
      canvasElement.current.height = 230;
    }
    const ctx = canvasElement.current?.getContext('2d');
    const imageData = ctx?.createImageData(frame.width, frame.height);
    const a = 0.5;
    const b = 0.5;
    for (let y = 0; y < frame.height; ++y) {
      for (let x = 0; x < frame.width; ++x) {
        if (imageData) {
          // Red layer
          imageData.data[(y * frame.width + x) * 4] =
            frame.slice[y * frame.width + x] * a + b;
          // Green layer
          imageData.data[(y * frame.width + x) * 4 + 1] =
            frame.slice[y * frame.width + x] * a + b;
          // Blue layer
          imageData.data[(y * frame.width + x) * 4 + 2] =
            frame.slice[y * frame.width + x] * a + b;
          // Unknown layer
          imageData.data[(y * frame.width + x) * 4 + 3] = 255;
        }
      }
    }
    if (ctx && imageData) {
      ctx.putImageData(imageData, 0, 0, 0, 0, frame.width, frame.height);
    }

    console.log(`Current frame: ${frame.depth - frameState} of ${frame.depth}`);
  };

  useEffect(() => {
    refreshCanvas();
  }, [frameState, refreshCanvas]);

  const onWheel = (e: React.WheelEvent<HTMLCanvasElement>): void => {
    if (e.deltaY < 0) {
      // Scrolling Up
      if (frameState <= 0) return;
      setFrameState(frameState - 1);
    } else if (e.deltaY > 0) {
      // Scrolling down
      if (frameState >= frame.depth) return;
      setFrameState(frameState + 1);
    }
  };

  return <canvas ref={canvasElement} onWheel={(e) => onWheel(e)} />;
};

export default Viewport;
