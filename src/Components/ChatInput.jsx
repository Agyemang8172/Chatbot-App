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
                    placeholder='Ask me anything about your projects...'
                    className='flex-1 bg-transparent outline-none px-4 py-3'
                />
                <button 
                    type='submit'
                    disabled={!input.trim()}
                    className='bg-blue-500 text-white px-4 py-3 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default ChatInput