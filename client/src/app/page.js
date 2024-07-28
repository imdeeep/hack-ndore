"use client";
import React, { useState } from 'react';
import Cards from '@/components/Cards';
import { PiChatCircleDotsFill } from "react-icons/pi";
import Chat from '@/shared/Chat';
import OverviewAndServices from '@/components/overview';
import Municipalities from '@/components/Municipalities';

const page = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <>
    {/* <Link href="/chat" className='fixed z-[999] bottom-10 right-4 bg-blue-600 p-2 rounded-full'>
      <PiChatCircleDotsFill size={30} color='white'/>
</Link> */}
{isChatOpen && (
        <div className="fixed z-[1000] bottom-20 right-4 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
          <Chat />
        </div>
      )}
      
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <PiChatCircleDotsFill size={24} />
      </button>
      
      {/* Page 1 */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover select-none">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Page 2 */}
      <div className='w-full min-h-auto'>
        <Cards /> 
      </div>

      <OverviewAndServices />
      <Municipalities />

      </>
  )
}

export default page;
