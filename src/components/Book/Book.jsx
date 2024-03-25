import { Description } from '@mui/icons-material';
import { Button } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import "./Book.css"
//import {Button} from 'react-native'
import "./Book.css"
function Book(props) {
  const { _id, name, auther, price, image } = props.book;

  return (
    <div className='card'>
      <form>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <article>By {auther}</article>
        <h2>${price}</h2>
        <Button variant="contained">Delete</Button>
        <Button LinkComponent={Link} to={`/${_id}`}variant="outlined">Update</Button>
      </form>
    </div>
  )
}

export default Book
