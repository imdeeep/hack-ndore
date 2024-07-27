"use client"

import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { useSearchParams } from "next/navigation";
import axios from "axios";  // Make sure axios is imported

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      position: "left",
      message: "Hello! How can I assist you today?",
    },
  ]);
  const [messageInput, setMessageInput] = useState("");
  const [loading, setLoading] = useState(false); 
  const searchParams = useSearchParams();
  const chatId = searchParams.get("chatId");
  console.log(chatId);

  const sendMessage = async () => {
    if (messageInput.trim()) {
      const newMessage = { position: "right", message: messageInput };
      setMessages([...messages, newMessage]);
      setMessageInput("");
      setLoading(true); 
      setMessages((prevMessages) => [
        ...prevMessages,
        { position: "left", message: "Generating response..." },
      ]);

      try {
        const response = await axios.post('http://localhost:5000/api/chat/getAnswer', {
          question: messageInput
        });

        const data = response.data;
        console.log(data);

        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { position: "left", message: data },
        ]);
      } catch (error) {
        console.error('Error sending question:', error);
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { position: "left", message: "Sorry, there was an error generating the response." },
        ]);
      } finally {
        setLoading(false); 
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="px-2 pb-2 w-full h-[100vh] flex flex-col justify-between">
      <div className="w-full h-[3.5rem] flex items-center justify-between border-b border-gray-100">
        <div>
          <h1 className="text-xl">ChatBot</h1>
          <p className="text-[#8B8989] leading-[0.9rem] text-sm">hack'ndore</p>
        </div>
        <BsThreeDotsVertical
          size={18}
          color="#8B8989"
          className="mr-1 cursor-pointer"
        />
      </div>
      {/* Chat Area */}
      <div className="py-2 h-full overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex relative ${msg.position === 'right' ? 'justify-end' : ''} mt-5`}>
            {msg.position === 'left' && (
              <div className="w-12 h-12 overflow-hidden border rounded-[5px] absolute bottom-1 left-2">
                <img
                  src="https://imgs.search.brave.com/ebAO6-_sd6CEWyAiQsrttP3UzjX1lg3ZB9GCugNWizA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/b2JvdC1kb2luZy1w/ZWFjZS1zaWduXzEw/NDgtMzUyNy5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw"
                  className="object-cover w-full h-full align-middle"
                  alt="Alex Hunt"
                />
              </div>
            )}
            <div className={`bubble ${msg.position} relative ${msg.position === 'right' ? 'mr-16' : 'ml-16'} p-4 ${msg.position === 'right' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} rounded-lg shadow-md min-w-[8vw] max-w-[50vw]`}>
              <p className="mb-2">{msg.message}</p>
              <p className="absolute text-xs right-3 bottom-2">09:20</p>
            </div>
            {msg.position === 'right' && (
              <div className="w-12 h-12 overflow-hidden border rounded-[5px] absolute bottom-1 right-2">
                <img
                  src="https://img.freepik.com/free-photo/portrait-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-casual-grey-shirt-smiling_176420-15741.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1719100800&semt=ais_user"
                  className="object-cover w-full h-full align-middle"
                  alt="John Doe"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Message Box */}
      <div className="w-full h-10 flex items-center bg-[#EEEEF8] rounded-[5px] px-2 relative">
        <input
          type="text"
          placeholder="Your message"
          className="flex-grow text-sm bg-transparent outline-none px-2"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <TbSend
          color="#2C2D76"
          size={18}
          className="cursor-pointer ml-2"
          onClick={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
