import React, { useState } from "react";

const AccountsHeader: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prev) => !prev); // toggle edit state
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 gap-3">
      {/* Left: Account title + ID */}
      <div className="min-w-0 flex-1"> {/* flex-1 + min-w-0 allows truncate to work properly */}
        <h1
          className="text-lg sm:text-2xl  lg:text-3xl font-semibold text-primary-color mb-0.5 truncate"
          title="Los Angeles County Metropolitan Transportation Authority (Metro)"
        >
          Los Angeles County Metropolitan Transportation Authority (Metro)
        </h1>
        <p className="text-xs sm:text-sm font-medium text-secondary-text">ACC-001</p>
      </div>

      {/* Right: Action Button */}
      <div className="flex items-center flex-shrink-0">
        <button
          onClick={handleEditClick}
          className={`${
            isEditing ? "bg-button text-white" : " text-black"
          } flex lg:ml-10 items-center justify-center whitespace-nowrap px-4 py-2 border border-stroke-dark rounded-xl transition-colors`}
        >
          <span className="text-sm font-medium">Edit Account</span>
        </button>
      </div>
    </div>
  );
};

export default AccountsHeader;
