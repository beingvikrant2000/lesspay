// import { Check, X, Minus } from "lucide-react"

// const competitors = [
//   { name: "LessPay", highlight: true, feature1: true, feature2: true, feature3: true, feature4: true },
//   { name: "[Competitor 1]", highlight: false, feature1: true, feature2: false, feature3: true, feature4: false },
//   { name: "[Competitor 2]", highlight: false, feature1: false, feature2: true, feature3: false, feature4: true },
//   { name: "[Competitor 3]", highlight: false, feature1: true, feature2: null, feature3: false, feature4: null },
// ]

// const features = ["[Feature 1]", "[Feature 2]", "[Feature 3]", "[Feature 4]"]

// const FeatureIcon = ({ value }: { value: boolean | null }) => {
//   if (value === true) return <Check className="w-5 h-5 text-green-600" />
//   if (value === false) return <X className="w-5 h-5 text-red-400" />
//   return <Minus className="w-5 h-5 text-foreground/30" />
// }

// export function CompetitiveAnalysisSection() {
//   return (
//     <section id="competitive" className="py-24 px-6 relative">
//       <div className="max-w-5xl mx-auto">
//         {/* Section header */}
//         <div className="sticky-note sticky-purple p-4 inline-block -rotate-1 mb-6">
//           <div className="pin" />
//           <span className="font-[family-name:var(--font-caveat)] text-2xl">07 - Competitive Analysis</span>
//         </div>
        
//         <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-12 ml-4">
//           where do we stand?
//         </p>
        
//         {/* Whiteboard-style comparison */}
//         <div className="bg-card/50 p-6 md:p-8 rounded-lg border-2 border-dashed border-foreground/20">
//           {/* Feature headers as sticky notes */}
//           <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
//             <div className="w-28 shrink-0" /> {/* Spacer for company column */}
//             {features.map((feature, i) => {
//               const colors = ["sticky-yellow", "sticky-pink", "sticky-blue", "sticky-green"]
//               const rotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1"]
//               return (
//                 <div key={i} className={`sticky-note ${colors[i]} p-2 ${rotations[i]} text-center min-w-[100px]`}>
//                   <span className="text-xs font-medium">{feature}</span>
//                 </div>
//               )
//             })}
//           </div>
          
//           {/* Company rows */}
//           {competitors.map((competitor, index) => {
//             const isHighlight = competitor.highlight
//             return (
//               <div 
//                 key={index}
//                 className={`flex items-center gap-3 py-3 ${index !== competitors.length - 1 ? "border-b border-dashed border-foreground/10" : ""}`}
//               >
//                 <div 
//                   className={`w-28 shrink-0 ${isHighlight 
//                     ? "sticky-note sticky-orange p-2 -rotate-1 font-bold" 
//                     : "font-[family-name:var(--font-caveat)] text-lg"}`}
//                 >
//                   {competitor.name}
//                 </div>
//                 <div className="flex gap-3 flex-1 min-w-0">
//                   <div className="flex-1 flex justify-center min-w-[100px]">
//                     <FeatureIcon value={competitor.feature1} />
//                   </div>
//                   <div className="flex-1 flex justify-center min-w-[100px]">
//                     <FeatureIcon value={competitor.feature2} />
//                   </div>
//                   <div className="flex-1 flex justify-center min-w-[100px]">
//                     <FeatureIcon value={competitor.feature3} />
//                   </div>
//                   <div className="flex-1 flex justify-center min-w-[100px]">
//                     <FeatureIcon value={competitor.feature4} />
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
        
//         {/* Annotation */}
//         <div className="mt-6 ml-4">
//           <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
//             we&apos;re the only ones with all four
//           </span>
//         </div>
//       </div>
//     </section>
//   )
// }


import { Check, X } from "lucide-react"

const comparisons = [
  {
    title: "Habit & Trust",
    lesspay: "LessPay has none of this brand trust or daily usage beyond any novelty.",
    competitors: "Google Pay, PhonePe, and Paytm are deeply entrenched."
  },
  {
    title: "Distribution",
    lesspay: "LessPay has none of this distribution or passive downloads.",
    competitors: "They have 400+ million users and strong distribution via banks and ecosystems."
  },
  {
    title: "Value Proposition",
    lesspay: "LessPay has a narrow proposition: offline deals.",
    competitors: "The big apps focus on wide utility: paying bills, P2P, booking, and more."
  },
  {
    title: "Switching Cost",
    lesspay: "Asking someone to open LessPay mid-transaction is a hassle.",
    competitors: "Users already have cards, banks, and habits built into existing apps."
  },
]

export function CompetitiveAnalysisSection() {
  return (
    <section id="competitive" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="sticky-note sticky-purple p-4 inline-block -rotate-1 mb-6">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            07 - Competitive Analysis
          </span>
        </div>
        
        <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-12 ml-4">
          where do we stand?
        </p>
        
        <div className="flex flex-col gap-6">
          {comparisons.map((item, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-4 items-start">
              
              {/* Topic */}
              <div className="sticky-note sticky-yellow p-3 rotate-1">
                <span className="font-[family-name:var(--font-caveat)] text-lg font-bold">
                  {item.title}
                </span>
              </div>

              {/* Competitors */}
              <div className="sticky-note sticky-blue p-4 -rotate-1 text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4" />
                  <span className="font-semibold">Incumbents</span>
                </div>
                {item.competitors}
              </div>

              {/* LessPay */}
              <div className="sticky-note sticky-pink p-4 rotate-1 text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <X className="w-4 h-4" />
                  <span className="font-semibold">LessPay</span>
                </div>
                {item.lesspay}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 ml-4">
          <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
            the gap is structural, not feature-based
          </span>
        </div>
      </div>
    </section>
  )
}