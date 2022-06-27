import IconButton from '@mui/material/IconButton';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import TuneIcon from '@mui/icons-material/Tune';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AppBar from '@mui/material/AppBar';
import { Scope } from '../../enums/Scope';

/**
 * @project al_threejs_dicom_viewer
 * @created 24/02/2022 - 09:50
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 */

const AppBarMenu = (props: any): JSX.Element => {
  const {
    mobileMenuId,
    handleMobileMenuOpen,
    setScopeOnParent,
  } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          disabled
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
            aria-label="Increase Scale"
            color="inherit"
            onClick={() => setScopeOnParent(Scope.WINDOW)}
          >
            <TuneIcon />
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
  );
};

export default AppBarMenu;
