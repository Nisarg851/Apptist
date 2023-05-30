import React from 'react';

import { Router, Routes, Route } from './Router';

import Index from './components/Index';
import Home from './components/Home/Home';
import LoginScreen from './components/User/Login/Login';
import SignUpScreen from './components/User/Registration/Signup';
import SignUpVerification from './components/User/Registration/SignUpVerificationScreen';

import { Amplify } from 'aws-amplify';
import aws_exports from './src/aws-exports';

Amplify.configure(aws_exports);

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Index}/>
        <Route path='/login' Component={LoginScreen}/>
        <Route path='/signup' Component={SignUpScreen} />
        <Route path='/signup/verification' Component={SignUpVerification}/>
      </Routes>
    </Router>
  );
}

export default App;
