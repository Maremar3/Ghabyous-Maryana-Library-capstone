
import React from 'react'
import Books from './Book/Books'
import { Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import "./Book/Book.css"
function Home() {
  return (
    <div className='allpage'>
      <Box disply='flex' flexDirection="column" alignItems="center">
        <Typography variant='h3' sx={{ marginTop: 15, color: '#080099' }}> CHANDLER KIDS LIBRARY  </Typography>
        <Typography sx={{ marginTop: 5, fontSize: 20, fontStyle: 'italic' }}>
          <p>
            Chandler Kids Library is dedicated to inspiring a love of reading by gifting
            books free of charge to children from birth to age five
          </p>
        </Typography>
        {/* div for paragraph and image */}
        <div className='format'>
          {/* div for paragraph */}
          <div className='paragraph'>
            <Typography sx={{ marginTop: 5, fontSize: 25 }} >
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
          </div>
          {/* div for image  */}
          <div className='pic'>
            <Typography alignItems='flex-start'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1f3lXFV0PMeBOa5VI3v9RL1aRv1csZYzvcA&s"
                height='220px' width='450px'></img>
            </Typography>
          </div>
        </div>
        <Typography variant='h4' sx={{ marginTop: 3, color: '#080099' }}>Mission</Typography>
        <Typography sx={{ marginTop: 5, fontSize: 25 }} className='paragraph'>
          <p>
            Language barriers have never been more pronounced. Whether in an urban area of a
            modern country or the rural areas of a less developed country

            ,differences in language are making it harder and harder for educational
            initiatives to bring about success.
            As families move from Kenya to Finland or Brazil
            to Mexico or Viet Nam to California,
            books published in their native country or in their
            first language often must be left behind.
            In their new homelands, it may be difficult,
            if not impossible, to find children's books from their
            cultures and in their mother tongue.
            Parents have little access to the books and stories
            from their youth to pass on to the next generation.
            Many children must grow up without knowledge of their
            family's heritage and first language.
            A fundamental principle of the Foundation is that
            children and their families deserve to have access to
            the books of their culture, as well as the majority
            culture, regardless of where they live.
            According to a paper published in 2005 by
            the United Nations Educational Scientific
            and Cultural Organization (UNESCO) in preparation
            for the second meeting on the World Summit on the
            Information Society, "Denial to access to information
            in one's mother tongue is equivalent to a denial of a
            human right." The report also concludes,
            "In terms of pedagogy, how do children learn best?
            In their mother tongue." Our goal is build a collection
            of books that represents outstanding historical and
            contemporary
            books from throughout the world.
            Chandler Kids library aspires to have every culture
            and language represented so that every child can know
            and appreciate the riches of
            children's literature from the world community.
          </p>
        </Typography>
        <Button LinkComponent={Link} to='/Books'
          sx={{ marginTop: 2, backgroundColor: '#232F3D' }}
          variant="contained">
          <Typography variant='h6'>View All Books</Typography>
        </Button>
      </Box>
    </div>
  )
}
export default Home


