
import React, { useEffect, useState } from 'react'
import "./Book.css"
import axios from 'axios'
import Book from './Book'
const URL = "http://localhost:3000/book"
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}
function Books() {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data));
  }, []);
  console.log(books)

  return (
    <div className='displayall'>
      <ul>
        {books &&
          books.map((book, i) => (
            <div key={i}>
              <Book book={book} />
            </div>
          ))
        }
      </ul>

    </div>
  )
}

export default Books

