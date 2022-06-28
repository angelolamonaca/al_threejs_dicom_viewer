import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  setAirVisible,
  setBoneVisible,
  setTissuesVisible,
  setWaterVisible,
} from '../redux/features/visibility/visibilityHandler';

const BottomNavigationBar = ({ device = 'desktop' }): JSX.Element => {
  const visibility = useAppSelector((state) => state.visibility);
  const dispatch = useAppDispatch();

  return (
    <BottomNavigation
      sx={{
        minHeight: '56px',
        height: '10vh',
      }}
    >
      <BottomNavigationAction
        icon={(
          <Button
            size={device === 'mobile' ? 'small' : 'large'}
            variant="outlined"
            onClick={() => {
              dispatch(setAirVisible());
            }}
            startIcon={visibility.airVisible ? <VisibilityIcon /> :
            <VisibilityOffIcon />}>
            Air
          </Button>
        )}
      />
      <BottomNavigationAction
        icon={(
          <Button
            size={device === 'mobile' ? 'small' : 'large'}
            variant="outlined"
            onClick={() => {
              dispatch(setWaterVisible());
            }}
            startIcon={visibility.waterVisible ? <VisibilityIcon /> :
            <VisibilityOffIcon />}>
            Water
          </Button>
        )}
      />
      <BottomNavigationAction
        icon={(
          <Button
            size={device === 'mobile' ? 'small' : 'large'}
            variant="outlined"
            onClick={() => {
              dispatch(setTissuesVisible());
            }}
            startIcon={visibility.tissuesVisible ? <VisibilityIcon /> :
            <VisibilityOffIcon />}>
            Tissues
          </Button>
        )}
      />
      <BottomNavigationAction
        icon={(
          <Button
            size={device === 'mobile' ? 'small' : 'large'}
            variant="outlined"
            onClick={() => {
              dispatch(setBoneVisible());
            }}
            startIcon={visibility.boneVisible ? <VisibilityIcon /> :
            <VisibilityOffIcon />}>
            Bone
          </Button>
        )}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
