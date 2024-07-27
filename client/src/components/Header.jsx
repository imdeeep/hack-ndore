'use client';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full text-white py-4 z-50 bg-[#1b1b1bb9] bg-opacity-70">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div>
            <Image src="/Logo.svg" width={200} height={100} alt="Logo" />
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? null : <MenuIcon fontSize="large" />}
            </button>
          </div>
          <nav className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 md:bg-transparent md:static md:flex md:items-center md:justify-end transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0`}>
            <div className="flex flex-col md:flex-row md:space-x-6 mt-6 md:mt-0 text-start ml-2 md:text-left md:mr-4">
              <button onClick={toggleMenu} className="self-end md:hidden focus:outline-none mb-6 mr-6">
                <CloseIcon fontSize="large" />
              </button>
              <Link href="/"><div className="hover:underline py-2 md:py-0">About</div></Link>
              <Link href="/services"><div className="hover:underline py-2 md:py-0">Online Services</div></Link>
              <Link href="/schemes"><div className="hover:underline py-2 md:py-0">Schemes</div></Link>
              <Link href="/explore"><div className="hover:underline py-2 md:py-0">Explore the City</div></Link>
              <Link href="/information"><div className="hover:underline py-2 md:py-0">Information</div></Link>
              <Link href="/contacts"><div className="hover:underline py-2 md:py-0">Contacts</div></Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
