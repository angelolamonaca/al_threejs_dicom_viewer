import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ContrastIcon from '@mui/icons-material/Contrast';
import * as React from 'react';
import { Scope } from '../../enums/Scope';

/**
 * @project al_threejs_dicom_viewer
 * @created 24/02/2022 - 09:50
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 */

const AppBarMenuMobile = (props: any): JSX.Element => {
  const {
    mobileMenuId,
    mobileMoreAnchorEl,
    isMobileMenuOpen,
    handleMobileMenuClose,
    setScopeOnParent,
  } = props;

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="Zoom In"
          color="inherit"
          onClick={() => setScopeOnParent(Scope.ZOOM)}
        >
          <ZoomInIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="Increase Contrast"
          color="inherit"
          onClick={() => setScopeOnParent(Scope.CONTRAST)}
        >
          <ContrastIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );
};

export default AppBarMenuMobile;
