import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import TuneIcon from '@mui/icons-material/Tune';
import * as React from 'react';
import { Scope } from '../../enums/Scope';

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
          aria-label="Increase Scale"
          color="inherit"
          onClick={() => setScopeOnParent(Scope.WINDOW)}
        >
          <TuneIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );
};

export default AppBarMenuMobile;
