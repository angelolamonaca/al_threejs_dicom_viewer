import Slider from '@mui/material/Slider';
import * as React from 'react';
import { Scope } from '../../enums/Scope';

/**
 * @project al_threejs_dicom_viewer
 * @created 24/02/2022 - 10:18
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 */

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
        // eslint-disable-next-line no-nested-ternary
        scope === Scope.ZOOM
          ? 0
          : scope === Scope.WINDOW ? 0
            : 0
      }
      max={
        // eslint-disable-next-line no-nested-ternary
        scope === Scope.ZOOM
          ? 10
          : scope === Scope.WINDOW ? 3570
            : 10
      }
      step={scope === Scope.WINDOW ? 1 : 0.01}
      value={
        // eslint-disable-next-line no-nested-ternary
        scope === Scope.ZOOM
          ? typeof zoomValue === 'number'
            ? zoomValue
            : 1
          // eslint-disable-next-line no-nested-ternary
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
