import { Typography,Box } from '@mui/material'
import React from 'react'
import "./Book/Book.css"
function About() {
  return (
    <div>
      <Box disply='flex' flexDirection ='column' alignItems='center'    margin-top='20px'>
        <Typography sx={{fontFamily:'fantasy'}} varient='h5' alignItems={'center'}>Chandler KIDS Library</Typography>
        <Typography sx={{fontFamily:'cursive'}} varient ="h2" >Chandler Kids library is your answer to building literacy,
         and technological skills. TumblePremium combines everything you love about the original 
         Kids library Deluxe, with Kids library
          Jr's books for older readers into one easy access point.  </Typography>
        <Typography variant='h3'> Chandler Kids Library</Typography>
        </Box>
    </div>
  )
}

export default About
