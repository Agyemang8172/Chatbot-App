import React, { useRef } from 'react'

const ChatWindow = () => {
     const messagesEndRef = useRef(null);

     useEffect(()=> {
        messagesEndRef.current ?.scrollIntoView( {behavior : 'smooth'})
     },[ messages])
  return (
    <div className='flex-1 overflow-y-auto px-4 py-6'>
        <h3 className='text-left text-gray-700 text-lg font-medium'>Suggestions on what to ask Our AI</h3>
          <div>
            {[
                    "What can i ask you to do?",
                    "Which one of the projects is operating the best",
                    "What pojects should I be concerned about right now"
                
                ].map((suggestion,index)=> (
                    <div
                     key={index}
                     className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer'
                    > 
                     {suggestion}
                    </div>
                ))}

          </div>  
      
    </div>
  )
}

export default ChatWindow
