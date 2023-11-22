import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponet from './components/HomeComponent/HomeComponet'
import SucessPage from './components/SuccessPage/SucessPage';
function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponet />} />
        <Route path='successPage'element={<SucessPage/>}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
