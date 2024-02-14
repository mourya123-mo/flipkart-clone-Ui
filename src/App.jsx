import React from 'react'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Component/Util/Header'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App