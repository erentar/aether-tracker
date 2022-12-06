import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { SettingsDrawer } from './components/drawer/drawer';
import Map from './components/map/map'

function App() {
  return (
    <div className="App">
      <SettingsDrawer/>
      <Map/>
      <Divider/>
      <Box
        sx={{
          width: 300,
          height: 50,
        }}
      >
        <Typography variant="h6" component="div">
          ONLINE: 
        </Typography>
      </Box>
    </div>
  );
}

export default App;
