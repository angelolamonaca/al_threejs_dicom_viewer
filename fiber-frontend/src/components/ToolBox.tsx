/**
 * @created 16/02/2022 - 09:37
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca
 * @date 16/02/2022
 */

import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { Scope } from '../enums/Scope';
import { Status } from '../enums/Status';
import Camera from './ThreeObjects/Camera/Camera';

const Input = styled(MuiInput)`
  width: 60px;
`;

const ScopeIcon = (scope: Scope, state: Status): any => {
  switch (scope) {
    case Scope.ZOOM: {
      return state === Status.DECREASE ? <ZoomOutIcon /> : <ZoomInIcon />;
    }
    case Scope.CONTRAST: {
      return state === Status.DECREASE ? <RemoveIcon /> : <AddIcon />;
    }
    default:
      break;
  }
  return null;
};

const ToolBox = (props: any): JSX.Element => {
  const { scope } = props;
  const [zoomValue, setZoomValue] = React.useState<
    number | string | Array<number | string>
  >(1);
  const [contrastValue, setConstrastValue] = React.useState<
    number | string | Array<number | string>
  >(1);

  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
  ): void => {
    setZoomValue(newValue);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setZoomValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = (): void => {
    if (zoomValue < 0) {
      setZoomValue(0);
    } else if (zoomValue > 100) {
      setZoomValue(100);
    }
  };

  useEffect(() => {
    switch (scope) {
      case Scope.ZOOM: {
        if (Camera.perspectiveCamera) {
          Camera.setZoom(zoomValue as number);
        }
        break;
      }
      case Scope.CONTRAST: {
        break;
      }
      default:
        break;
    }
  }, [zoomValue]);

  return (
    <Box
      sx={{
        minHeight: '64px',
        height: '10vh',
        minWidth: '200px',
        backgroundColor: '#e3e3e3',
        paddingX: '10vw',
        paddingY: '8px',
      }}
    >
      <Typography
        id="input-slider"
        sx={{
          textAlign: 'center',
        }}
      >
        {Scope[scope]}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          minWidth: '200px',
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item>{ScopeIcon(scope, Status.DECREASE)}</Grid>
          <Grid item xs>
            <Slider
              min={0}
              max={10}
              step={0.01}
              value={typeof zoomValue === 'number' ? zoomValue : 1}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>{ScopeIcon(scope, Status.INCREASE)}</Grid>
          <Grid item>
            <Input
              value={zoomValue}
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 0.01,
                min: 0,
                max: 500,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ToolBox;
