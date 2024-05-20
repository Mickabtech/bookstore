import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BackButton from './elements/BackButton'
import { useParams } from 'react-router-dom'
import Spinner from './elements/Spinner'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const EditBooks = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const [editedbook, setEditedBook] = useState([])
  const [loading, setLoading] = useState(false);
  const {_id} = useParams();

  const navigate = useNavigate()


  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3005/api/book/${_id}`)
    .then((response)=>{
      // setTitle(response.data.title)
      // setAuthor(response.data.author)
      // setPublishedYear(response.data.publishedYear)

      setEditedBook(response.data)
      setLoading(false)
    }).catch((error)=>{
      setLoading(false)
        toast.error("Error: ", error)
    })
  })
 

  const handleEditBook = () =>{
   

    const data = {

      title: title,
      author: author,
      publishedYear: publishedYear
    }

    setLoading(true)

    
    axios.put(`http://localhost:3005/api/book/${_id}`, data)
    .then(()=>{

      setLoading(false)
      toast.success("Book Edited Successfully!!!")
      setTimeout(() => {
        navigate('/')
      }, 1000);
      
    }).catch((error)=>{
      console.log(error)
      toast.error("Error:", error)
    })

  }

  return (
    <div className='p-4'>
        <BackButton />

        <h1 className='text-3xl my-4'> Edit Book</h1>

        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>

            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Title</label>
                <input type='text' 
                placeholder={editedbook.title}
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'/>
            </div>

            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Author</label>
                <input type='text' 
                placeholder={editedbook.author}
                value={author} 
                onChange={(e)=>setAuthor(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'/>
            </div>

            <div className='my-4'>
                <label className='text-xl mr-4 text-gray-500'>Published Year</label>
                <input type='text' 
                placeholder={editedbook.publishedYear}
                value={publishedYear} 
                onChange={(e)=>setPublishedYear(e.target.value)}
                className='border-2 border-gray-500 px-4 py-2 w-full'/>
            </div>

            <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
              Save
            </button>

        </div>

      <ToastContainer/>

    </div>
  )
}

export default EditBooks