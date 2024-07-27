"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Office from './Office';

const Admin = ({ children }) => {
    const [isOpen, setIsOpen] = useState("");

    const handleOffice = ()=>{
        setIsOpen("office");
    }
    const handleProfile = ()=>{
        setIsOpen("profile");
    }
  return (
    <>
      <div className="w-full h-[100vh] flex">
        {/* Categories */}
        <div className="w-[15%] h-full bg-yellow-400 flex flex-col gap-10 justify-center items-center py-10">
          <Link href="/"className="hover:underline">HOME
          </Link>
          <button onClick={handleOffice} className="hover:underline">OFFICES
          </button>
          <button onClick={handleProfile} className="hover:underline">PROFILES
          </button>
          <Link href="/chat" className="hover:underline">HELP         </Link>
          <Link href="/logout" className="hover:underline">LOGOUT
          </Link>
        </div>
        {/* Admin Area */}
        <div className="w-[85%] h-full  p-10 overflow-y-auto">
          {
            isOpen === "office" ? (<Office/>) : isOpen === "profile" ? ( <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Demo User</h2>
                <p className="text-gray-600">demouser.gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">User Type: admin</h3>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Other Information:</h3>
                <p>I am participants of hack'ndore</p>
              </div>
            </div>) : ( <div>Welcome to Admin DashBoard</div>)
          }
        </div>
      </div>
    </>
  );
};

export default Admin;
