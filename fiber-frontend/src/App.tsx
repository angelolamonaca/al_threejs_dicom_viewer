import React, { FC } from 'react';
import MainCanvas from './components/MainCanvas';
import MainAppBar from './components/AppBar';

const App: FC = () => (
  <div className="App">
    <MainAppBar />
    <MainCanvas />
  </div>
);

export default App;
