import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings'

export const SettingsDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  
  return (
    <>
    <IconButton 
      size='large' 
      edge='end' 
      color='inherit' 
      aria-label="logo" 
      onClick={() => setIsDrawerOpen(true)}
    >
      <SettingsIcon />
    </IconButton>
    <Drawer 
      anchor='left' 
      open={isDrawerOpen} 
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box p={2} width='250px' textAlign='center' role='presentation'>
        <Typography variant="h6" component="div">
          Side panel
        </Typography>
      </Box>
    </Drawer>
  </>
  )
}