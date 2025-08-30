import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import logo from '../assets/logo.png';
import john from '../assets/john.png';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="px-6 py-4 flex items-center justify-between relative z-10" style={{ backgroundColor: '#F5F3F2' }}>
      {/* Left side - Logo and menu button */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-1 text-gray-600 hover:text-gray-800"
        >
          <Menu size={20} />
        </button>
        
        <img src={logo} alt="Logo" className="w-36 h-10" />
      </div>

      {/* Center - Search bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={16} />
          <input
            type="text"
            placeholder="Search accounts..."
            className="w-full pl-10 pr-4 py-2 border-[1px] border-gray-500 rounded-full bg-white text-sm focus:outline-none "
          />
        </div>
      </div>

      {/* Right side - Notifications and user */}
      <div className="flex items-center space-x-4 ">
        <button className=" text-gray-600  hover:text-gray-800 relative bg-[#f8f7f6]  rounded-full p-3">
          <Bell  size={20} />
          <span className="absolute -top-0 -right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
            <img 
              src={john}
              alt="John Doe"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-medium text-gray-900">John Doe</div>
            <div className="text-xs text-gray-500">john@gmail.com</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;