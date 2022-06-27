/**
 * @created 16/02/2022 - 09:37
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca
 * @date 16/02/2022
 */

import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ErrorIcon from '@mui/icons-material/Error';
import { Scope } from '../../enums/Scope';
import { Status } from '../../enums/Status';
import Camera from '../../models/Camera';
import { Texture } from '../../models/Texture';
import ToolBoxSlider from './ToolBoxSlider';
import ToolBoxInput from './ToolBoxInput';

const ScopeIcon = (scope: Scope, state: Status): JSX.Element => {
  switch (scope) {
    case Scope.ZOOM: {
      return state === Status.DECREASE ? <ZoomOutIcon /> : <ZoomInIcon />;
    }
    case Scope.WINDOW: {
      return state === Status.DECREASE ? <RemoveIcon /> : <AddIcon />;
    }
    default:
      break;
  }
  return <ErrorIcon />;
};

const ToolBox = (props: any): JSX.Element => {
  const { scope } = props;
  const [zoomValue, setZoomValue] =
    React.useState<number | string | Array<number | string>>(1);
  const [scaleValue, setScaleValue] =
    React.useState<number | string | Array<number | string>>([0, 3570]);

  const setScaleOnParent = (scale: number): void => {
    const { scaleToApply } = props;
    scaleToApply(scale);
  };

  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
  ): void => {
    switch (scope) {
      case Scope.ZOOM: {
        setZoomValue(newValue);
        break;
      }
      case Scope.WINDOW: {
        setScaleValue(newValue);
        break;
      }
      default:
        break;
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    switch (scope) {
      case Scope.ZOOM: {
        setZoomValue(
          event.target.value === '' ? '' : Number(event.target.value),
        );
        break;
      }
      case Scope.WINDOW: {
        setScaleValue(
          event.target.value === '' ? '' : Number(event.target.value),
        );
        break;
      }
      default:
        break;
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
      case Scope.WINDOW: {
        Texture.scaleToApply = scaleValue as Array<number>;
        setScaleOnParent(scaleValue as number);
        break;
      }
      default:
        break;
    }
  }, [scope, zoomValue, scaleValue]);

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
          {scope === Scope.WINDOW && (
          <Grid item>
            <ToolBoxInput
              scope={Scope.MIN_SCALE}
              zoomValue={zoomValue}
              scaleValue={scaleValue}
              handleInputChange={handleInputChange}
            />
          </Grid>
          )}
          <Grid item>{ScopeIcon(scope, Status.DECREASE)}</Grid>
          <Grid item xs>
            <ToolBoxSlider
              scope={scope}
              zoomValue={zoomValue}
              scaleValue={scaleValue}
              handleSliderChange={handleSliderChange}
            />
          </Grid>
          <Grid item>{ScopeIcon(scope, Status.INCREASE)}</Grid>
          <Grid item>
            <ToolBoxInput
              scope={scope}
              zoomValue={zoomValue}
              scaleValue={scaleValue}
              handleInputChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ToolBox;
