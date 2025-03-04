import './App.css';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Adout from './components/About.js';
import Notfound from './components/Notfound.js'
import Card from './components/Card.js';
import Register from './components/Register.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path='/' Component={Home} />
          <Route path='/card' Component={Card} />
          <Route path='/about' Component={Adout} />
          <Route path='/register' Component={Register} />
          <Route path='*' Component={Notfound} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;

