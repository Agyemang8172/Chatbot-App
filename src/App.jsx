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

   const handleSuggestionClick= (suggestion) => {
     handleSendMessage(suggestion)
   }

  }


  return (
  <div className='min-h-screen flex flex-col justify-between  '>
    <div className='bg-white mt-30'>
        <Header />
    </div>

     <div className='flex-1 bg-gradient-to-b from-pink-100 to-blue-200'>
         <ChatWindow  messages={messages} onSuggestionClick={handleSuggestionClick} />
         <ChatInput   onSendMessage = { handleSendMessage}/>
     </div>
  </div>
   
  );
};

export default App
