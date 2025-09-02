import React from 'react';
import { Bell }  from "phosphor-react";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import logo from '../assets/logo.png';
import john from '../assets/john.png';


const Header2: React.FC = () => {
  return (
    <header className="px-6 py-2 flex items-center justify-between bg-[#F5F3F2] ">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <div className="flex items-center gap-3">
          <div>
             <img src={logo} alt="Logo" className="w-36 h-10" />
          </div>
        </div>
      </div>

      {/* Right side - Notifications and user */}
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon"
          className="relative text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full bg-white"
        >
          <Bell size={20} />
          <span className="absolute -top-0 -right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={john} alt="John Doe" />
            <AvatarFallback className="bg-orange-500 text-white text-sm">JD</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <div className="text-sm font-medium text-gray-900">John Doe</div>
            <div className="text-xs text-gray-500">john330@gmail.com</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;