import React, { useRef, useEffect } from 'react'

const ChatWindow = ({ messages = [], onSuggestionClick }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ADD THE MISSING SUGGESTIONS ARRAY
  const suggestions = [
    "What can I ask you to do?",
    "Which one of my projects is performing the best?",
    "What projects should I be concerned about right now?"
  ];

  // Default suggestions when no messages
  if (messages.length === 0) {
    return (
      <div className='text-center'>
        <h3 className='text-gray-700 text-lg font-medium mb-6'>
          Suggestions on what to ask Our AI
        </h3>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => onSuggestionClick && onSuggestionClick(suggestion)}
              className='bg-white/80 rounded-xl p-4 hover:bg-white transition-all duration-200 cursor-pointer text-gray-700 text-sm'
            >
              {suggestion}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Active chat when messages exist
  return (
    <div className='min-h-[200px] max-h-[400px] overflow-y-auto mb-4'>
      <div className='space-y-4'>
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default ChatWindow;