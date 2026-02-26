import { useState } from 'react'
import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home  from './Pages/home'
import SignIn from './Pages/signin'
import SignUp from './Pages/signup'
import Layout from './components/Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App
