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

      return (<>
    <header className="fixed flex top-0 left-0 w-full justify-between opacity-70 text-white py-4 z-50">
      <div><Image src={"/Logo.svg"} width={200} height={100} alt='Abc'/></div>
      <div className="container mx-auto flex items-center">
       
       <div>
       <div className="flex items-center md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
       
      <nav className={`] space-x-4 md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/"><div className="hover:underline py-2 md:py-0">About</div></Link>
          <Link href="/services"><div className="hover:underline py-2 md:py-0">Online Services</div></Link>
          <Link href="/schemes"><div className="hover:underline py-2 md:py-0">Schemes</div></Link>
          <Link href="/explore"><div className="hover:underline py-2 md:py-0">Explore the City</div></Link>
          <Link href="/information"><div className="hover:underline py-2 md:py-0">Information</div></Link>
          <Link href="/contacts"><div className="hover:underline py-2 md:py-0">Contacts / Helplines</div></Link>
          <Link href="/tenders"><div className="hover:underline py-2 md:py-0">Tenders</div></Link>
        </nav>
        </div>
      </div>
    </header>
  </>
  );
};

export default Header;
