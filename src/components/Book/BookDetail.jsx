import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material'
import "./Book.css"
import axios from 'axios'
function BookDetail() {
  const [checked, setchecked] = useState(false)
  const [inputs, setInputs] = useState({})
  const history = useNavigate()
  const id = useParams().id;
  useEffect(() => {
    const fetchHandler = async () => {
      await axios.get(`https://ghabyous-maryana-booklibrary-capstone.onrender.com/book/${id}`)
        .then((res) => res.data).then(data => setInputs(data));
    }
    //Promise handling
    fetchHandler()
    }, [id])
    //our update function
  const sendRequest = async () => {
    // used Xios to send data
    await axios.put(`https://ghabyous-maryana-booklibrary-capstone.onrender.com/book/${id}`, {
      name: String(inputs.name),
      auther: String(inputs.auther),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked)

    }).then(res => res.data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //after update it wiil back to main page ,books
    sendRequest().then(() => history('/books'))
  }
  //it will excahange the value in input box with the value in our collection
  const handleChange = (e) => {
    console.log(e);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <box>
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handleChange} margin="normal" variant='outlined' name="name" />
            <FormLabel>Auther</FormLabel>
            <TextField value={inputs.auther} onChange={handleChange} margin="normal" variant='outlined' name="auther" />
            <FormLabel>Price</FormLabel>
            <TextField type='number' value={inputs.price} onChange={handleChange} margin="normal" variant='outlined' name="price" />
            <FormLabel>Description</FormLabel>
            <TextField value={inputs.description} onChange={handleChange} margin="normal" variant='outlined' name="description" />
            <FormLabel>image</FormLabel>
            <TextField margin="normal" value={inputs.image} onChange={handleChange} variant='outlined' name="image" />
            {/* <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Label" /> */}
            <Button variant='outlined' type='submit'>
              Update Book
            </Button>


          </box>
        </form>
      )}
    </div>
  )
}

export default BookDetail
