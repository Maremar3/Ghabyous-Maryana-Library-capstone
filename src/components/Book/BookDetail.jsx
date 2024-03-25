import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BookDetail() {
    const id =useParams().id;
    console.log(id)
    useEffect(() => {
        const fetchHandler =async () =>{
            await axios.get(`http://localhost:3000/${id}`).then(res => console.log(res.data))
        }
        fetchHandler();
    },[id])
  return (
    <div>
      
    </div>
  )
}

export default BookDetail
