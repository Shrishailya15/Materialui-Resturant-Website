import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'#1A1A19', color:'white', p:3}}>
        <Box sx={{my:3,"& svg":{fontSize:"60px",mr:2,cursor:"pointer"}, "& svg:hover":{color:"goldenrod", transform:'translateY(5px)', transition:'all 0.3s'}}}>
          <YouTubeIcon/>
          <GitHubIcon/>
          <XIcon/>
          <InstagramIcon/>
        </Box>
        <Typography varient="h5" sx={{"@media (max-width:600px)":{fontSize:"1rem"}}}>
            All rights reserved &copy; Shishialya resturant
        </Typography>
    </Box>
    </>
  )
}

export default Footer
