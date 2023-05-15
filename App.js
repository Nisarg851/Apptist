import React from 'react';

import { Router, Routes, Route } from './Router';

import Home from './components/Home/Home';
import LoginScreen from './components/User/Login/Login';
import SignUpScreen from './components/User/Registration/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={LoginScreen}/>
        <Route path='/signup' Component={SignUpScreen} />
      </Routes>
    </Router>
  );
}

export default App;
