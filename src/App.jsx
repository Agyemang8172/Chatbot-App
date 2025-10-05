import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import ChatWindow from './Components/ChatWindow'
import ChatInput from './Components/ChatInput'


function App() {
  const [messages,setMessages] = useState([]);

  const handleSendMessage = async (text)  => {
   const userMessage =  { id:Date.now(),text,sender:'user'};
   setMessages(prev => [...prev,userMessage])

 

  }

    const handleSuggestionClick= (suggestion) => {
     handleSendMessage(suggestion)
   }


  return (
  <div className='min-h-screen flex flex-col items-center  max-w-4xl mx-auto px-4   '>
    <div className=' mt-10'>
       <Header />
    </div>

   <div className='flex-1 w-full min-w-3xl px-4 flex flex-col justify-end'>
       <div className='bg-gradient-to-r  from-pink-400 to-blue-100 p-6 border-none mb-6   '>
         <ChatWindow  messages= {messages} onSuggestionClick={handleSuggestionClick} />
         <ChatInput   onSendMessage = {handleSendMessage}/>
       </div>
  </div>
  </div>
   
  );
};

export default App
