import { Description } from '@mui/icons-material';
import { Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material'
import "../components/Book/Book.css"
import React, { useState } from 'react'
// import box from 'react-dom'

function AddBook() {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    price: '',
    auther: '',
    available: false,
    image: ''
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    //console.log(e.target.name,"value",e.target.value)

  }
  return (
    <div>
      <form>
        <box>


          <FormLabel>Name</FormLabel>
          <TextField value={inputs.name} onChange={handleChange} margin="normal" variant='outlined' name="name" />
          <FormLabel>Auther</FormLabel>
          <TextField margin="normal" variant='outlined' name="auther" />
          <FormLabel>Price</FormLabel>
          <TextField type='number' margin="normal" variant='outlined' name="price" />
          <FormLabel>Description</FormLabel>
          <TextField margin="normal" variant='outlined' name="description" />
          <FormLabel>image</FormLabel>
          <TextField margin="normal" variant='outlined' name="image" />
          {/* <FormControlLabel control={<Checkbox checked={false} />} label="Label" /> */}
          <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Label" />
          <Button variant='contain' type='submit'>
            Add Book
          </Button>


        </box>
      </form>
    </div>
  )
  // return


  // <form>

  // {/* <Box
  //  display = "flex"
  //   flexDirection="column"
  //    justifyContent={'center'} 
  //    maxWidth={700}
  //   alignContent={"center"}
  //   alignSelf="center"
  //   marginLeft={"auto"}
  //   marginRight="auto"
  //   marginTop={10}
  // > */}
  // <FormLabel>Name</FormLabel>
  // <TextField margin="normal" fullwidth variant='outlined' name="name"/>
  //  {/* <FormLabel>Auther</FormLabel>
  //   <TextField value={inputs.name} onChange={handleChange} margin="normal" fullwidth variant='outlined' name="name"/> */}
  // <FormLabel>Auther</FormLabel>
  // <TextField margin="normal" fullwidth variant='outlined' name="auther"/>
  // {/* <FormLabel>Description</FormLabel>
  //   <TextField value={inputs.description} onChange={handleChange} margin="normal" fullwidth variant='outlined' name="auther"/> */}
  //  <FormLabel>Description</FormLabel>
  // <TextField margin="normal" fullwidth variant='outlined' name="description"/>
  //  {/* <FormLabel>Price</FormLabel>
  //   <TextField value={inputs.price} onChange={handleChange} margin="normal" fullwidth variant='outlined' name="description"/> */}
  // <FormLabel>Price</FormLabel>
  // <TextField type="number" margin="normal" fullwidth variant='outlined' name="price"/>
  // <FormLabel>image</FormLabel>
  // <TextField  margin="normal" fullwidth variant='outlined' name="image"/>
  // {/* <TextField value={inputs.image} onChange={handleChange} margin="normal" fullwidth variant='outlined' name="image"/> */}
  //  {/* <FormControlLabel control={<Checkbox checked={inputs.available} />} label="available" /> */}
  // {/* <Button variant="contained" type="submit">Add Book</Button> */}
  //  {/* </Box> */}

  // </form>





  // {/* <form> */}

  // {/* <FormLabel>Name</FormLabel> */}
  // {/* <TextField  margin="normal" fullwidth variant='outlined' name="name" />  */}


  // // </form>

}

export default AddBook

