
import Header from '@/components/Header';
import  Footer  from '@/components/Footer';
import Cards from '@/components/Cards';
import React from 'react';
import { PiChatCircleDotsFill } from "react-icons/pi";
import Link from 'next/link';


const page = () => {
  return (
    <>
    <Link href="" className='fixed z-[999] bottom-8 right-3 bg-blue-600 p-2 rounded-full'>
      <PiChatCircleDotsFill size={30} color='white'/>
</Link>
      <Header />
      
      {/* Page 1 */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover select-none">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Page 2 */}
      <div className='w-full min-h-auto'>
        <Cards /> 
      </div>

      <Footer />
      </>
  )
}

export default page


