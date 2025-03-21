import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import CompPage from './stores/pages/CompPage'
import WatchPage from './stores/pages/WatchPage'
import Login from './stores/components/Login';

import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import MobileSingle from './stores/singles/MobileSingle'
import UserCart from './stores/UserCart'
import FridgePage from './stores/pages/FridgePage'
import ComputerSingle from './stores/singles/ComputerSingle'

import KitchenSingle from './stores/singles/KitchenSingle'
import AcSingle from './stores/singles/AcSingle'
import WatchSingle from './stores/singles/WatchSingle'
import FridgeSingle from './stores/singles/FridgeSingle'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <LandingPage />}/>
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<CompPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        <Route path='/fridge' element={<FridgePage />} />
          
                
        <Route path='/ac' element= {<AcPage />} />             
           <Route path='/mobiles/:id' element = {<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />
      <Route path='/ac/:id' element = {<AcSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />
      <Route path="/login" element={<Login />} />
      
      </Routes>
    </div>
  )
}

export default App