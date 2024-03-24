import { Description } from '@mui/icons-material';
import React from 'react'
import "./Book.css"
function Book(props) {
    const {id,name,auther,price,image}=props.book;

  return (
  
    <div className='card'>
      <img src={image} alt={name}/>
      <article>By {auther}</article>
      <h3>{name}</h3>
      <p> {Description}</p>
      <h2>Rs{price}</h2>
      <Button sx={{mt:'auto'}}>Update</Button>
      <Button sx={{mt:'auto'}}>Delete</Button>
    </div>
  )
}

export default Book
