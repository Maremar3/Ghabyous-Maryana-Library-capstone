
import React from 'react'
import Books from './Book/Books'
import { Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
 import "./Book/Book.css"
function Home() {
  return (
    <div>
      <Box disply='flex' flexDirection="column" alignItems="center">
        <Typography variant='h3' sx={{ marginTop: 15, color:'#080099'  }}> CHANDLER KIDS LIBRARY  </Typography>
        <Typography sx={{ marginTop: 5, fontSize: 20 ,fontStyle:'italic'}}>
          <p>
            Chandler Kids Library is dedicated to inspiring a love of reading by gifting
            books free of charge to children from birth to age five
          </p>
        </Typography>
        <Typography sx={{ marginTop: 5, fontSize: 25 }}>
          <p>

          
          “When I was growing up in the hills of East Tennessee,
          I knew my dreams would come true.
          I know there are children in your community with their own dreams.
          They dream of becoming a doctor or an inventor or a minister.
          Who knows, maybe there is a little girl whose dream is to be a writer and singer.

          The seeds of these dreams are often found in books and the seeds you help plant in your community
          can grow across the world.”
          </p>
        </Typography>
        <Typography alignItems='flex-start' className='pic'
    >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1f3lXFV0PMeBOa5VI3v9RL1aRv1csZYzvcA&s"
            height='120px' width='350px'></img>
        </Typography>
        <Button LinkComponent={Link} to='/Books'
          sx={{ marginTop: 15, backgroundColor: '#232F3D' }}
          variant="contained">
          <Typography variant='h6'>View All Books</Typography>
        </Button>
      </Box>
    </div>
  )
}

export default Home


