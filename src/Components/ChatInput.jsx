import { useState } from 'react'
import { LuSendHorizontal } from "react-icons/lu"
import { FaSpinner } from "react-icons/fa"

const ChatInput = ({ onSendMessage, isLoading }) => {
  // ADD MISSING STATE
  const [input, setInput] = useState("");

  // ADD MISSING HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className='flex bg-white/80 rounded-xl overflow-hidden'>
        <input
          value={input}
          type='text'
          onChange={(e) => setInput(e.target.value)}
          placeholder='Ask me anything about your projects'
          className='flex-1 bg-transparent outline-none px-4 py-3'
        />
        <button 
          type='submit'
          disabled={!input.trim() || isLoading}
          className='px-6 py-3 hover:bg-blue-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
        >
          {isLoading ? <FaSpinner className="h-6 w-6 animate-spin" /> : <LuSendHorizontal className='h-6 w-6'/>}
        </button>
      </form>
    </div>
  );
}

export default ChatInput;