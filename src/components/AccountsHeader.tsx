import React from 'react';
import { ChevronDown, Plus, FileText, MoreHorizontal } from 'lucide-react';

const AccountsHeader: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-orange-500 mb-2">My Accounts</h1>
        <p className="text-sm text-gray-500">Manage client accounts and relationship data</p>
      </div>
      
      <div className="flex items-center space-x-4 mt-4 lg:mt-0">
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
          <span className="text-sm font-medium text-gray-700">All Accounts</span>
          <ChevronDown size={16} className="text-gray-500" />
        </button>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
          <span className="text-sm font-medium text-gray-700">Actions</span>
          <MoreHorizontal size={16} className="text-gray-500" />
        </button>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
          <FileText size={16} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Client Survey</span>
        </button>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
          <Plus size={16} />
          <span className="text-sm font-medium">Create Account</span>
        </button>
      </div>
    </div>
  );
};

export default AccountsHeader;