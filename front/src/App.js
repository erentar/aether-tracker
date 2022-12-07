import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { SettingsDrawer } from './components/drawer/drawer';
import { GeneralInfoList } from './components/generalInfoList/generalInfoList';
import Map from './components/map/map'
import { OnlineVisual } from './components/onlineVisual/onlineVisual';

function App() {
  return (
    <div className="App">
      <SettingsDrawer/>
      <Map/>
      <Divider/>
      <OnlineVisual/>
      <GeneralInfoList/>
    </div>
  );
}

export default App;
