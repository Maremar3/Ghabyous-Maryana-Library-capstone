import { Description } from '@mui/icons-material';
import { FormLabel, TextField } from '@mui/material'
import React, { useState } from 'react'

function AddBook() {
  const  [inputs,setInputs]=useState({
    name:'',
    description:'',
    price:'',
    auther:'',
    available:false,
    image:''

  });
return(
<form>

 {/* <Box
 display = "flex"
  flexDirection="column"
   justifyContent={'center'} 
   maxWidth={700}
  alignContent={"center"}
  alignSelf="center"
  marginLeft={"auto"}
  marginRight="auto"
  marginTop={10}
> */}
  <FormLabel>Name</FormLabel>
  <TextField margin="normal" fullwidth variant='outlined' name="name"/>
  {/* <FormLabel>Auther</FormLabel>
  <TextField value={inputs.name} onChange={handleChange} margin="normal" fullwidth variant='outlined' name="name"/> */}
  <FormLabel>Auther</FormLabel>
  <TextField  margin="normal" fullwidth variant='outlined' name="auther"/>
  {/* <FormLabel>Description</FormLabel>
  <TextField value={inputs.description} onChange={handleChange} margin="normal" fullwidth variant='outlined' name="auther"/> */}
  <FormLabel>Description</FormLabel>
   <TextField margin="normal" fullwidth variant='outlined' name="description"/>
  {/* <FormLabel>Price</FormLabel>
  <TextField value={inputs.price} onChange={handleChange} margin="normal" fullwidth variant='outlined' name="description"/> */}
  <FormLabel>Price</FormLabel>
   <TextField type="number" margin="normal" fullwidth variant='outlined' name="price"/>
  <FormLabel>image</FormLabel>
  <TextField  margin="normal" fullwidth variant='outlined' name="image"/>
  {/* <TextField value={inputs.image} onChange={handleChange} margin="normal" fullwidth variant='outlined' name="image"/> */}
  {/* <FormControlLabel control={<Checkbox checked={inputs.available} />} label="available" /> */}
{/* <Button variant="contained" type="submit">Add Book</Button> */}
  {/* </Box> */}

</form>
)
  // return (
  //   <div>
  //     Add Books From Here
  //   </div>
  // )
}

export default AddBook

// import React from 'react'

// const AddBook = () => {
//   return 
//     <div>
//       Add Books From Here
//     </div>
  
// }

// export default AddBook
