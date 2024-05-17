import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from './elements/BackButton'
import Spinner from './elements/Spinner'


const ShowBooks = () => {

  const {_id} = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3005/api/book/${_id}`)
    .then((response)=>{
      setBook(response.data)
      console.log(response.data)
      setLoading(false)
    }).catch((error)=>{
          console.log(error)
          setLoading(false)
    })
}, [])

  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='text-3xl my-4'>Show Book </h1>
        {
          loading ? (
            <Spinner />
          ):(
            <div className='flex flex-col border-2 border-sky-700 rounded-xl w-fit p-4'>
              
              <div className='my-4 '>
                    <span className='text-xl mr-4 text-gray-500'>
                      Id
                    </span>

                    <span>
                      {book._id}
                    </span>
              </div>

              <div className='my-4 '>
                    <span className='text-xl mr-4 text-gray-500'>
                      Title
                    </span>

                    <span>
                      {book.title}
                    </span>
              </div>

              <div className='my-4 '>
                    <span className='text-xl mr-4 text-gray-500'>
                      Author
                    </span>

                    <span>
                      {book.author}
                    </span>
              </div>

              <div className='my-4 '>
                    <span className='text-xl mr-4 text-gray-500'>
                      Published Year
                    </span>

                    <span>
                      {book.publishedYear}
                    </span>
              </div>
              
              <div className='my-4 '>
                    <span className='text-xl mr-4 text-gray-500'>
                      Created At
                    </span>

                    <span>
                      {new Date(book.createdAt).toString()}
                    </span>
              </div>

              <div className='my-4 '>
                    <span className='text-xl mr-4 text-gray-500'>
                      Updated At
                    </span>

                    <span>
                    {new Date(book.updatedAt).toString()}
                    </span>
              </div>

            </div>
          )
        }
    </div>
  )
}

export default ShowBooks