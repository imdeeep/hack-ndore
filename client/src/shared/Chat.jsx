
'use client';
import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, isBot: false }]);
      setInputMessage('');
      // Here you would typically call a function to get the bot's response
      // For now, let's just add a mock response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: "I'm processing your request...", isBot: true }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Assets/cb.jpg" alt="ChatBot" className="w-6 h-6 mr-2" />
          <span className="font-bold">ChatBot</span>
        </div>
        <span className="text-sm">hack'ndore</span>
      </div>
      
      <div className="flex-grow overflow-y-auto p-4 bg-gray-100">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.isBot ? 'bg-white' : 'bg-blue-500 text-white'}`}>
              {message.text}
            </div>
            {message.isBot && index === 0 && <div className="text-xs text-gray-500 mt-1">09:20</div>}
          </div>
        ))}
      </div>
      
      <div className="p-4 bg-white border-t">
        <div className="flex items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow px-3 py-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-full ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <IoSend size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
