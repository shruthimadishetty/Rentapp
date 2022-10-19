import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Rent from './components/Rent'
import Buy from './components/Buy'
import Sell from './components/Sell'
import Manageproperty from './components/Manageproperty'
import Resource from './components/Resource'

import './App.css'

import React from 'react'

const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Rent}/>
        <Route path="/Buy" exact component={Buy}/>
        <Route path="/Sell" exact component={Sell}/>
        <Route path="/Manageproperty" exact component={Manageproperty}/>
        <Route path="/Resource" exact component={Resource}/>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
