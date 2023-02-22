// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// Components
import Login from './pages/Login'

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
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </ApolloProvider>
    </Router>
  )
}

export default App
