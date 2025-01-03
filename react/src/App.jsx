import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/frontant/Home';
import About from './components/frontant/About';
import './assets/css/style.scss';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
