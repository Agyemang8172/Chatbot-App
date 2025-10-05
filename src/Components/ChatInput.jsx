// Updated ChatInput.jsx with proper width
import { useState } from 'react'

const ChatInput = ({ onSendMessage }) => {
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
                    className='bg-blue-500 text-white px-4 py-3 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
                >
                    
                </button>
            </form>
        </div>
    )
}

export default ChatInput 