import React from 'react';
import { Home, Info, Phone, Image, Video, Clock } from 'lucide-react';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  return (
    <header className="bg-orange-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shri Lakshmi<br></br> Narsingh Mandir</h1>
        <ul className="flex space-x-4">
          <li><button onClick={() => setCurrentPage('home')} className="flex items-center"><Home size={18} className="mr-1" /> Home</button></li>
          <li><button onClick={() => setCurrentPage('about')} className="flex items-center"><Info size={18} className="mr-1" /> About</button></li>
          <li><button onClick={() => setCurrentPage('contact')} className="flex items-center"><Phone size={18} className="mr-1" /> Contact</button></li>
          <li><button onClick={() => setCurrentPage('gallery')} className="flex items-center"><Image size={18} className="mr-1" /> Gallery</button></li>
          <li><button onClick={() => setCurrentPage('liveAarti')} className="flex items-center"><Video size={18} className="mr-1" /> Live Aarti</button></li>
          <li><button onClick={() => setCurrentPage('timings')} className="flex items-center"><Clock size={18} className="mr-1" /> Timings</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;