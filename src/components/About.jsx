import { Typography,Box } from '@mui/material'
import React from 'react'
import "./Book/Book.css"
function About() {
  return (
    <div>
      {/* this page just about us */}
      {/* some css code in Book.css and some inside our tag here */}
      {/* I used Mui/material library */}
      <Box marginLeft={'40px'} marginRight={'40px'} disply='flex' flexDirection ='column' alignItems='center'    margin-top='40px'
        text-align='justify'   text-align-last='lef' marginTop={15}>
      <Typography variant='h4' marginTop='2rem'> Chandler Kids Library</Typography>
        <Typography sx={{fontFamily:'cursive'}} varient ="h2" >Chandler Kids library is your answer to building literacy,
         and technological skills. TumblePremium combines everything you love about the original 
         Kids library Deluxe, with Kids library
          Jr's books for older readers into one easy access point.  </Typography>
        <Typography variant='h5'> A comprehensive learn to read program</Typography>
        <Typography>
          <p>
          Learning to read is one of the most important skills children can learn.
           Chandler Kids Library makes the learning to read journey fun,
            interactive, and highly rewarding for ages 0-13– and 
            it’s based on solid scientific research.

You’ve been there to celebrate their first words and first steps.
 Now see your child learn to read their very first book 
 with Chandler Public library
          </p>

        </Typography>
        <Typography variant='h5'> Learning to read at home</Typography>
        <Typography>
          <p>
          Home is where so much of your child’s learning takes place. 
          It is where they feel most confident, happy and supported. 
          Studies prove that children who come from homes where reading
           is prioritized are already way ahead of their peers.
            The home is the ideal place to lay the building
             blocks <b>for long term reading and academic success.</b>

Chandler Kids Library provides your child with an <b>educationally sound and 
highly enjoyable</b> learn to read program that is not only 
fun and effective, but also<b> easy to integrate into your
 daily routine.</b>
          </p>
        </Typography>
        </Box>
    </div>
  )
}
export default About
