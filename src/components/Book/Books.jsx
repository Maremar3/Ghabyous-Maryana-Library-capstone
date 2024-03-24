
import React, { useEffect, useState } from 'react'
import "./Book.css"
import axios from 'axios'
//  const URL="http://localhost:5173/books"
const URL="http://localhost:3000"
// const URL="http://localhost:5000/books"
const fetchHandler = async() =>{
 return await axios.get(URL).then((res) => res.data)
//console.log(res.data)
}
function Books() {
  const [books, setBooks] = useState();
  useEffect(()=>{

    fetchHandler().then((data)=> setBooks(data));
  },[]);
  console.log(books)

  return (
    <div>
      {/* <ul>
        {books && books.map((book,i)=>{

        
          <div className="book" key={i}> <book book={book} />  </div>

        })
        }
        </ul> */}
        ALL book here
    </div>
  )
}

export default Books

