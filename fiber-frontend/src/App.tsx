import React, { FC } from 'react';
import MediaQuery from 'react-responsive';
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

  const [scaleApplied, setScaleApplied] = React.useState(0);

  const scaleToApply = (scale: number): void => {
    setScaleApplied(scale);
  };

  return (
    <div className="App">
      <MainAppBar toolBoxScopeToUpdate={toolBoxScopeToUpdate} />
      <Canvas scaleApplied={scaleApplied} />
      <ToolBox scope={toolBoxScope} scaleToApply={scaleToApply} />
      <MediaQuery minDeviceWidth={1224}>
        <BottomNavigationBar />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <BottomNavigationBar device="mobile" />
      </MediaQuery>
    </div>
  );
};

export default App;
