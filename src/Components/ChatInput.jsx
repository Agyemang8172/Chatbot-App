import React, { useState } from 'react'

const ChatInput = ( {onSendMessage}) => {
    const [input,setInput] = useState("")
    handleSubmit = (e)  => {
        e.preventDefault()
        if(input.trim()) {
            onSendMessage(input.trim())
            SetInput( "")

     }
    }
  return (
      <form>
            <input
            value={input}
            type='text'
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Ask me anything about your project'
            className='flex-1 bg-transparent rounded-md px-10 py-4'
        />
      </form> 
    
  )
}

export default ChatInput
