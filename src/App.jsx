import { useState } from 'react'
import Header from './Components/Header'
import ChatWindow from './Components/ChatWindow'
import ChatInput from './Components/ChatInput'

function App() {
  // ADD MISSING STATE
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // ADD MISSING HANDLER FUNCTIONS
  const handleSendMessage = async (text) => {
    if (isLoading) return;

    const userMessage = { id: Date.now(), text, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // TODO: Add your API call here
      // For now, we'll simulate a response
      setTimeout(() => {
        const aiMessage = { id: Date.now() + 1, text: "This is a simulated response", sender: 'ai' };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      {/* Header - White background */}
      <div className='w-full bg-white'>
        <div className='max-w-4xl mx-auto px-4 py-8'>
          <Header />
        </div>
      </div>

      {/* Main Content - Centered card with gradient, NO BORDER */}
      <div className='flex-1 flex items-center justify-center pb-8'>
        <div className='w-full max-w-2xl mx-auto px-4'>
          <div className='bg-gradient-to-br from-pink-100 to-blue-100 rounded-2xl p-6'>
            <ChatWindow messages={messages} onSuggestionClick={handleSuggestionClick} />
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;