import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import ChatWindow from './Components/ChatWindow'


function App() {


  return (
  <div className='min-h-screen min-w-6xl mt-20'>
         <Header />
        <div className=' bg-gradient-to-b from-pink-200 to-blue-200 max-w-3xl '>
              <Messages />
              <ChatWindow />
        </div>
   </div>
   
  )
}

export default App
