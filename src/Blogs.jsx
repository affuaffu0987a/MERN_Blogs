import React, { useEffect, useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [BlogsData, setBlogsData] = useState([])
    const [Message, setMessage] = useState()
    const getBlogs = async () => {
        try {
            const response = await fetch('http://localhost:5000/v1/users/getblogs', {
                method: 'GET',
            })
            const res = await response.json()
            if (response.ok) {
                setBlogsData(res.data)
            }
            else {
                setMessage(res.data)
            }
        } catch (error) {
            document.write(error)
        }
    }

    const DeleteBlog = async(id)=>{
        try {
            const deleteResponse = await fetch(`http://localhost:5000/v1/users/delete/${id}`,{
                method:'DELETE'
            })
            const ress = await deleteResponse.json()
            if(deleteResponse.ok){
                alert(ress.msg)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBlogs();
    }, [BlogsData])
    return (
        <>
            <div className=' h-screen w-full'>
            <div className='w-full bg-black border text-white p-2'>
            <h1 className='text-xl'><span className='opacity-70'>If you want to write blog,</span> <Link to='/'><span className='hover:text-red-600 cursor-pointer underline font-semibold'>Click Here</span></Link></h1>
            </div>
            <h1 className='text-6xl font-bold my-2 text-center'>Read The Blogs</h1>
                {
                    BlogsData.length !== 0 ? BlogsData.map((data) => {
                        const { username, title, blogs,_id } = data
                        return (
                            <div key={_id} className='flex flex-col justify-center items-center'>
                            
                                <div className='my-3 border p-3'>
                                    <h1 className='font-bold text-2xl'>Title: {title}</h1>
                                    <p className='my-2'>{blogs}</p>
                                    <h1 className='opacity-70 flex justify-end'>~{username}</h1>
                                    <div className='flex justify-end mt-1 gap-3'>
                                    <Link to={`/update/${_id}`}><CiEdit size='30' className='cursor-pointer text-green-500'/></Link>
                                    <AiTwotoneDelete size='30' className='cursor-pointer text-red-500' onClick={()=>DeleteBlog(_id)}/>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :<h1 className='text-4xl font-bold'>{Message}</h1>
                }
            </div>
        </>
    )
}

export default Blogs