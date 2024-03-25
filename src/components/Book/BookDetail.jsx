import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material'
import "./Book.css"
import axios from 'axios'
function BookDetail() {
  const [checked,setchecked] =useState(false)
   // const [inputs, setInputs] = useState({})
    
    const [inputs, setInputs] = useState({
      name: '',
      description: '',
      price: '',
      auther: '',
     
      image: ''
     });

    const id =useParams().id;
    //console.log(id)
    useEffect(() => {
        const fetchHandler =async () =>{
            await axios.get(`http://localhost:3000/${id}`)
            // .then(res => console.log(res.data))
           .then((res)=> res.data).then(data=>setInputs(data));
         // .then((res)=> res.data).then(data=>setInputs(data.book));
        }
       fetchHandler()
      ///correct/// fetchHandler().then((data) => setInputs(data.book))
       //fetchHandler().then((data) =>setInputs(data))

    },[id])
    const sendRequest = async() =>{
await axios.put(`http://localhost/3000/${id}`)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(inputs)
       // sendRequest().then(() => history('/'))
      }
      const handleChange = (e) => {
        console.log(e);
        // setInputs((prevState) => ({
        //   ...prevState,
        //   [e.target.name]: e.target.value
        // }))
      }
      console.log(inputs)
  return (
    <div>
    {inputs &&(
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
         
          <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Label" />
          <Button variant='contain' type='submit'>
            Update Book
          </Button>


        </box>
      </form>
      )}
    </div>
  )
}

export default BookDetail
