import React from "react";
import { Badge, Box, Typography } from '@mui/material';


export const OnlineVisual = () => {
    const shapeStyles = { bgcolor: 'red', width: 20, height: 20 };
    const shapeCircleStyles = { borderRadius: '50%' };
  
    const circle = (
        <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
    );
  
  return (
    <Box
        sx={{
          width: 'auto',
          height: 'auto',
        }}
    >
        <Typography variant="h6" component="div">
          ONLINE                
            <Badge>
                {circle}
            </Badge>
        </Typography>
        <Typography variant="h6" component="div">
          VELOCITY
            <Badge>
                {circle}
            </Badge>
        </Typography>
        <Typography variant="h6" component="div">
          PRESSURE
            <Badge>
                {circle}
            </Badge>
        </Typography>
        <Typography variant="h6" component="div">
          WEATHER
            <Badge>
                {circle}
            </Badge>
        </Typography>
    </Box>
  )
}