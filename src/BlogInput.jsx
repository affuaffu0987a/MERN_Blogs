import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BlogInput = () => {
    const [Blogs,setBlogs] = useState({
        username:"",
        title:"",
        blogs:""
    })

    const handleInputs =(e)=>{
        const {name,value} = e.target
        setBlogs({
            ...Blogs,
            [name]:value
        })
    }

    const handleForm = async(e)=>{
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:5000/v1/users/blogs',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(Blogs)
            })
            const res = await response.json()
            if(response.ok){
                alert(res.msg)
                setBlogs({
                    username:"",
                    title:"",
                    blogs:""
                })
            }
        } catch (error) {
            document.write(error)
        }
    }
    return (
        <>
        <div className='w-full bg-black border text-white p-2 absolute'>
            <h1 className='text-xl'><span className='opacity-70'>Read the Awesome and Interesting Blogs,</span> <Link to='/blogs'><span className='hover:text-red-600 cursor-pointer underline font-semibold'>Click Here</span></Link></h1>
            </div>
            <div className='w-full h-screen flex items-center justify-center flex-col gap-3'>
            <h1 className='text-5xl font-semibold'>Write Blogs</h1>
                <form onSubmit={handleForm} className='flex flex-col gap-4 w-1/2'>
                    <input
                        placeholder='username'
                        name='username'
                        value={Blogs.username}
                        type='text'
                        required
                        className='border outline-none focus:border-black p-2'
                        onChange={handleInputs}
                    />
                    <input
                        placeholder='title'
                        name='title'
                        value={Blogs.title}
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
                        value={Blogs.blogs}
                        required
                        className='border outline-none focus:border-black p-2'
                        onChange={handleInputs}
                    />
                    <button type='submit' value='send' className='bg-black text-white font-bold p-2 w-1/2 m-auto'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default BlogInput