import React, { FC } from 'react';
import Viewport from './components/Viewport';
import MainAppBar from './components/AppBar';

const App: FC = () => (
  <div className="App">
    <MainAppBar />
    <Viewport />
  </div>
);

export default App;
