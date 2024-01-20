import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBlogs = () => {
  const [DataForUpdate, setDataForUpdate] = useState({
    username:"",
    title:"",
    blogs:""
  })
  const navigate = useNavigate()
  const blogsId = useParams()

  const handleInputs = (e) => {
    const {name,value} = e.target
    setDataForUpdate({
      ...DataForUpdate,
      [name]:value
    })
  }

  const GetUpdatedData = async (id) => {
    try {
      const updatedResponse = await fetch(`http://localhost:5000/v1/users/getupdatedata/${id}`, {
        method: 'GET'
      })
      const response = await updatedResponse.json()
      if (updatedResponse.ok) {
        setDataForUpdate(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleForm = async (e) => {
    e.preventDefault()
    try {
      const BlogsUpdate = await fetch(`http://localhost:5000/v1/users/updated/${blogsId.id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(DataForUpdate)
      })
      const resss = await BlogsUpdate.json()
      if(BlogsUpdate.ok){
        alert(resss.msg)
        setDataForUpdate(resss.data)
        navigate('/blogs')

      }
    } catch (error) {
      document.write(error)
    }
  }

  useEffect(() => {
    GetUpdatedData(blogsId.id)
  }, [])
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center flex-col gap-3'>
        <h1 className='text-5xl font-semibold'>Your Blogs</h1>
        <form onSubmit={handleForm} className='flex flex-col gap-4 w-1/2'>
          <input
            placeholder='username'
            name='username'
            value={DataForUpdate.username}
            type='text'
            required
            className='border outline-none focus:border-black p-2'
            onChange={handleInputs}
          />
          <input
            placeholder='title'
            name='title'
            value={DataForUpdate.title}
            type='text'
            required
            className='border outline-none focus:border-black p-2'
            onChange={handleInputs}
          />
          <textarea
            placeholder='Write Blogs...'
            cols='20'
            type='text'
            rows='4'
            name='blogs'
            value={DataForUpdate.blogs}
            required
            className='border outline-none focus:border-black p-2'
            onChange={handleInputs}
          />
          <button type='submit' value='send' className='bg-black text-white font-bold p-2 w-1/2 m-auto'>Update</button>
        </form>
      </div>
    </>
  )
}

export default UpdateBlogs