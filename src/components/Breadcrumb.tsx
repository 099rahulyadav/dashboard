import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6">
      <span className="text-blue-600 font-medium">Dashboard</span>
      <ChevronRight size={14} className="text-gray-400" />
      <span className="text-gray-700 font-medium">Accounts</span>
    </nav>
  );
};

export default Breadcrumb;