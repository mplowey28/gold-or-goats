import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Game from './views/Game'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
