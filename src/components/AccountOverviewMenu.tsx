import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  SquaresFour,
  UsersThree,
  AddressBook,
  Briefcase,
  ChartLineUp,
  Note,
  Money,
  Crosshair,
} from "phosphor-react";

const tabs = [
  { label: "Overview", icon: SquaresFour },
  { label: "Contacts", icon: AddressBook },
  { label: "Team", icon: UsersThree },
  { label: "Opportunities", icon: Crosshair },
  { label: "Experience", icon: Briefcase },
  { label: "Performance", icon: ChartLineUp },
  { label: "Notes", icon: Note },
  { label: "Financial", icon: Money },
];

const AccountOverviewMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 mb-4 border border-[#8C8C8C] p-2 rounded-xl">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.label;
        return (
          <Button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            variant="outline"
            className={`flex my-1 items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-2 sm:px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium whitespace-nowrap w-full ${
              isActive
                ? "bg-button text-white"
                : "border border-stroke-gray text-black-900 bg-input-default"
            }`}
          >
            <tab.icon size={14} className="sm:w-4 sm:h-4" />
            {tab.label}
          </Button>
        );
      })}
    </div>
  );
};

export default AccountOverviewMenu;
