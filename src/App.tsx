import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import {observer} from 'mobx-react'


function App() {
  
  return (
    <Home/>
  )
}

export default observer(App)
