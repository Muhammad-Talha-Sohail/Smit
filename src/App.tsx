import './App.css';
import React from 'react';
import {Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
const App = () => {
  return (
    <div className='app'>
<Routes>

<Route path='/' element={ <Home/>} />
<Route path='/about' element={ <About/>} />
<Route path='/service' element={ <Service />} />

</Routes>
  </div>
   );
};

export default App;