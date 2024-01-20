import React from 'react'
import BlogInput from './BlogInput'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './Blogs'
import UpdateBlogs from './UpdateBlogs'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BlogInput/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path='/update/:id' element={<UpdateBlogs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
