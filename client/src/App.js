import React from 'react'
// import Layout from './components/Layout/Layout'
import {Navigate,Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Pagenotfound from './pages/Pagenotfound'
import Members from './pages/Members'
import Challenges from './pages/Challenges'
import Login from './pages/login'
import Events from './pages/Events'
import Table from './pages/Table'
import { useAuthContext } from './hooks/useAuthContext'
import Header from './components/Layout/Header'
import Leaderboard from './pages/Leaderboard'
function App() {
  const location = useLocation();
  const { user } = useAuthContext();
  // console.log(user.user.name)
  console.log = () => {};
  return (
    <>
      {(location.pathname === '/login') ?
        <Routes>
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path='*' element={<Pagenotfound />} /> 
        </Routes> : <>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/members" element={<Members/>}/>
          {/* <Route path="/challenges" element={}/> */}
          <Route path="/challenges" element={!user ? <Login /> : <Challenges/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
          </Routes>
        </>
      }

    </>
  )
}

export default App