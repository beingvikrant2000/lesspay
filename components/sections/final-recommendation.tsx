// import { CheckCircle2 } from "lucide-react"

// const recommendations = [
//   "[Recommendation 1 placeholder - Key strategic recommendation]",
//   "[Recommendation 2 placeholder - Key strategic recommendation]",
//   "[Recommendation 3 placeholder - Key strategic recommendation]",
//   "[Recommendation 4 placeholder - Key strategic recommendation]",
//   "[Recommendation 5 placeholder - Key strategic recommendation]",
// ]

// export function FinalRecommendationSection() {
//   return (
//     <section id="recommendation" className="py-32 px-6 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      
//       <div className="max-w-4xl mx-auto relative z-10">
//         <div className="flex items-center gap-3 mb-6">
//           <span className="text-sm font-mono text-primary">12</span>
//           <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[100px]" />
//         </div>
//         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-16">
//           Final Recommendation
//         </h2>
        
//         <div className="glass rounded-2xl p-8 md:p-12 glow">
//           <p className="text-xl text-muted-foreground leading-relaxed mb-10">
//             [Executive recommendation summary placeholder - A synthesized view of 
//             the recommended path forward based on the analysis]
//           </p>
          
//           <ul className="space-y-5">
//             {recommendations.map((rec, index) => (
//               <li 
//                 key={index} 
//                 className="flex items-start gap-4 group"
//               >
//                 <div className="p-1 rounded-full bg-gradient-to-r from-primary to-accent">
//                   <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
//                 </div>
//                 <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
//                   {rec}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }



import { CheckCircle2 } from "lucide-react"

const recommendations = [
  "LessPay should pivot and refocus sharply on local loyalty, while cautiously validating its model in tight, controlled trials.",
  "The current “simple clone of UPI with discounts” approach is not enough to win consumers or merchants at scale.",
  "Treat LessPay as a platform for community commerce.",
  "Build features that no other UPI app has (like “multi-store loyalty passes” or “neighborhood leaderboards”).",
  "Continue—but pivot the product narrative to loyalty/community, invest heavily in proving core loops, and measure everything rigorously.",
]

export function FinalRecommendationSection() {
  return (
    <section id="recommendation" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="sticky-note sticky-green p-4 inline-block rotate-1 mb-12">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            12 - Final Recommendation
          </span>
        </div>

        {/* Summary */}
        <div className="sticky-note sticky-yellow p-6 md:p-8 -rotate-1 mb-10">
          <div className="tape" />
          <p className="text-lg text-foreground/80 leading-relaxed">
            LessPay should pivot and refocus sharply on local loyalty, while cautiously validating its model in tight, controlled trials.
          </p>
        </div>

        {/* Recommendations List */}
        <div className="flex flex-col gap-6">
          {recommendations.map((rec, index) => {
            const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "-rotate-1"]
            const colors = ["sticky-blue", "sticky-pink", "sticky-green", "sticky-yellow", "sticky-purple"]

            return (
              <div
                key={index}
                className={`sticky-note ${colors[index]} p-5 ${rotations[index]} flex items-start gap-4 hover:scale-105 transition-transform`}
              >
                <CheckCircle2 className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-sm text-foreground/80 leading-relaxed">
                  {rec}
                </span>
              </div>
            )
          })}
        </div>

        {/* Annotation */}
        <div className="mt-10 text-center">
          <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
            clear direction, not incremental fixes
          </span>
        </div>
      </div>
    </section>
  )
}