import React from "react";
import {
  Clock,
  CurrencyCircleDollar,
  Star,
  Users,
  CheckCircle,
} from "phosphor-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const PastPerformanceCard: React.FC = () => {
  const metrics = [
    {
      icon: Clock,
      value: "95%",
      label: "On-Time Delivery",
    },
    {
      icon: CurrencyCircleDollar,
      value: "98%",
      label: "Budget Compliance",
    },
    {
      icon: Star,
      value: "4.8/5.0",
      label: "Client Satisfaction",
    },
    {
      icon: Users,
      value: "85%",
      label: "Repeat Client Rate",
    },
    {
      icon: CheckCircle,
      value: "24",
      label: "Safety Record",
      subLabel: "month zero incidents",
    },
  ];

  return (
    <Card className="rounded-2xl border border-stroke-gray shadow-sm mt-6 bg-white h-full">
      <CardHeader className="pb-2 ">
        <CardTitle className="text-lg font-bold text-black">
          Past Performance
        </CardTitle>
        <p className="text-xs sm:text-sm text-secondary-text border-b border-stroke-gray pb-2">
          Performance metrics and client satisfaction
        </p>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="p-4 py-6 rounded-xl border border-strokes-dark flex flex-col items-start justify-start"
              >
                {/* Icon inside circle */}
                <div className="w-14 h-14 rounded-full bg-input-default flex items-center justify-center mb-4 border border-stroke-gray">
                  <Icon size={22} weight="fill" className="text-primary-color" />
                </div>

                {/* Value + optional subLabel (always one line) */}
                <p className="text-xl sm:text-2xl font-bold text-black leading-snug flex items-baseline gap-1 whitespace-nowrap">
                  {metric.value}
                  {metric.subLabel && (
                    <span className="text-xs text-black font-semibold">
                      {metric.subLabel}
                    </span>
                  )}
                </p>

                {/* Label */}
                <p className="text-sm font-normal mt-1 text-secondary-text">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default PastPerformanceCard;
