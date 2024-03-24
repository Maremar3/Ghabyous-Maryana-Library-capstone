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
  <div></div>

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
