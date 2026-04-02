// import { AlertTriangle } from "lucide-react"

// const gaps = [
//   { title: "[Gap 1 Title]", description: "[Identified product or market gap]", impact: "High" },
//   { title: "[Gap 2 Title]", description: "[Identified product or market gap]", impact: "Medium" },
//   { title: "[Gap 3 Title]", description: "[Identified product or market gap]", impact: "High" },
//   { title: "[Gap 4 Title]", description: "[Identified product or market gap]", impact: "Low" },
// ]

// const getImpactColor = (impact: string) => {
//   switch (impact) {
//     case "High": return "sticky-pink"
//     case "Medium": return "sticky-orange"
//     default: return "sticky-yellow"
//   }
// }

// export function ProductGapsSection() {
//   return (
//     <section id="gaps" className="py-24 px-6 relative">
//       <div className="max-w-5xl mx-auto">
//         {/* Section header */}
//         <div className="sticky-note sticky-pink p-4 inline-block rotate-1 mb-6">
//           <div className="pin" />
//           <span className="font-[family-name:var(--font-caveat)] text-2xl">08 - Product Gaps</span>
//         </div>
        
//         <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-12 ml-4">
//           what&apos;s missing? what needs work?
//         </p>
        
//         <div className="flex flex-wrap gap-6 justify-center">
//           {gaps.map((gap, index) => {
//             const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"]
//             return (
//               <div 
//                 key={index}
//                 className={`sticky-note ${getImpactColor(gap.impact)} p-6 w-full md:w-72 ${rotations[index]} hover:scale-105 transition-transform`}
//               >
//                 <div className="tape" />
                
//                 {/* Impact badge */}
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-2">
//                     <AlertTriangle className="w-5 h-5" />
//                     <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold">{gap.title}</h3>
//                   </div>
//                   <span className={`text-xs font-bold px-2 py-1 rounded ${
//                     gap.impact === "High" ? "bg-red-500/20 text-red-700" :
//                     gap.impact === "Medium" ? "bg-orange-500/20 text-orange-700" :
//                     "bg-yellow-500/20 text-yellow-700"
//                   }`}>
//                     {gap.impact}
//                   </span>
//                 </div>
                
//                 <p className="text-sm text-foreground/80">
//                   {gap.description}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
        
//         {/* Annotation */}
//         <div className="mt-8 text-center">
//           <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
//             opportunity areas
//           </span>
//         </div>
//       </div>
//     </section>
//   )
// }



import { AlertTriangle } from "lucide-react"

const gaps = [
  { 
    title: "User Acquisition Flow", 
    description: "The biggest gap is onboarding. There is no solution for how consumers and merchants find each other on LessPay. A payment app relies on network effects: fewer merchants means less incentive to download, and vice versa.", 
    impact: "High" 
  },
  { 
    title: "Insufficient Incentive for Habit", 
    description: "There is no strong, dynamic feedback loop for daily use. The “coins” reward is essentially cashback, but many users have seen cashback schemes collapse or become negligible.", 
    impact: "High" 
  },
  { 
    title: "UX Friction at Payment", 
    description: "Having to switch apps, enter bills, scan codes – each step is friction. The ideal would be to integrate LessPay functionality into a single streamlined app flow.", 
    impact: "High" 
  },
  { 
    title: "No Clear Moat", 
    description: "Technically, LessPay has nothing proprietary. A competitor could copy its discount model in weeks. The product has no barrier.", 
    impact: "Medium" 
  },
]

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "High": return "sticky-pink"
    case "Medium": return "sticky-orange"
    default: return "sticky-yellow"
  }
}

export function ProductGapsSection() {
  return (
    <section id="gaps" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="sticky-note sticky-pink p-4 inline-block rotate-1 mb-6">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            08 - Product Gaps
          </span>
        </div>
        
        <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-12 ml-4">
          what&apos;s missing? what needs work?
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center">
          {gaps.map((gap, index) => {
            const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"]
            return (
              <div 
                key={index}
                className={`sticky-note ${getImpactColor(gap.impact)} p-6 w-full md:w-72 ${rotations[index]} hover:scale-105 transition-transform`}
              >
                <div className="tape" />
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold">
                      {gap.title}
                    </h3>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    gap.impact === "High" ? "bg-red-500/20 text-red-700" :
                    gap.impact === "Medium" ? "bg-orange-500/20 text-orange-700" :
                    "bg-yellow-500/20 text-yellow-700"
                  }`}>
                    {gap.impact}
                  </span>
                </div>
                
                <p className="text-sm text-foreground/80">
                  {gap.description}
                </p>
              </div>
            )
          })}
        </div>
        
        {/* Annotation */}
        <div className="mt-8 text-center">
          <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
            opportunity areas
          </span>
        </div>
      </div>
    </section>
  )
}