'use client'
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  // State to manage which category is active
  const [activeCategory, setActiveCategory] = useState('men');

  return (
    <header className="w-full p-4">
      <div className="flex justify-between items-center container">
        {/* Left Side - Category Buttons */}
        <div className="flex gap-5">
          <Image src="/images/icon.png" alt='logo' height={28} width={32}/>
          <div className='flex items-center'>

          <button
            onClick={() => setActiveCategory('men')}
            className={`px-4 py-2 rounded-lg ${activeCategory === 'men' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            Men
          </button>
          <div className={`${activeCategory==='kits' ? "border-r border-[black] h-4" : ""}`}></div>
          <button
            onClick={() => setActiveCategory('women')}
            className={`px-4 py-2 rounded-lg ${activeCategory === 'women' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            Women
          </button>
          <div className={`${activeCategory==='men' ? "border-r border-[black] h-4" : ""}`}></div>
          <button
            onClick={() => setActiveCategory('kits')}
            className={`px-4 py-2 rounded-lg ${activeCategory === 'kits' ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            Kits
          </button>
          </div>
        </div>

        {/* Right Side - Sign Up Button */}
        <div>
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
