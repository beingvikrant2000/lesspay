// import { Lightbulb, Target, Zap, Shield } from "lucide-react"

// const strategies = [
//   { icon: Lightbulb, title: "[Strategy 1]", description: "[Proposed solution to address gaps]" },
//   { icon: Target, title: "[Strategy 2]", description: "[Proposed solution to address gaps]" },
//   { icon: Zap, title: "[Strategy 3]", description: "[Proposed solution to address gaps]" },
//   { icon: Shield, title: "[Strategy 4]", description: "[Proposed solution to address gaps]" },
// ]

// export function ProductStrategySection() {
//   return (
//     <section id="strategy" className="py-24 px-6 relative">
//       <div className="max-w-5xl mx-auto">
//         {/* Section header */}
//         <div className="sticky-note sticky-green p-4 inline-block -rotate-2 mb-6">
//           <div className="pin" />
//           <span className="font-[family-name:var(--font-caveat)] text-2xl">09 - Product Strategy</span>
//         </div>
        
//         <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-12 ml-4">
//           how do we solve these problems?
//         </p>
        
//         <div className="flex flex-wrap gap-6 justify-center">
//           {strategies.map((strategy, index) => {
//             const colors = ["sticky-blue", "sticky-yellow", "sticky-pink", "sticky-green"]
//             const rotations = ["rotate-2", "-rotate-1", "rotate-1", "-rotate-2"]
//             return (
//               <div 
//                 key={index}
//                 className={`sticky-note ${colors[index]} p-6 w-full md:w-64 ${rotations[index]} hover:scale-105 transition-transform`}
//               >
//                 <div className="tape" />
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
//                     <strategy.icon className="w-5 h-5" />
//                   </div>
//                   <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold">{strategy.title}</h3>
//                 </div>
//                 <p className="text-sm text-foreground/80">
//                   {strategy.description}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
        
//         {/* Annotation */}
//         <div className="mt-8 text-center">
//           <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
//             actionable next steps
//           </span>
//         </div>
//       </div>
//     </section>
//   )
// }



import { Lightbulb, Target, Zap, Shield } from "lucide-react"

const strategies = [
  { 
    icon: Lightbulb, 
    title: "Low Awareness & Adoption", 
    description: "Embed LessPay functionality into existing high-traffic channels. For example, partner with payment aggregators or popular local delivery apps to feature LessPay deals. Or offer a “LessPay mode” plugin for popular UPI apps (with NPCI approval). This lowers the switching cost." 
  },
  { 
    icon: Target, 
    title: "Weak Loyalty Loop", 
    description: "Introduce a tiered loyalty program with clear milestones. E.g. after 5 visits to the same store (or any store on LessPay), unlock a significant voucher (say ₹100 off next purchase). Display progress bars in the app." 
  },
  { 
    icon: Zap, 
    title: "Merchant Risk on Discounts", 
    description: "Offer performance-based pricing for merchants: a small commission (e.g. 1–2%) on transactions that resulted from LessPay offers, instead of a flat fee. This aligns LessPay’s incentives with merchant ROI." 
  },
  { 
    icon: Shield, 
    title: "Product Trust and Onboarding Friction", 
    description: "Simplify the payment flow: allow in-app payments (wallet-to-merchant) so user doesn’t have to open another UPI app at all. If regulatory hurdles are high, at least implement deep link to the user’s UPI app with auto-filled amount." 
  },
]

export function ProductStrategySection() {
  return (
    <section id="strategy" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="sticky-note sticky-green p-4 inline-block -rotate-2 mb-6">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            09 - Product Strategy
          </span>
        </div>
        
        <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-12 ml-4">
          how do we solve these problems?
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center">
          {strategies.map((strategy, index) => {
            const colors = ["sticky-blue", "sticky-yellow", "sticky-pink", "sticky-green"]
            const rotations = ["rotate-2", "-rotate-1", "rotate-1", "-rotate-2"]
            return (
              <div 
                key={index}
                className={`sticky-note ${colors[index]} p-6 w-full md:w-64 ${rotations[index]} hover:scale-105 transition-transform`}
              >
                <div className="tape" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                    <strategy.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold">
                    {strategy.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground/80">
                  {strategy.description}
                </p>
              </div>
            )
          })}
        </div>
        
        {/* Annotation */}
        <div className="mt-8 text-center">
          <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
            actionable next steps
          </span>
        </div>
      </div>
    </section>
  )
}