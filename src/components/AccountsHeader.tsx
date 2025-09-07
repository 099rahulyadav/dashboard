import type React from "react"
import { CaretDown, Files, Users } from "phosphor-react"
import CreateAccountModal from "./CreateAccountModal"

const AccountsHeader: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-5 gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary-color mb-0.5">My Accounts</h1>
        <p className="text-sm sm:text-md text-secondary-text">Manage client accounts and relationship data</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:flex-shrink-0">
        <button className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white border-[1px] border-strokes-dark rounded-full hover:bg-gray-50 transition-colors">
          <Users size={16} weight="fill" className="text-gray-900" />
          <span className="text-xs sm:text-sm font-medium text-black">All Accounts</span>
          <CaretDown size={16} className="text-black" />
        </button>

        <button className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white border-[1px] border-strokes-dark rounded-full hover:bg-gray-50 transition-colors">
          <span className="text-xs sm:text-sm font-medium text-black">Actions</span>
          <CaretDown size={16} className="text-black" />
        </button>

        <button className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-white border-[1px] border-strokes-dark rounded-full hover:bg-gray-100 transition-colors">
          <Files size={16} weight="fill" className="text-black" />
          <span className="text-xs sm:text-sm font-medium text-gray-700 xs:hidden">Client Survey</span>
        </button>

        {/* Create Account Button*/}
        <CreateAccountModal />
      </div>
    </div>
  )
}

export default AccountsHeader
