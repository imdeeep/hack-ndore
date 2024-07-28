"use client";
import React, { useState, useEffect } from 'react';
import Office from './Office';
import { useRouter } from 'next/navigation';

const Admin = () => {
    const [activePage, setActivePage] = useState("home");
    const router = useRouter();

    useEffect(() => {
        setActivePage("home");
    }, []);

    const handleNavigation = (page) => {
        setActivePage(page);
        if (page === "home") {
            router.push('/admin');
        }
    }

    const handleHelp = () => {
        router.push('/chat');
    }

    const handleLogout = () => {
        router.push('/');
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            <div className="w-full md:w-64 bg-blue-600 text-white">
                <div className="p-4">
                    <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
                </div>
                <nav className="flex flex-col p-4">
                    <button onClick={() => handleNavigation("home")} className={`py-2 px-4 rounded transition duration-200 ${activePage === "home" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>HOME</button>
                    <button onClick={() => handleNavigation("office")} className={`py-2 px-4 rounded mt-2 transition duration-200 ${activePage === "office" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>OFFICES</button>
                    <button onClick={() => handleNavigation("profile")} className={`py-2 px-4 rounded mt-2 transition duration-200 ${activePage === "profile" ? 'bg-blue-700' : 'hover:bg-blue-700'}`}>PROFILES</button>
                    <button onClick={handleHelp} className="py-2 px-4 rounded mt-2 transition duration-200 hover:bg-blue-700">HELP</button>
                    <button onClick={handleLogout} className="py-2 px-4 rounded mt-2 transition duration-200 hover:bg-blue-700">LOGOUT</button>
                </nav>
            </div>

            <div className="flex-grow p-6 md:p-10 overflow-y-auto">
                {activePage === "home" && (
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Admin Dashboard</h2>
                        <p className="text-xl text-gray-600">Select an option from the sidebar to get started.</p>
                    </div>
                )}
                {activePage === "office" && <Office />}
                {activePage === "profile" && (
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Profile</div>
                                <h2 className="block mt-1 text-lg leading-tight font-medium text-black">Demo User</h2>
                                <p className="mt-2 text-gray-500">demouser.gmail.com</p>
                                <p className="mt-4"><span className="font-semibold">User Type:</span> admin</p>
                                <p className="mt-4"><span className="font-semibold">Other Information:</span></p>
                                <p className="mt-2 text-gray-600">I am a participant of hack'ndore</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
