import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/home'
import SignIn from './Pages/signin'
import SignUp from './Pages/signup'
import Layout from './components/Layout'
import Dashboard from './Pages/dashboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
