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

const BottomNavigationBar = (): JSX.Element => {
  const [airVisible, setAirVisible] = React.useState(true);
  const [fatVisible, setFatVisible] = React.useState(true);
  const [boneVisible, setBoneVisible] = React.useState(true);

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
              setAirVisible(!airVisible);
            }}
            startIcon={airVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}>
            Air
          </Button>
        )}
      />
      <BottomNavigationAction
        icon={(
          <Button
            variant="outlined"
            onClick={() => {
              setFatVisible(!fatVisible);
            }}
            startIcon={fatVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}>
            Fat
          </Button>
        )}
      />
      <BottomNavigationAction
        icon={(
          <Button
            variant="outlined"
            onClick={() => {
              setBoneVisible(!boneVisible);
            }}
            startIcon={boneVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}>
            Bone
          </Button>
        )}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
