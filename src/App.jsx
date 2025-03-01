import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import VideoComp from './components/VideoComp.jsx'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/room/:roomID' element={<VideoComp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
