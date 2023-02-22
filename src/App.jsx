// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Login from './pages/Login'

// Styles
import './styles/App.css'

function App () {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
