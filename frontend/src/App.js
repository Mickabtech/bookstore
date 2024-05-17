import React from 'react'
import {Routes, Route} from 'react-router-dom';
import ShowBooks from './components/ShowBooks.js';
import DeleteBooks from './components/DeleteBooks.js';
import EditBooks from './components/EditBooks.js';
import Home from './components/Home.js';
import CreateBooks from './components/CreateBooks.js'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/books/create' element={ < CreateBooks/>}/>
        <Route path='/books/details/:_id' element={< ShowBooks />}/>
        <Route path='/books/edit/:_id' element={<EditBooks/>}/>
        <Route path='/books/delete/:_id' element={<DeleteBooks/>}/>
    </Routes>
  )
}

export default App
