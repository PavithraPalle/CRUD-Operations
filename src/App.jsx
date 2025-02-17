import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from './crudcomponents/Create'
import Edit from './crudcomponents/Edit'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/create' element={<Create />} />
        <Route path='/edit/:userId' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App