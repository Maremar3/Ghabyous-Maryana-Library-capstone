import { Description } from '@mui/icons-material';
import React from 'react'
import "./Book.css"
function Book(props) {
    const { _id, name, auther, price, image} = props.book;

  return (
  
    <div className='card'>
     

     
      <article>By {auther}</article>
      <h3>{name}</h3>
      <h2>${price}</h2>
    
  
    </div>
  )
}

export default Book
