/**
 * @created 14/02/2022/02/2022 - 12:12
 * @project al_threejs_dicom_viewer
 * @author Angelo Lamonaca - https://github.com/angelolamonaca
 * @date 14/02/2022
 */

import React, { FC } from 'react';
import Canvas from './components/Canvas';
import MainAppBar from './components/AppBar';
import ToolBox from './components/ToolBox';
import BottomNavigationBar from './components/BottomNavigationBar';

const App: FC = () => (
  <div className="App">
    <MainAppBar />
    <Canvas />
    <ToolBox />
    <BottomNavigationBar />
  </div>
);

export default App;
