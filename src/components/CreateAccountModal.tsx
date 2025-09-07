import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkle, Plus, Globe } from "phosphor-react"

export default function CreateAccountModal() {
  return (
    <Dialog>
      {/* Trigger: "+ Create Account" button */}
      <DialogTrigger asChild>
        <Button className="bg-[#0F0901] text-white rounded-2xl">
          <Plus size={16} /> Create Account
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl max-w-[95vw] bg-white !rounded-3xl p-8 sm:p-8 max-h-[90vh] overflow-y-scroll scrollbar-none">
        <DialogHeader className="border-b border-stroke-gray pb-4 sm:pb-6 items-start">
          <DialogTitle className="text-xl sm:text-2xl font-semibold text-primary-color">Create New Account</DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-secondary-text">
            Add a new client account to your portfolio
          </DialogDescription>
        </DialogHeader>

        {/* Company Website */}
        <div className="mb-4 sm:mb-2">
          <div className="flex items-center gap-2 mb-2">
            <Sparkle className="bg-stroke-gray text-primary-color rounded-full p-1.5 sm:p-2 size-6 sm:size-8" weight="fill"/>
            <Label className="text-lg sm:text-xl">Company Website (AI Smart Population)</Label>
          </div>

          <div className="relative mt-2">
            <Globe size={16} className="absolute left-2 top-2.5 sm:top-2 text-gray-800 sm:size-5" />
            <Input
              type="url"
              placeholder="https://your-company.com"
              className="pl-7 sm:pl-8 rounded-xl text-[#2277F6] bg-input-default focus:bg-input-active border-stroke-gray focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Grid Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <Label className="text-sm sm:text-base">Client Name *</Label>
            <Input
              placeholder="Company Name"
              className="rounded-xl mt-1 sm:mt-2 border-stroke-gray text-bold bg-input-default placeholder:text-secondary-text focus:border-strokes focus:bg-input-active focus:text-black focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base"
            />
          </div>
          <div>
            <Label className="text-sm sm:text-base">Client Address</Label>
            <Input
              placeholder="Billing address (auto-fill by AI)"
              className="rounded-xl mt-1 sm:mt-2 border-stroke-gray text-bold bg-input-default placeholder:text-secondary-text focus:border-strokes focus:bg-input-active focus:text-black focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base"
            />
          </div>

          <div>
            <Label className="text-sm sm:text-base">Primary Contact</Label>
            <Input
              placeholder="Contact Name"
              className="rounded-xl mt-1 sm:mt-2 border-stroke-gray text-bold bg-input-default placeholder:text-secondary-text focus:border-strokes focus:bg-input-active focus:text-black focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base"
            />
          </div>
          <div>
            <Label className="text-sm sm:text-base">Contact Email</Label>
            <Input
              placeholder="Email address"
              type="email"
              className="rounded-xl mt-1 sm:mt-2 border-stroke-gray text-bold bg-input-default placeholder:text-secondary-text focus:border-strokes focus:bg-input-active focus:text-black focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base"
            />
          </div>

          <div>
            <Label className="text-sm sm:text-base">Client Market Sector *</Label>
            <Select>
              <SelectTrigger className="mt-1 sm:mt-2 rounded-xl text-bold bg-input-default border-stroke-gray focus:bg-input-active focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              {/* <SelectContent className="bg-white border-gray-300">
                <SelectItem value="tech" className="text-gray-500 hover:bg-gray-100 hover:text-orange-400">Technology</SelectItem>
              </SelectContent> */}
            </Select>
          </div>
          <div>
            <Label className="text-sm sm:text-base">Client Type *</Label>
            <Select>
              <SelectTrigger className="mt-1 sm:mt-2 rounded-xl text-bold bg-input-default border-stroke-gray focus:bg-input-active focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base">
                <SelectValue placeholder="Select tier" />
              </SelectTrigger>
              {/* <SelectContent className="bg-white border-gray-300">
                <SelectItem value="tier1" className="text-gray-500 hover:bg-gray-100 hover:text-orange-400">Tier 1</SelectItem>
              </SelectContent> */}
            </Select>
          </div>

          <div>
            <Label className="text-sm sm:text-base">Hosting Area/Office</Label>
            <Select>
              <SelectTrigger className="mt-1 sm:mt-2 rounded-xl text-bold bg-input-default border-stroke-gray focus:bg-input-active focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base">
                <SelectValue placeholder="Select office" />
              </SelectTrigger>
              {/* <SelectContent className="bg-white border-gray-300">
                <SelectItem value="ny" className="text-gray-500 hover:bg-gray-100 hover:text-orange-400">New York</SelectItem>
              </SelectContent> */}
            </Select>
          </div>
          <div>
            <Label className="text-sm sm:text-base">MSA In Place</Label>
            <Select>
              <SelectTrigger className="mt-1 sm:mt-2 rounded-xl text-bold bg-input-default border-stroke-gray focus:bg-input-active focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0 text-sm sm:text-base">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              {/* <SelectContent className="bg-white border-gray-300">
                <SelectItem value="yes" className="text-gray-500 hover:bg-gray-100 hover:text-orange-400">Yes</SelectItem>
              </SelectContent> */}
            </Select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-2 justify-between">
          <Button
            variant="outline"
            className="px-4 sm:px-6 py-2 text-sm order-2 sm:order-1 w-full sm:w-auto bg-white text-black border-strokes-dark rounded-xl"
          >
            Cancel
          </Button>
          <Button className="px-4 sm:px-6 py-2 text-sm bg-black text-white order-1 sm:order-2 w-full sm:w-auto rounded-xl">
            Create Account
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
