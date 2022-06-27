import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';
import { Scope } from '../../enums/Scope';

/**
 * @project al_threejs_dicom_viewer
 * @created 24/02/2022 - 10:18
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 */

const ToolBoxInput = (props: any): JSX.Element => {
  const {
    scope,
    zoomValue,
    scaleValue,
    handleInputChange,
  } = props;

  const Input = styled(MuiInput)`
    width: 60px;
  `;

  return (
    <Input
      value={
        // eslint-disable-next-line no-nested-ternary
        scope === Scope.ZOOM
          ? typeof zoomValue === 'number'
            ? zoomValue : 1
          // eslint-disable-next-line no-nested-ternary
          : scope === Scope.MIN_SCALE
            ? scaleValue[0]
            : scope === Scope.WINDOW
              ? scaleValue[1]
              : 1
      }
      onChange={handleInputChange}
      inputProps={
        // eslint-disable-next-line no-nested-ternary
        scope === Scope.ZOOM
          ? {
            step: 0.01,
            min: 0,
            max: 500,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }
          : scope === Scope.WINDOW ? {
            step: 1,
            min: 0,
            max: 3570,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }
            : {
              step: 0.01,
              min: 0,
              max: 500,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }
      }
    />
  );
};

export default ToolBoxInput;
