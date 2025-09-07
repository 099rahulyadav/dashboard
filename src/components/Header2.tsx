import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, List } from "phosphor-react"
import logo from "../assets/logo.png"
import john from "../assets/john.png"

interface HeaderProps {
  onMenuClick: () => void
}

const Header2: React.FC<HeaderProps> = ({ onMenuClick }) => {
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

export default Header2
