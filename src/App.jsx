// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// Pages
import Login from './pages/Login'
import Home from './pages/Home'

// Layouts
import NavBar from './layouts/NavBar'

// Styles
import './styles/App.css'

function App () {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/'
  })
  return (
    <Router>
      <ApolloProvider client={client}>
        <NavBar />
        <Routes>
          <Route index element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </ApolloProvider>
    </Router>
  )
}

export default App
