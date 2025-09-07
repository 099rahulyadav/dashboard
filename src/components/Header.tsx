import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MagnifyingGlass, Bell, List } from "phosphor-react"
import logo from "../assets/logo.png"
import john from "../assets/john.png"

interface HeaderProps {
  onMenuClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header
      className="px-4 sm:px-6 py-4 flex items-center justify-between relative z-10 bg-background-color"
    >
      {/* Left side - Logo and menu button */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button onClick={onMenuClick} className="lg:hidden p-1 text-gray-600 hover:text-gray-800">
          <List size={20} />
        </button>

        <img src={logo} alt="Logo" className="w-26 sm:w-30 h-8 sm:h-10" />
      </div>

      {/* Center - Search bar */}
      <div className="flex flex-1 max-w-xs sm:max-w-xs md:max-w-md mx-2 sm:mx-4 lg:mx-8">
        <div className="relative w-full">
          <MagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={16} />
          <input
            type="text"
            placeholder="Search accounts..."
            className="w-full pl-10 pr-4 py-2 border-[1px] border-black rounded-full bg-input-active text-sm focus:outline-none focus:border-primary-color focus:text-black focus:ring-0 focus-visible:ring-0 placeholder:text-secondary-text"
          />
        </div>
      </div>

      {/* Right side - Notifications and user */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button className="text-button hover:text-button-hover relative bg-stroke-gray rounded-full p-2 sm:p-3">
          <Bell size={18} weight="fill" />
          <span className="absolute -top-0 -right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10">
            <AvatarImage src={john} alt="John Doe" />
            <AvatarFallback className="bg-orange-500 text-white text-xs sm:text-sm">JD</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <div className="text-sm font-medium text-gray-900">John Doe</div>
            <div className="text-xs text-gray-500">john330@gmail.com</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
