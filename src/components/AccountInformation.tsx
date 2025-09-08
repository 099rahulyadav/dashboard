import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe } from "phosphor-react";

export default function AccountInformation() {
  return (
    <Card className="w-full h-full bg-white border-stroke-gray mb-4">
      <CardContent className="p-4 sm:p-6 space-y-6 flex flex-col h-full">
        {/* Header */}
        <div className="border-b border-stroke-gray pb-3">
          <h2 className="text-xl font-bold text-black">
            Account information
          </h2>
          <p className="text-md text-secondary-text">
            Complete account overview and profile details
          </p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <Label className="text-sm text-secondary-text">Account Id</Label>
            <Input
              placeholder="ACC-001"
              readOnly
              className="bg-input-default  placeholder:text-black text-sm border-stroke-gray font-medium truncate focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
          <div className="sm:col-span-2">
            <Label className="text-sm text-secondary-text">Client Name</Label>
            <Input
              placeholder="Los Angeles County Metropolitan Transportation Authority (Metro)"
              readOnly
              className="bg-input-default  placeholder:text-black text-sm border-stroke-gray font-medium truncate focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label className="text-sm text-secondary-text">Client Type</Label>
            <Input
              readOnly
              placeholder="Tier 1"
              className="bg-input-default  placeholder:text-black text-sm border-stroke-gray font-medium truncate focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
          <div>
            <Label className="text-sm text-secondary-text">Market Sector</Label>
            <Input
              readOnly
              placeholder="Transportation"
              className="bg-input-default placeholder:text-black text-sm border-stroke-gray font-medium truncate focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div>
          <Label className="text-sm text-secondary-text">Address</Label>
          <Input
            readOnly
            placeholder="1234 Long Street, Example City, State, 90000"
            className="bg-input-default placeholder:text-black text-sm border-stroke-gray font-medium truncate sm:whitespace-normal focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
          />
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="lg:col-span-2">
            <Label className="text-sm text-secondary-text">Website</Label>
            <div className="relative">
              <Globe size={16} className="absolute left-2 top-2 text-gray-800" />
              <Input
                readOnly
                placeholder="https://your-company.com"
                className="bg-input-default pl-7 text-sm text-blue-700 border-stroke-gray truncate focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <Label className="text-sm text-secondary-text">Hosting Area</Label>
            <Input
              readOnly
              placeholder="West Coast Office"
              className="bg-input-default  text-sm border-stroke-gray font-medium focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
          <div>
            <Label className="text-sm text-secondary-text">MSA In Place</Label>
            <Input
              readOnly
              placeholder="Yes"
              className="text-sm text-primary-color placeholder:text-primary-color bg-[#ED8A0933] border-stroke-gray font-medium focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
          <div>
            <Label className="text-sm text-secondary-text">Account Approver</Label>
            <Input
              readOnly
              placeholder="David Rodriguez - Senior Partner"
              className="bg-input-default text-sm border-stroke-gray font-medium truncate sm:whitespace-normal focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
          <div>
            <Label className="text-sm text-secondary-text">Approval Date & Time</Label>
            <Input
              readOnly
              placeholder="December 15, 2024 at 2:30 PM PST"
              className="bg-input-default text-sm border-stroke-gray font-medium truncate sm:whitespace-normal focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
        </div>
        
      </CardContent>
    </Card>
  );
}
