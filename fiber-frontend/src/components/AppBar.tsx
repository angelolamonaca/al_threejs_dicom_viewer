/**
 * @created 14/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ContrastIcon from '@mui/icons-material/Contrast';
import { Scope } from '../enums/Scope';

const MainAppBar = (props: any): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = (): void => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any): void => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  // eslint-disable-next-line react/destructuring-assignment
  const setScopeOnParent = (scope: Scope): void => {
    const { toolBoxScopeToUpdate } = props;
    toolBoxScopeToUpdate(scope);
  };

  const renderMobileMenu = (
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

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '10vh',
        minHeight: '56px',
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          >
            WEB DICOM Viewer
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="Zoom In"
              color="inherit"
              onClick={() => setScopeOnParent(Scope.ZOOM)}
            >
              <ZoomInIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="Increase Contrast"
              color="inherit"
              onClick={() => setScopeOnParent(Scope.CONTRAST)}
            >
              <ContrastIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <DesignServicesIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default MainAppBar;
