import React from 'react';
import AccountCard from './AccountCard';

const accountsData = [
  {
    id: 1,
    name: 'Los Angeles County Metropolitan Transportation Authority (Metro)',
    score: '92%',
    riskLevel: 'Low risk',
    color: 'text-[#5F936F]',
    bgColor: 'border-[#5F936F]',
    location: 'Los Angeles, CA',
    office: 'West Coast Office',
    tier: 'Tier 1',
    category: 'Transportation',
    value: '$8.5M',
    valueColor: 'text-[#5F936F]',
    growth: '+15.3% Growth',
    borderColor: 'border-[#5F936F]',
    growthColor: 'text-[#5F936F]',
    growthBg: 'bg-[#EFF5F1]',
    riskColor: 'text-[#5F936F]',
    riskBg: 'bg-[#EFF5F1]',
    border: 'border-[#5F936F]',
    accName:'David Rodriguez'
  },
  {
    id: 2,
    name: 'Los Angeles County Metropolitan Transportation Authority (Metro)',
    score: '92%',
    riskLevel: 'Medium risk',
    color: 'text-[#CD812A]',
    bgColor: 'bg-[#FAF3EA]',
    location: 'Los Angeles, CA',
    office: 'West Coast Office',
    tier: 'Tier 1',
    category: 'Transportation',
    value: '$8.5M',
    valueColor: 'text-[#CD812A]',
    growth: '+15.3% Growth',
    borderColor: 'border-[#CD812A]',
    growthColor: 'text-[#CD812A]',
    growthBg: 'bg-[#FAF3EA]',
    riskColor: 'text-[#CD812A]',
    riskBg: 'bg-[#FAF3EA]',
    border: 'border-[#5F936F]',
    accName:'David Rodriguez',

  },
  {
    id: 3,
    name: 'Los Angeles County Metropolitan Transportation Authority (Metro)',
    score: '92%',
    riskLevel: 'High risk',
    color: 'text-[#FF7B7B]',
    bgColor: 'bg-[#FFF2F2]',
    location: 'Los Angeles, CA',
    office: 'West Coast Office',
    tier: 'Tier 1',
    category: 'Transportation',
    value: '$8.5M',
    valueColor: 'text-[#FF7B7B]',
    growth: '+15.3% Growth',
    borderColor: 'border-[#FF7B7B]',
    growthColor: 'text-[#FF7B7B]',
    growthBg: 'bg-[#FFF2F2]',
    riskColor: 'text-[#FF7B7B]',
    riskBg: 'bg-[#FFF2F2]',
    accName:'David Rodriguez'
  },
];

const AccountsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-4">
      {accountsData.map((account) => (
        <AccountCard key={account.id} account={account}  />
      ))}
    </div>
  );
};

export default AccountsList;