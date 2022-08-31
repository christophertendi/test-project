import React from "react"
import SignUp from "./auth0/SignUp"
import Profile from "./auth0/Profile"
import Login from "./auth0/Login"
import Private from "./auth0/Private"
import FPassword from "./auth0/FPassword"
import PrivateB from "./auth0/PrivateB"
import Home from "./main/Home"
import { AuthP } from '../isi/iAuth'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return ( 
          <Router>
            <AuthP>
              <Routes>
                <Route exact path="/" element={<PrivateB><Home /></PrivateB>} />
                <Route exact path="/profile" element={<Private><Profile /></Private>} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/fPassword" element={<FPassword />} />
              </Routes>
            </AuthP>
          </Router>
      
  )
}

export default App
