import React from 'react'
import Homepage from './components/Homepage';
import Model3 from './components/Model3';
import Modely from './components/Modely';
import Models from './components/Models';
import Modelx from './components/Modelx';
import Header from './components/Header';
import Solarpanel from './components/Solarpanel';
import Solarroof from './components/Solarroof'
import { Routes, Route} from 'react-router-dom'

import './App.css';

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<Homepage/>} />    
          <Route path='/model3' element={<Model3/>}/>
          <Route path='/modely' element={<Modely/>}/>
          <Route path='/models' element={<Models/>}/>
          <Route path='/modelx' element={<Modelx/>}/>
          <Route path='/solarpanel' element={<Solarpanel/>}/>
          <Route path='/solarroof' element={<Solarroof/>}/>
      </Routes>
    </>
  )
}

