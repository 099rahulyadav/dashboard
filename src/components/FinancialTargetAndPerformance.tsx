import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function FinancialTargetAndPerformance() {
  return (
    <div className="flex flex-col gap-3 mt-2">
      {/* Financial Target & Performance */}
      <Card className="rounded-xl shadow-sm border border-stroke-gray bg-white">
        <CardHeader className="py-2 px-4 ">
          <CardTitle className="text-xl font-bold">
            Financial Target & Performance
          </CardTitle>
          <p className="text-xs text-secondary-text font-normal border-b border-stroke-gray pb-3">
            Revenue target and financial performance tracking
          </p>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4 py-3 px-4">
          {/* Annual Revenue Target */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-button">
              Annual Revenue Target
            </label>
            <Input
              placeholder="$ 8.5M"
              className=" placeholder:text-button h-9 text-sm font-medium bg-input-default border-stroke-gray  focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"

            />
          </div>

          {/* Quarterly Target */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-button">
              Quarterly Target
            </label>
            <Input
              placeholder="$ 2.1M"
              className="placeholder:text-button h-9 text-sm font-medium bg-input-default border-stroke-gray  focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"

            />
          </div>

          {/* Current Year Actual */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-button">
              Current Year Actual
            </label>
            <Input
            //   value="$ 5.9M"
            placeholder="$ 5.9M"
              className="placeholder:text-button h-9 text-sm font-medium bg-input-default border-stroke-gray  focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>

          {/* Growth Target */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-button">
              Growth Target
            </label>
            <Input
              placeholder="15%"
              className="placeholder:text-button h-9 text-sm font-medium bg-input-default border-stroke-gray  focus:border-strokes focus:outline-none focus:ring-0 focus-visible:ring-0"
            />
          </div>
        </CardContent>
      </Card>

      {/* Account Documents */}
      <Card className="rounded-xl shadow-sm border border-stroke-gray bg-white">
        <CardHeader className="py-1.5 px-4">
          <CardTitle className="text-xl font-bold">Account Documents</CardTitle>
          <p className="text-xs text-secondary-text font-normal border-b border-stroke-gray pb-3">
            Upload presentations and documents for this account
          </p>
        </CardHeader>

        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 py-3 px-4">
          <div className="flex flex-col items-center justify-center rounded-xl bg-[#F0FDF4] py-4">
            <p className="text-2xl font-bold text-[#167852]">72%</p>
            <p className="text-xs font-semibold text-button mt-2">Target Achieved</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-[#EFF6FF] py-4">
            <p className="text-2xl font-bold text-[#1E40AF]"> + 18%</p>
            <p className="text-xs font-semibold text-button mt-2">Revenue Growth</p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-[#F0E6F8] py-4">
            <p className="text-2xl font-bold text-[#9333EA]">94%</p>
            <p className="text-xs font-semibold text-button mt-2">Forecast Accuracy</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
