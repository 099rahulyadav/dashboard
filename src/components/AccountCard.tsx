import React from 'react';
import { MapPin, Building, User, TrendingUp, Sparkles } from 'lucide-react';

interface Account {
  id: number;
  name: string;
  score: string;
  riskLevel: string;
  riskColor: string;
  riskBg: string;
  location: string;
  office: string;
  tier: string;
  category: string;
  value: string;
  valueColor: string;
  growth: string;
  growthColor: string;
  growthBg: string;
  borderColor: string;
}

interface AccountCardProps {
  account: Account;
}

// Helper function to get border color based on risk level
const getBorderColor = (riskLevel: string): string => {
  switch (riskLevel.toLowerCase()) {
    case 'low risk':
      return '#10B981'; // green
    case 'medium risk':
      return '#F59E0B'; // orange
    case 'high risk':
      return '#EF4444'; // red
    default:
      return '#6B7280'; // gray
  }
};

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-4 hover:shadow-lg transition-all duration-200 cursor-pointer relative overflow-hidden border-b-4"
      style={{ borderBottomColor: getBorderColor(account.riskLevel) }}
    >
      {/* Header with title and star */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg xl:text-xl font-bold text-gray-900 leading-tight pr-4">
          {account.name}
        </h3>
        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <Sparkles className="text-orange-400" size={16} />
        </div>
      </div>

      {/* Score and Risk badges */}
      {/* <div className="flex items-center space-x-3 mb-3">
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50">
          <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
            <TrendingUp className="text-white" size={10} />
          </div>
          <span className={`text-sm font-semibold ${account.growthColor}`}>{account.score}</span>
          <TrendingUp className={`text-sm font-semibold ${account.growthColor}`} size={12} />
        </div>
        <div className="px-3 py-1.5 rounded-full border border-green-200 bg-green-50">
          <span className="text-sm font-semibold text-green-700">{account.riskLevel}</span>
        </div>
      </div> */}

        <div className="flex items-center space-x-3 mb-3">
        <div
          className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border ${account.borderColor} ${account.growthBg}`}
        >
          <div className="w-4 h-4 bg-blue-500 rounded-sm flex items-center justify-center">
            <TrendingUp className="text-white" size={10} />
          </div>
          <span className={`text-sm font-semibold  ${account.growthColor}`}>
            {account.score}
          </span>
          <TrendingUp className={account.growthColor} size={12} />
        </div>
        <div
          className={`px-3 py-1.5 rounded-full border ${account.borderColor} ${account.riskBg}`}
        >
          <span className={`text-sm font-semibold ${account.riskColor}`}>
            {account.riskLevel}
          </span>
        </div>
      </div>

      {/* Contact and location info */}
      <div className="flex items-center space-x-4 mb-3 text-gray-400 text-sm">
        <div className="flex items-center space-x-1.5">
          <User size={14} className="text-gray-400" />
          <span>David Rodriguez</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <MapPin size={14} className="text-gray-400" />
          <span>{account.location}</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <Building size={14} className="text-gray-400" />
          <span>{account.office}</span>
        </div>
      </div>

      {/* Tier and category */}
      <div className="flex items-center space-x-3 mb-3">
        <span className="text-green-600 font-semibold text-sm">{account.tier}</span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-900 font-semibold text-sm">{account.category}</span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-3"></div>

      {/* Value and growth section */}
      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl xl:text-3xl font-bold text-green-600 mb-1">
            {account.value}
          </div>
          <div className="text-sm font-semibold text-gray-900">Total Value</div>
        </div>
        <div className="px-3 py-1.5 rounded-full border border-green-200 bg-green-50">
          <span className="text-sm font-semibold text-green-700">{account.growth}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;