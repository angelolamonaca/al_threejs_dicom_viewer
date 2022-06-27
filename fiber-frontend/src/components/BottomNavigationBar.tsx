/**
 * @created 16/02/2022 - 11:13
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca
 * @date 16/02/2022
 */

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import { BottomNavigationAction, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  setAirVisible, setBoneVisible,
  setFatVisible,
} from '../redux/features/visibility/visibilityHandler';

const BottomNavigationBar = (): JSX.Element => {
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
            variant="outlined"
            onClick={() => {
              dispatch(setAirVisible());
            }}
            startIcon={visibility.airVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}>
            Air
          </Button>
        )}
      />
      <BottomNavigationAction
        icon={(
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(setFatVisible());
            }}
            startIcon={visibility.fatVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}>
            Fat
          </Button>
        )}
      />
      <BottomNavigationAction
        icon={(
          <Button
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
