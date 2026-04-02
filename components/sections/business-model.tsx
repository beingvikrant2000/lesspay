// import { DollarSign, Users, TrendingUp, Repeat } from "lucide-react"

// const modelComponents = [
//   { icon: DollarSign, title: "Revenue Stream 1", description: "[Primary monetization strategy]" },
//   { icon: Users, title: "Revenue Stream 2", description: "[Secondary monetization strategy]" },
//   { icon: TrendingUp, title: "Revenue Stream 3", description: "[Growth-driven revenue]" },
//   { icon: Repeat, title: "Revenue Stream 4", description: "[Recurring revenue mechanisms]" },
// ]

// export function BusinessModelSection() {
//   return (
//     <section id="business-model" className="py-24 px-6 relative">
//       <div className="max-w-5xl mx-auto">
//         {/* Section header */}
//         <div className="sticky-note sticky-orange p-4 inline-block rotate-2 mb-12">
//           <div className="pin" />
//           <span className="font-[family-name:var(--font-caveat)] text-2xl">06 - Business Model</span>
//         </div>
        
//         <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-8 ml-4">
//           how do we make money?
//         </p>
        
//         <div className="flex flex-wrap gap-6 justify-center">
//           {modelComponents.map((component, index) => {
//             const colors = ["sticky-green", "sticky-blue", "sticky-pink", "sticky-yellow"]
//             const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"]
//             return (
//               <div 
//                 key={index}
//                 className={`sticky-note ${colors[index]} p-6 w-full md:w-64 ${rotations[index]} hover:scale-105 transition-transform`}
//               >
//                 <div className="tape" />
//                 <div className="flex items-center gap-3 mb-4">
//                   <component.icon className="w-6 h-6" />
//                   <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold">{component.title}</h3>
//                 </div>
//                 <p className="text-sm text-foreground/80">
//                   {component.description}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
        
//         {/* Annotation */}
//         <div className="mt-8 text-center">
//           <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
//             multiple revenue streams = stability
//           </span>
//         </div>
//       </div>
//     </section>
//   )
// }



import { DollarSign, Users, TrendingUp, Repeat } from "lucide-react"

const modelComponents = [
  { 
    icon: DollarSign, 
    title: "Revenue Stream", 
    description: "LessPay’s public materials indicate the only direct revenue stream is merchant subscriptions. The FAQs explicitly say merchants pay a flat fee (monthly or annual) rather than per-transaction commission. It’s essentially a SaaS model." 
  },
  { 
    icon: Users, 
    title: "Indirect Revenue", 
    description: "LessPay could earn from gift voucher sales (they offer Amazon/Flipkart vouchers in-app) or from commissions on those transactions. It might also earn interest or float on merchant wallets (“Double Dhamaka” implies holding merchant funds)." 
  },
  { 
    icon: TrendingUp, 
    title: "Cost Structure", 
    description: "The major costs are: technology development, sales & marketing, promotional subsidies, rewards & cashback, and operational costs like support staff and compliance." 
  },
  { 
    icon: Repeat, 
    title: "Sustainability", 
    description: "Key question: Who bears the cost of the discount? If merchants fully bear it, they must see ROI. If LessPay covers part of it, LessPay burns capital. Given the financials, unit economics appear unproven." 
  },
]

export function BusinessModelSection() {
  return (
    <section id="business-model" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="sticky-note sticky-orange p-4 inline-block rotate-2 mb-12">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            06 - Business Model
          </span>
        </div>
        
        <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-8 ml-4">
          how do we make money?
        </p>
        
        <div className="flex flex-wrap gap-6 justify-center">
          {modelComponents.map((component, index) => {
            const colors = ["sticky-green", "sticky-blue", "sticky-pink", "sticky-yellow"]
            const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"]
            return (
              <div 
                key={index}
                className={`sticky-note ${colors[index]} p-6 w-full md:w-64 ${rotations[index]} hover:scale-105 transition-transform`}
              >
                <div className="tape" />
                <div className="flex items-center gap-3 mb-4">
                  <component.icon className="w-6 h-6" />
                  <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold">
                    {component.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground/80">
                  {component.description}
                </p>
              </div>
            )
          })}
        </div>
        
        {/* Annotation */}
        <div className="mt-8 text-center">
          <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
            multiple revenue streams = stability
          </span>
        </div>
      </div>
    </section>
  )
}