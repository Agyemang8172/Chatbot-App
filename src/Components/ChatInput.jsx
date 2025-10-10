// Updated ChatInput.jsx with proper width
import { useState } from 'react'
import { LuSendHorizontal } from "react-icons/lu"
import  {  FaSpinner }  from  "react-icons/fa"

const ChatInput = ({ onSendMessage,isLoading }) => {
    const [input, setInput] = useState("")
   
    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.trim()) {
            onSendMessage(input.trim())
            setInput("")
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto"> {/* Centering container */}
              <form onSubmit={handleSubmit} className='flex bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
                  <input
                    value={input}
                    type='text'
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Ask me anything about your projects'
                    className='flex-1 bg-transparent outline-none px-4 py-3'
                  />
                <button 
                    type='submit'
                    disabled={!input.trim()}
                    className='  px-8 py-3  hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
                >
   
                    { isLoading ? <FaSpinner  className ="h-6 w-6" /> : <LuSendHorizontal  className='h-6 w-6'/>  }
                </button>
            </form>
        </div>
    )
}

export default ChatInput 