import Slider from '@mui/material/Slider';
import * as React from 'react';
import { Scope } from '../../enums/Scope';

const ToolBoxSlider = (props: any): JSX.Element => {
  const {
    scope,
    zoomValue,
    scaleValue,
    handleSliderChange,
  } = props;
  return (
    <Slider
      min={
        scope === Scope.ZOOM
          ? 0
          : scope === Scope.WINDOW ? 0
            : 0
      }
      max={
        scope === Scope.ZOOM
          ? 10
          : scope === Scope.WINDOW ? 3570
            : 10
      }
      step={scope === Scope.WINDOW ? 1 : 0.01}
      value={
        scope === Scope.ZOOM
          ? typeof zoomValue === 'number'
            ? zoomValue
            : 1
          : scope === Scope.WINDOW
            ? scaleValue
            : 1
      }
      onChange={handleSliderChange}
      aria-labelledby="input-slider"
    />
  );
};

export default ToolBoxSlider;
