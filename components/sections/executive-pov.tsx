// import { Lightbulb, Target, TrendingUp } from "lucide-react"

// const keyPoints = [
//   { icon: Lightbulb, title: "Vision", content: "[Product vision placeholder - What LessPay aims to become]" },
//   { icon: Target, title: "Opportunity", content: "[Market opportunity placeholder - The gap being addressed]" },
//   { icon: TrendingUp, title: "Impact", content: "[Business impact placeholder - Expected outcomes]" },
// ]

// export function ExecutivePOVSection() {
//   return (
//     <section id="executive-pov" className="py-24 px-6 relative">
//       <div className="max-w-5xl mx-auto">
//         {/* Section header as pinned note */}
//         <div className="sticky-note sticky-yellow p-4 inline-block rotate-2 mb-12">
//           <div className="pin" />
//           <span className="font-[family-name:var(--font-caveat)] text-2xl">01 - Executive POV</span>
//         </div>
        
//         <div className="flex flex-wrap gap-6 justify-center">
//           {keyPoints.map((point, index) => {
//             const colors = ["sticky-blue", "sticky-green", "sticky-pink"]
//             const rotations = ["rotate-2", "-rotate-1", "rotate-1"]
//             return (
//               <div 
//                 key={index}
//                 className={`sticky-note ${colors[index]} p-6 w-full md:w-72 ${rotations[index]} hover:scale-105 transition-transform`}
//               >
//                 <div className="tape" />
//                 <div className="flex items-center gap-3 mb-4">
//                   <point.icon className="w-5 h-5" />
//                   <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold">{point.title}</h3>
//                 </div>
//                 <p className="text-sm text-foreground/80 leading-relaxed">
//                   {point.content}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
        
//         {/* Hand-drawn annotation */}
//         <div className="mt-8 text-center">
//           <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
//             ^ key strategic pillars
//           </span>
//         </div>
//       </div>
//     </section>
//   )
// }


import { Lightbulb, Target, TrendingUp } from "lucide-react"

const keyPoints = [
  { 
    icon: Lightbulb, 
    title: "Vision", 
    content: "LessPay’s Value Proposition: At its core, LessPay is not simply a payments app; it positions itself as a hyperlocal loyalty and savings platform for offline merchants and customers. It promises instant, up-front discounts on UPI transactions at small local shops, coupled with real-time rewards and expense tracking. On the merchant side, LessPay is a subscription-based SaaS tool that claims to boost footfall through targeted promotions and gamified campaigns. In other words, LessPay tries to turn every brick-and-mortar purchase into a sales and retention event: “save before you pay” and bring repeat customers to the store."
  },
  { 
    icon: Target, 
    title: "Opportunity", 
    content: "Problem Being Solved: LessPay frames two core problems: for consumers, the fatigue of fragmented cashback schemes and lack of immediate savings; for merchants, the need for low-cost marketing and loyalty tools. Its pitch is that average shoppers will switch habits if they can instantly pay less (rather than wait for digital refunds), and that mom-and-pop stores will sign up if they pay no transaction fee (only a flat subscription) and gain analytics on customers."
  },
  { 
    icon: TrendingUp, 
    title: "Impact", 
    content: "Initial POV – Market Fit: The concept is interesting: small merchants do need customer acquisition tools, and cost-sensitive consumers love instant deals. However, in practice the fit looks challenging. LessPay’s early traction appears negligible (its Google Play shows only “100+ downloads” as of Jan 2025, and there is no sign of major retail partners or funding). The problems it addresses may be more superficial than fundamental – for example, India’s UPI system already offers free offline payments (large-scale cashback fatigue is more a big-tech issue than a shopper’s daily pain). My provisional judgment is that LessPay is a risky niche player: it could carve out a hyperlocal loyalty corner, but without vastly better execution or a new insight, it is unlikely to dethrone established UPI giants. More likely, it will be judged “niche, with questionable scalability” unless it refines its strategy."
  },
]

export function ExecutivePOVSection() {
  return (
    <section id="executive-pov" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="sticky-note sticky-yellow p-4 inline-block rotate-2 mb-12">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            01 - Executive POV
          </span>
        </div>
        
        <div className="flex flex-wrap gap-6 justify-center">
          {keyPoints.map((point, index) => {
            const colors = ["sticky-blue", "sticky-green", "sticky-pink"]
            const rotations = ["rotate-2", "-rotate-1", "rotate-1"]
            return (
              <div 
                key={index}
                className={`sticky-note ${colors[index]} p-6 w-full md:w-72 ${rotations[index]} hover:scale-105 transition-transform`}
              >
                <div className="tape" />
                <div className="flex items-center gap-3 mb-4">
                  <point.icon className="w-5 h-5" />
                  <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {point.content}
                </p>
              </div>
            )
          })}
        </div>
        
        {/* Annotation */}
        <div className="mt-8 text-center">
          <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
            ^ key strategic pillars
          </span>
        </div>
      </div>
    </section>
  )
}