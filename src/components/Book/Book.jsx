
import { Button } from '@mui/material'
import React from 'react'
import axios from 'axios'
import {Link, useNavigate,useParams} from 'react-router-dom'
import "./Book.css"

function Book(props) {
  const { _id, name, auther,description, price, image } = props.book;
  const id =useParams().id;
  const history =useNavigate()
  ////////console.log(props.book)
//  our delete function to delte one book depending in book ID
const deleteHandler = async () =>{
// I used Axios to get the data , then delete it
  await axios
  .delete(`https://ghabyous-maryana-booklibrary-capstone.onrender.com/book/${_id}`)
  .then(res=>res.data)
  .then(()=>history("/"))
  .then(()=>history("/books"))
}
  return (
    <div className='card'>
      <form>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <article>By {auther}</article>
        <h3>{description}</h3>
        <h2>${price}</h2>
        <Button onClick={deleteHandler} variant="contained">Delete</Button>
        <Button LinkComponent={Link} to={`/${_id}`}variant="outlined">Update</Button>
        
      </form>
    </div>
  )
}

export default Book
