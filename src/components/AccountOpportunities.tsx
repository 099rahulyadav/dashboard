import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function AccountOpportunities() {
  const opportunities = [
    {
      title: "Metro Rail Extension Project",
      stage: "03 - Proposal",
      stageColor: "bg-primary-color text-white",
      value: "$ 12.5M",
      probability: "85%",
      rfp: "Sep 2025",
      hasProposal: true,
    },
    {
      title: "Bus Rapid Transit System",
      stage: "02 - Qualified",
      stageColor: "bg-primary-color text-white",
      value: "$ 7.5M",
      probability: "70%",
      rfp: "Jan 2025",
      hasProposal: false,
    },
  ];

  return (
    <Card className="rounded-xl shadow-sm border border-stroke-gray bg-white">
      <CardHeader className="pt-2 pb-0 m-0">
        <CardTitle className="text-xl font-bold">
          Account Opportunities
        </CardTitle>
        <p className="text-xs text-secondary-text font-normal">
          Active and historical opportunities for this account
        </p>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 py-2 px-5 m-0">
        {opportunities.map((opp, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 border border-stroke-gray rounded-lg p-3"
          >
            {/* Header Row */}
            <div className="flex items-center gap-4">
              <p className="text-sm font-bold text-button">{opp.title}</p>
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-2xl  ${opp.stageColor}`}
              >
                {opp.stage}
              </span>
            </div>

            {/* Details Row */}
            <div className="flex py-2.5 flex-col md:flex-row md:items-center md:justify-between gap-2 border border-stroke-dark rounded-xl p-2">
              <div className="border-r-2 border-strokes-dark flex-1 flex justify-center flex-col items-center text-center">
                <p className="text-sm font-semibold text-primary-color pb-1">Value</p>
                <p className="text-sm font-semibold ">{opp.value}</p>
              </div>


              <div className="border-r-2 border-strokes-dark flex-1 flex justify-center flex-col items-center text-center">
                <p className="text-sm font-semibold text-primary-color pb-1">Probability</p>
                <p className="text-sm font-semibold">{opp.probability}</p>
              </div>


              <div className="flex-1 flex justify-center flex-col items-center text-center">
                <p className="text-sm font-semibold text-primary-color pb-1">Expected RFP</p>
                <p className="text-sm font-semibold">{opp.rfp}</p>
              </div>
            </div>

            {/* Actions Row */}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 sm:justify-end">
               {opp.hasProposal && (
                <Button className="bg-button  text-white rounded-md px-3 py-1 text-sm font-medium">
                  View Proposal
                </Button>
              )}
              <Button
                variant="outline"
                className="border-stroke-gray text-button hover:bg-input-default rounded-md px-3 py-1 text-sm font-medium bg-transparent"
              >
                click to view opportunity details
              </Button>
            </div>




          </div>
        ))}
      </CardContent>
    </Card>
  );
}





// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"

// export function AccountOpportunities() {
//   const opportunities = [
//     {
//       title: "Metro Rail Extension Project",
//       stage: "03 - Proposal",
//       stageColor: "bg-[#ED8A09] text-white",
//       value: "$ 12.5M",
//       probability: "85%",
//       rfp: "Sep 2025",
//       hasProposal: true,
//     },
//     {
//       title: "Bus Rapid Transit System",
//       stage: "02 - Qualified",
//       stageColor: "bg-[#ED8A09] text-white",
//       value: "$ 7.5M",
//       probability: "70%",
//       rfp: "Jan 2025",
//       hasProposal: false,
//     },
//   ]

//   return (
//     <Card className="rounded-none shadow-sm border-0 border-t border-b border-gray-200 bg-white w-full">
//       <CardHeader className="pt-4 pb-2 px-6">
//         <CardTitle className="text-lg font-semibold text-gray-900">Account Opportunities</CardTitle>
//         <p className="text-sm text-gray-500 mt-1">Active and historical opportunities for this account</p>
//       </CardHeader>

//       <CardContent className="px-6 pb-6 space-y-4">
//         {opportunities.map((opp, idx) => (
//           <div key={idx} className="border border-gray-200 rounded-lg p-4 space-y-4">
//             <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
//               <h3 className="text-base font-semibold text-gray-900 flex-1">{opp.title}</h3>
//               <span className={`text-xs font-medium px-3 py-1 rounded-full ${opp.stageColor} w-fit`}>{opp.stage}</span>
//             </div>

//             <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-gray-300">
//                 <div className="text-center px-2">
//                   <p className="text-sm font-medium text-[#ED8A09] mb-1">Value</p>
//                   <p className="text-lg font-semibold text-gray-900">{opp.value}</p>
//                 </div>

//                 <div className="text-center px-2">
//                   <p className="text-sm font-medium text-[#ED8A09] mb-1">Probability</p>
//                   <p className="text-lg font-semibold text-gray-900">{opp.probability}</p>
//                 </div>

//                 <div className="text-center px-2">
//                   <p className="text-sm font-medium text-[#ED8A09] mb-1">Expected RFP</p>
//                   <p className="text-lg font-semibold text-gray-900">{opp.rfp}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 sm:justify-end">
//               {opp.hasProposal && (
//                 <Button className="bg-black hover:bg-gray-800 text-white rounded-md px-4 py-2 text-sm font-medium">
//                   View Proposal
//                 </Button>
//               )}
//               <Button
//                 variant="outline"
//                 className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md px-4 py-2 text-sm font-medium bg-transparent"
//               >
//                 click to view opportunity details
//               </Button>
//             </div>
//           </div>
//         ))}
//       </CardContent>
//     </Card>
//   )
// }
