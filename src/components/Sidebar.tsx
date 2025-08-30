import React from 'react';
import { 
  Target, 
  Users, 
  FileText, 
  BookOpen, 
  FileCheck, 
  Briefcase, 
  DollarSign, 
  ShoppingCart, 
  BarChart3, 
  LogOut,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { icon: Target, label: 'Opportunities', active: false },
  { icon: Users, label: 'Accounts', active: true },
  { icon: FileText, label: 'Proposals', active: false },
  { icon: BookOpen, label: 'Resources', active: false },
  { icon: FileCheck, label: 'Contracts', active: false },
  { icon: Briefcase, label: 'Projects', active: false },
  { icon: DollarSign, label: 'Finance', active: false },
  { icon: ShoppingCart, label: 'Procurements', active: false },
  { icon: BarChart3, label: 'KPIs', active: false },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static top-0 bottom-0 left-0 z-30 w-64 bg-white border-r border-gray-200 
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 
        transition-transform duration-300 ease-in-out flex flex-col
      `}>
        {/* Close button for mobile */}
        <div className="flex items-center justify-end p-4 lg:hidden">
          <button 
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-1">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button className={`
                  w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors
                  ${item.active 
                    ? 'text-gray-900 border-b-2 border-orange-500' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }
                `}>
                  <item.icon size={18} className={item.active ? 'text-gray-900' : ''} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center space-x-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 hover:text-gray-800 rounded-lg transition-colors">
            <LogOut size={18} />
            <span className="text-sm font-medium">Log-out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;