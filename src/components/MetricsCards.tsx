import React from 'react';
import { Building2, Heart, AlertTriangle, TrendingUp, DollarSign } from 'lucide-react';

const MetricsCards: React.FC = () => {
  const metrics = [
    {
      icon: Building2,
      label: 'Total Accounts',
      value: '15',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-200',
    },
    {
      icon: Heart,
      label: 'AI Health Score',
      value: '78%',
      subtitle: 'Average',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
      borderColor: 'border-orange-200',
    },
    {
      icon: AlertTriangle,
      label: 'High Risk',
      value: '3',
      subtitle: 'Require attention',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
      borderColor: 'border-orange-200',
    },
    {
      icon: TrendingUp,
      label: 'Growing',
      value: '7',
      subtitle: 'Positive Trend',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
      borderColor: 'border-green-200',
    },
    {
      icon: DollarSign,
      label: 'Total Value',
      value: '$92.6M',
      subtitle: 'Portfolio',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
      borderColor: 'border-orange-200',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-6 mb-6 xl:mb-8">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white p-2 xl:p-3 rounded-lg border hover:shadow-sm transition-shadow" style={{ borderColor: '#D9D9D9' }}>
          <div className="flex items-center space-x-2 xl:space-x-3">
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`${metric.iconColor}`} size={14} />
            </div>
            <div className="flex-1">
              <div className={`text-base xl:text-lg font-bold ${metric.color}`}>{metric.value}</div>
              <div className="text-xs text-gray-500 font-medium truncate">{metric.label}</div>
              {metric.subtitle && (
                <div className="text-xs text-gray-400 truncate">{metric.subtitle}</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsCards;