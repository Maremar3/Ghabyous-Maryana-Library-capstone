
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import AddBook  from "./components/AddBook.jsx";
import About  from "./components/About.jsx";
import Books   from "./components/Book/Books.jsx";
import BookDetail   from "./components/Book/BookDetail.jsx";

import { Route, Routes } from 'react-router-dom'
function App() {
  return (<React.Fragment>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddBook />} exact />
        <Route path="/books" element={<Books />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/:id" element= {<BookDetail />}exact />
        </Routes>
    </main>
    {/* <div>
<Header/>
  </div> */}
  </React.Fragment>

  );
}


export default App
