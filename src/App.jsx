import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import {BrowserRouter as Router, Routes, Route, Link} from 'react'
import Contact from './pages/Contact'


function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <Router>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/contact'>Contacto</Link>
              </li>

            </ul>
          </div>
          <Routes>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
