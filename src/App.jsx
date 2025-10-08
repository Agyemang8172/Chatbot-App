import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import ChatWindow from './Components/ChatWindow'
import ChatInput from './Components/ChatInput'



function App() {
  const [messages,setMessages] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

 

  const handleSendMessage = async (text)  => {
   if (isLoading)  return;

   const userMessage =  { id:Date.now(),text,sender:'user'};
   setMessages(prev => [...prev,userMessage])
   setIsLoading(true)
    

try{
     const response = await fetch('http://localhost:3001/chat', {
      method:'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ message:text })
     })
     
  
     if(!response.ok) {
        throw new Error('Network responses was not ok.')
      }


        const data = await response.json();
        const aiResponse = data.text

        const aiMessage = {  id:Date.now() + 1, text: aiResponse, sender:"ai"};
        setMessages((prev) => [...prev,aiMessage])
       } 


      catch (error) { 
           console.error ('Failed to get responses from an API:'
          , error) ;
     const errorMessage = {
        id : Date.now() + 1,
        text: "Sorry I am unable to respond right now",
        sender: 'ai'
       };
       setMessages((prev) => [...prev,errorMessage])
      } finally{
           setIsLoading(false);
      }
};
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
