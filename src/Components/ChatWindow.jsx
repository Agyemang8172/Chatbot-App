import React, { useRef, useState, useEffect } from 'react'


const ChatWindow = ( {messages=[],onSuggestionClick }) => {

     const messagesEndRef = useRef(null);

     useEffect(()=> {
        messagesEndRef.current ?.scrollIntoView({ behavior : 'smooth' })
     },[ messages])
     if (messages.length === 0) {
  return (
    <div className='flex-1 overflow-y-auto px-4 py-6 '>
        <h3 className='text-left text-gray-700 text-lg font-medium mb-6'>Suggestions on what to ask Our AI</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
            {[
                    "What can I ask you to do?",
                    "Which one of the projects is operating the best",
                    "What pojects should I be concerned about right now"
            ].map((suggestion,index)=> (
                    <div
                     key={index}
                     className='bg-white/80 hover:bg-white  rounded-xl hover:shadow-md p-2 transition-all  text-gray-900 
                      duration-200 cursor-pointer text-sm border border-white'

                     onClick={() => onSuggestionClick  && onSuggestionClick(suggestion)}
                    > 
                     {suggestion}
                    </div>
                ))}

          </div>  
      
    </div>
  )
  }
    //Active states when conversation exists
   return(
     <div className='min-h-[200px]  max-h-[400px] overflow-y-auto mb-4'>
        <div className='space-y-4'>
               {messages.map((message)=>(
        <div key={message.id}  
                className={`flex ${message.sender === "user" ? 'justify-end':'justify-start'}`}>
                <div className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 
                ${ message.sender === 'user' 
                ? 'bg-blue-500 text-white'
                 : 'bg-gray-200 text-gray-800'} `}>
                {message.text}

                </div>
         </div>

            ))}

            <div ref={messagesEndRef} />
         
        </div>

     </div>
   )
}


export default ChatWindow
