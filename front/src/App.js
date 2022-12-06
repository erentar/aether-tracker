import { Box, Divider } from '@mui/material';
import React from 'react';
import Map from './components/map/map'

function App() {
  return (
    <div className="App">
      <Map/>
      <Divider/>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: 1000
        }} />
    </div>
  );
}

export default App;
