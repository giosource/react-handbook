import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path="/dashboard" element={< Dashboard />}></Route>
      </Routes>
    </Router>
  )
}
  
export default App
