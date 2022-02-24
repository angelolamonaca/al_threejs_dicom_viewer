/**
 * @created 14/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

import React, { FC } from 'react';
import Canvas from './components/Canvas/Canvas';
import MainAppBar from './components/AppBar/AppBar';
import ToolBox from './components/ToolBox/ToolBox';
import BottomNavigationBar from './components/BottomNavigationBar';
import { Scope } from './enums/Scope';

const App: FC = () => {
  const [toolBoxScope, setToolBoxScope] = React.useState(Scope.ZOOM);

  const toolBoxScopeToUpdate = (scope: Scope): void => {
    setToolBoxScope(scope);
  };

  const [contrastApplied, setContrastApplied] = React.useState(0);

  const contrastToApply = (contrast: number): void => {
    setContrastApplied(contrast);
  };

  return (
    <div className="App">
      <MainAppBar toolBoxScopeToUpdate={toolBoxScopeToUpdate} />
      <Canvas contrastApplied={contrastApplied} />
      <ToolBox scope={toolBoxScope} contrastToApply={contrastToApply} />
      <BottomNavigationBar />
    </div>
  );
};

export default App;
