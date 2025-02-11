import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUsers from './CreateUser'
import Update from './Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Users /> } />
          <Route path='/create' element={ <CreateUsers /> } />
          <Route path='/update/:id' element={ <Update /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
