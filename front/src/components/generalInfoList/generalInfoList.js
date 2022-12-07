import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Image from "mui-image";
import graph_image from './graph.JPG'

export const GeneralInfoList = () => {
    return (
        <Box sx = {{ width:'400px', bgcolor: '#160647', borderRadius: '20px'}}>
            <List>
                <ListItem>
                    <ListItemText primary='Coordinates:' sx={{ color: 'whitesmoke'}}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary='Distance from Earth:' sx={{ color: 'whitesmoke'}}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary='Weather:' sx={{ color: 'whitesmoke'}}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary='Online/Offline for:' sx={{ color: 'whitesmoke'}}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary='Updates per second:' sx={{ color: 'whitesmoke'}}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary='Velocity:' sx={{ color: 'whitesmoke'}}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary='Pressure:' sx={{ color: 'whitesmoke'}}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary='Deviation from expected route with time:' sx={{ color: 'whitesmoke'}}/>
                </ListItem>
                <ListItem>
                    <Image src={graph_image}/>
                </ListItem>
                
            </List>
        </Box>
    )
}