import { Description } from '@mui/icons-material';
import { Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material'
import "../components/Book/Book.css"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AddBook() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    price: '',
    auther: '',

    image: ''
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    }
  const sendRequest = async () => {
    await axios.post("http://localhost:3000/book", {
      name: String(inputs.name),
      auther: String(inputs.auther),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked)
    }).then(res => res.data);
  }
  // function to add book detail to our collection book
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
    sendRequest().then(() => history('/'))
  }
  return (
    <div className='addform'>
      {/* our form to submit our book detail */}
      <form onSubmit={handleSubmit}>
        <box>

          <FormLabel><p align='center' color='#080099'><b>Enter Your Book Detail</b></p></FormLabel>
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
          <Button variant='contained' type='submit'>
            Add Book
          </Button>
        </box>
      </form>
    </div>
  )
}

export default AddBook

