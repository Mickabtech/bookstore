import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BackButton from './elements/BackButton'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Spinner from './elements/Spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DeleteBooks = () => {

  const [loading, setLoading] = useState(false);
  const {_id} = useParams();
  const navigate = useNavigate()

  const handleDelete = () =>{
      setLoading(true)

      axios.delete(`http://localhost:3005/api/book/${_id}`)
      .then(()=>{
        setLoading(false)
        toast.success("Deleted Successfully")
        setTimeout(()=>{
              navigate('/')
        }, 2000)
      }).catch((error)=>{
        setLoading(false)
          toast.error("Error: ", error)
      })
    }

    return (
      <div className='p-4'>
          <BackButton />
          <h1 className='text-3xl my-4'>Delete Book</h1>
          {
            loading ? (
              <Spinner/>
            ): (
              <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'> 
                        <h3 className='text-2xl'>Are you sure you want to delete this book?</h3>
                        <button onClick={handleDelete}
                        className='p-4 bg-red-600 text-white m-8 w-full'>
                         Yes, Delete
                        </button>
              </div>
            )
          }
       <ToastContainer/>
      </div>
    )
  
  }

 

export default DeleteBooks