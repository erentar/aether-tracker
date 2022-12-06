import React from "react";
import Image from "mui-image";
import Box from "@mui/material/Box"
import map_image from "./kz.JPG";

const Map = () => {
    return (
        <div>
        <Image 
            src = {map_image}
            width = {850}
        />    
        </div>
        
    )
}

export default Map