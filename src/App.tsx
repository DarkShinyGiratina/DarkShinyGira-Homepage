import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import AppShellResponsive from './components/AppShellResponsive'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppShellResponsive content={<Home />} />} />
        <Route path='/test' element={<AppShellResponsive content={<Home />} />} />
      </Routes>
    </Router>
  )
}

export default App
