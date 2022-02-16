/**
 * @created 16/02/2022/02/2022 - 09:37
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca
 * @date 16/02/2022
 */

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

const Input = styled(MuiInput)`
  width: 42px;
`;

const InputSlider = (): JSX.Element => {
  const [value, setValue] = React.useState<
    number | string | Array<number | string>
  >(0);

  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
  ): void => {
    setValue(newValue);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = (): void => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box
      // calc ( (100vh - canvas height - AppBar height - html margin)
      sx={{
        height: 'calc(100vh - 70vh - 64px - 16px - 16px)',
        minWidth: '200px',
        backgroundColor: '#ffeeab',
        paddingX: '10vw',
        paddingY: '8px',
      }}
    >
      <Typography
        id="input-slider"
        sx={{
          textAlign: 'center',
        }}
        gutterBottom
      >
        Zoom
      </Typography>
      <Box
        // calc ( (100vh - canvas height - AppBar height - html margin)
        sx={{
          display: 'flex',
          minWidth: '200px',
          backgroundColor: '#ffabfe',
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <ZoomOutIcon />
          </Grid>
          <Grid item xs>
            <Slider
              min={-50}
              max={50}
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item>
            <ZoomInIcon />
          </Grid>
          <Grid item>
            <Input
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: -50,
                max: 50,
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

export default InputSlider;
