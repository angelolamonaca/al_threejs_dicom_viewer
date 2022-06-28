import * as React from 'react';
import Box from '@mui/material/Box';
import { Scope } from '../../enums/Scope';
import AppBarMenuMobile from './AppBarMenuMobile';
import AppBarMenu from './AppBarMenu';

const MainAppBar = (props: any): JSX.Element => {
  const mobileMenuId = 'tools-menu-mobile';

  const setScopeOnParent = (scope: Scope): void => {
    const { toolBoxScopeToUpdate } = props;
    toolBoxScopeToUpdate(scope);
  };

  const [mobileToolsAnchorEl, setMobileToolsAnchorEl] = React.useState(null);
  const isMobileToolsMenuOpen = Boolean(mobileToolsAnchorEl);
  const handleMobileToolsMenuClose = (): void => {
    setMobileToolsAnchorEl(null);
  };
  const handleMobileToolsMenuOpen = (event: any): void => {
    setMobileToolsAnchorEl(event.currentTarget);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        height: '10vh',
        minHeight: '56px',
      }}
    >
      <AppBarMenu
        mobileMenuId={mobileMenuId}
        handleMobileMenuOpen={handleMobileToolsMenuOpen}
        setScopeOnParent={setScopeOnParent}
      />
      <AppBarMenuMobile
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileToolsAnchorEl}
        isMobileMenuOpen={isMobileToolsMenuOpen}
        handleMobileMenuClose={handleMobileToolsMenuClose}
        setScopeOnParent={setScopeOnParent}
      />
    </Box>
  );
};

export default MainAppBar;
