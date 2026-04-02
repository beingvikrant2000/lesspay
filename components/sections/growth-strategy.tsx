// import { ArrowRight } from "lucide-react"

// const phases = [
//   {
//     phase: "Phase 1",
//     title: "[Growth Phase 1]",
//     items: ["[Growth initiative]", "[Growth initiative]", "[Growth initiative]"],
//   },
//   {
//     phase: "Phase 2",
//     title: "[Growth Phase 2]",
//     items: ["[Growth initiative]", "[Growth initiative]", "[Growth initiative]"],
//   },
//   {
//     phase: "Phase 3",
//     title: "[Growth Phase 3]",
//     items: ["[Growth initiative]", "[Growth initiative]", "[Growth initiative]"],
//   },
// ]

// export function GrowthStrategySection() {
//   return (
//     <section id="growth" className="py-24 px-6 relative">
//       <div className="max-w-5xl mx-auto">
//         {/* Section header */}
//         <div className="sticky-note sticky-blue p-4 inline-block rotate-1 mb-6">
//           <div className="pin" />
//           <span className="font-[family-name:var(--font-caveat)] text-2xl">10 - Growth Strategy</span>
//         </div>
        
//         <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-12 ml-4">
//           how do we scale?
//         </p>
        
//         {/* Phases as connected sticky columns */}
//         <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
//           {phases.map((phase, index) => {
//             const colors = ["sticky-green", "sticky-yellow", "sticky-pink"]
//             const rotations = ["-rotate-1", "rotate-1", "-rotate-2"]
//             return (
//               <div key={index} className="flex items-center gap-4">
//                 <div className={`sticky-note ${colors[index]} p-6 w-full md:w-64 ${rotations[index]}`}>
//                   <div className="tape" />
//                   <div className="mb-4">
//                     <span className="font-[family-name:var(--font-caveat)] text-sm text-foreground/60">{phase.phase}</span>
//                     <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold">{phase.title}</h3>
//                   </div>
//                   <ul className="space-y-3">
//                     {phase.items.map((item, itemIndex) => (
//                       <li
//                         key={itemIndex}
//                         className="flex items-start gap-2 text-sm text-foreground/80"
//                       >
//                         <span className="text-foreground/40">-</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 {index < phases.length - 1 && (
//                   <ArrowRight className="w-6 h-6 text-foreground/30 hidden md:block shrink-0" />
//                 )}
//               </div>
//             )
//           })}
//         </div>
        
//         {/* Annotation */}
//         <div className="mt-8 text-center">
//           <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
//             phased approach for sustainable growth
//           </span>
//         </div>
//       </div>
//     </section>
//   )
// }



import { ArrowRight } from "lucide-react"

const phases = [
  {
    phase: "User Acquisition",
    title: "Product-Led Growth",
    items: [
      "Local Launch Events: Organize “LessPay Market Days” in target neighborhoods where merchants jointly advertise.",
      "Viral Referrals: Make it trivial to refer – integrate “share to WhatsApp” after saving a bill, with automated tracking.",
      "Partnerships: Team up with community groups (e.g. apartments, offices) to promote LessPay as a group benefit.",
    ],
  },
  {
    phase: "Merchant Acquisition",
    title: "Embedded Outreach",
    items: [
      "Target merchant clusters (e.g. a single street) to create buzz and density.",
      "Offer a limited-time free trial so merchants can experience customer increase with no risk.",
      "Provide easy marketing materials (stickers, posters) to display at shopfronts.",
    ],
  },
  {
    phase: "Retention",
    title: "Feedback & Engagement",
    items: [
      "After each campaign, solicit merchant feedback via the app.",
      "Send monthly statements (“You saved ₹X last month”).",
      "Host periodic lotteries or contests for active users.",
    ],
  },
]

export function GrowthStrategySection() {
  return (
    <section id="growth" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="sticky-note sticky-blue p-4 inline-block rotate-1 mb-6">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            10 - Growth Strategy
          </span>
        </div>
        
        <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-12 ml-4">
          how do we scale?
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
          {phases.map((phase, index) => {
            const colors = ["sticky-green", "sticky-yellow", "sticky-pink"]
            const rotations = ["-rotate-1", "rotate-1", "-rotate-2"]
            return (
              <div key={index} className="flex items-center gap-4">
                <div className={`sticky-note ${colors[index]} p-6 w-full md:w-64 ${rotations[index]}`}>
                  <div className="tape" />
                  <div className="mb-4">
                    <span className="font-[family-name:var(--font-caveat)] text-sm text-foreground/60">
                      {phase.phase}
                    </span>
                    <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold">
                      {phase.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="text-foreground/40">-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < phases.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-foreground/30 hidden md:block shrink-0" />
                )}
              </div>
            )
          })}
        </div>
        
        <div className="mt-8 text-center">
          <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
            phased approach for sustainable growth
          </span>
        </div>
      </div>
    </section>
  )
}