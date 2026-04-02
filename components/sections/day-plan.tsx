// const plans = [
//   {
//     period: "First 30 Days",
//     title: "Foundation",
//     gradient: "from-primary/20 to-accent/10",
//     tasks: [
//       "[Task placeholder - Initial setup activity]",
//       "[Task placeholder - Discovery activity]",
//       "[Task placeholder - Research activity]",
//       "[Task placeholder - Planning activity]",
//     ],
//   },
//   {
//     period: "Days 31-60",
//     title: "Execution",
//     gradient: "from-accent/20 to-primary/10",
//     tasks: [
//       "[Task placeholder - Implementation activity]",
//       "[Task placeholder - Development activity]",
//       "[Task placeholder - Testing activity]",
//       "[Task placeholder - Iteration activity]",
//     ],
//   },
//   {
//     period: "Days 61-90",
//     title: "Scale",
//     gradient: "from-primary/20 to-accent/20",
//     tasks: [
//       "[Task placeholder - Growth activity]",
//       "[Task placeholder - Optimization activity]",
//       "[Task placeholder - Expansion activity]",
//       "[Task placeholder - Review activity]",
//     ],
//   },
// ]

// export function DayPlanSection() {
//   return (
//     <section id="roadmap" className="py-32 px-6 relative">
//       <div className="max-w-5xl mx-auto">
//         <div className="flex items-center gap-3 mb-6">
//           <span className="text-sm font-mono text-primary">13</span>
//           <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[100px]" />
//         </div>
//         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-16">
//           30-60-90 Day Plan
//         </h2>
        
//         <div className="grid md:grid-cols-3 gap-6">
//           {plans.map((plan, index) => (
//             <div 
//               key={index} 
//               className="glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 group"
//             >
//               <div className={`p-6 bg-gradient-to-r ${plan.gradient}`}>
//                 <span className="text-sm font-mono text-primary">{plan.period}</span>
//                 <h3 className="text-3xl font-bold text-foreground mt-2">{plan.title}</h3>
//               </div>
//               <div className="p-6">
//                 <ul className="space-y-4">
//                   {plan.tasks.map((task, taskIndex) => (
//                     <li
//                       key={taskIndex}
//                       className="flex items-start gap-4 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
//                     >
//                       <span className="w-7 h-7 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
//                         {taskIndex + 1}
//                       </span>
//                       <span className="pt-0.5">{task}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



export function DayPlanSection() {
  const plans = [
    {
      period: "First 30 Days",
      title: "Foundation",
      tasks: [
        "Target merchant clusters (e.g. a single street) to create buzz and density.",
        "Offer a limited-time free trial so merchants can experience customer increase with no risk.",
        "Provide easy marketing materials (stickers, posters) to display at shopfronts.",
        "After each campaign, solicit merchant feedback via the app.",
      ],
    },
    {
      period: "Days 31-60",
      title: "Execution",
      tasks: [
        "Introduce a tiered loyalty program with clear milestones.",
        "Display progress bars in the app.",
        "Simplify the payment flow: allow in-app payments (wallet-to-merchant).",
        "Implement deep link to the user’s UPI app with auto-filled amount.",
      ],
    },
    {
      period: "Days 61-90",
      title: "Scale",
      tasks: [
        "Organize “LessPay Market Days” in target neighborhoods where merchants jointly advertise.",
        "Make it trivial to refer – integrate “share to WhatsApp” after saving a bill, with automated tracking.",
        "Team up with community groups (e.g. apartments, offices) to promote LessPay as a group benefit.",
        "Send monthly statements (“You saved ₹X last month”).",
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="sticky-note sticky-yellow p-4 inline-block -rotate-1 mb-12">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            13 - 30-60-90 Day Plan
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colors = ["sticky-green", "sticky-blue", "sticky-pink"]
            const rotations = ["-rotate-1", "rotate-1", "-rotate-2"]

            return (
              <div
                key={index}
                className={`sticky-note ${colors[index]} p-6 ${rotations[index]} hover:scale-105 transition-transform`}
              >
                <div className="tape" />

                {/* Header */}
                <div className="mb-4">
                  <span className="text-sm text-foreground/60">
                    {plan.period}
                  </span>
                  <h3 className="font-[family-name:var(--font-caveat)] text-2xl font-bold">
                    {plan.title}
                  </h3>
                </div>

                {/* Tasks */}
                <ul className="space-y-3">
                  {plan.tasks.map((task, taskIndex) => (
                    <li
                      key={taskIndex}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span className="font-[family-name:var(--font-caveat)] text-lg">
                        {taskIndex + 1}.
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Annotation */}
        <div className="mt-10 text-center">
          <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
            from zero → repeatable growth
          </span>
        </div>
      </div>
    </section>
  )
}