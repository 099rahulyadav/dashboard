import type React from "react"
import { Buildings, Heartbeat, Warning, TrendUp, Coins } from "phosphor-react"

const MetricsCards: React.FC = () => {
  const metrics = [
    {
      icon: Buildings,
      label: "Total Accounts",
      value: "15",
    },
    {
      icon: Heartbeat,
      label: "AI Health Score",
      value: "78%",
      subtitle: "Average",
    },
    {
      icon: Warning,
      label: "High Risk",
      value: "3",
      subtitle: "Require attention",
    },
    {
      icon: TrendUp,
      label: "Growing",
      value: "7",
      subtitle: "Positive Trend",
    },
    {
      icon: Coins,
      label: "Total Value",
      value: "$92.6M",
      subtitle: "Portfolio",
    },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 xl:gap-4 mb-4 xl:mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white p-2 sm:p-3 xl:p-4 rounded-2xl border-[2px] border-strokes-dark hover:shadow-sm transition-shadow min-w-0"
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1.5 sm:p-2 xl:p-3 rounded-full bg-input-default text-primary-color flex-shrink-0">
              <metric.icon size={14} weight="fill" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] sm:text-xs text-secondary-text font-medium mb-0.5 truncate">{metric.label}</div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="text-xs sm:text-sm xl:text-base font-bold text-black ">{metric.value}</div>
                {metric.subtitle && (
                  <div className="text-[10px] sm:text-xs font-semibold text-black truncate">{metric.subtitle}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MetricsCards
