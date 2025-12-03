import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Header from './Components/Header'
import Verify from './Pages/Verify'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />}/>
        <Route path='/verify' element={<Verify />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
