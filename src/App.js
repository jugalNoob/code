import React from 'react'

import {Routes,Route} from "react-router-dom"

import { BrowserRouter } from "react-router-dom";
import Home from "./Enter/Home"
import Form from "./Enter/Form"
import Login from "./Enter/Login"
import Dapp from "./Enter/Dapp"


function App() {
  return (
    <div>
    {/* first row class line */}

<BrowserRouter>



    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="dapp" element={ <Dapp/> } />
        <Route path="form" element={ <Form/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
</BrowserRouter>

{/* 
last row class line  */}
    </div>
  )
}

export default App