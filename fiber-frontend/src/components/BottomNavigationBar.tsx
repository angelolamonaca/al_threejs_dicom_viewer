/**
 * @created 16/02/2022 - 11:13
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca
 * @date 16/02/2022
 */

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import DiamondIcon from '@mui/icons-material/Diamond';

const BottomNavigationBar = (): JSX.Element => {
  const [value, setValue] = React.useState('recents');

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string,
  ): void => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        minHeight: '56px',
        height: '10vh',
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Explore"
        value="explore"
        icon={<FolderIcon />}
      />
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Premium"
        value="premium"
        icon={<DiamondIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigationBar;
