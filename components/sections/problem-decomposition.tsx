// import { User, Store } from "lucide-react"

// const consumerProblems = [
//   "[Consumer pain point 1 placeholder]",
//   "[Consumer pain point 2 placeholder]",
//   "[Consumer pain point 3 placeholder]",
//   "[Consumer pain point 4 placeholder]",
// ]

// const merchantProblems = [
//   "[Merchant pain point 1 placeholder]",
//   "[Merchant pain point 2 placeholder]",
//   "[Merchant pain point 3 placeholder]",
//   "[Merchant pain point 4 placeholder]",
// ]

// export function ProblemDecompositionSection() {
//   return (
//     <section id="problem" className="py-24 px-6 relative">
//       <div className="max-w-5xl mx-auto">
//         {/* Section header */}
//         <div className="sticky-note sticky-blue p-4 inline-block rotate-1 mb-12">
//           <div className="pin" />
//           <span className="font-[family-name:var(--font-caveat)] text-2xl">03 - Problem Decomposition</span>
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Consumer column */}
//           <div>
//             <div className="sticky-note sticky-purple p-4 -rotate-2 inline-flex items-center gap-2 mb-6">
//               <User className="w-5 h-5" />
//               <span className="font-[family-name:var(--font-caveat)] text-xl font-bold">Consumer Problems</span>
//             </div>
//             <div className="flex flex-col gap-4 ml-4">
//               {consumerProblems.map((problem, index) => {
//                 const rotations = ["-rotate-1", "rotate-2", "-rotate-2", "rotate-1"]
//                 const colors = ["sticky-yellow", "sticky-pink", "sticky-green", "sticky-blue"]
//                 return (
//                   <div 
//                     key={index}
//                     className={`sticky-note ${colors[index]} p-4 ${rotations[index]} hover:scale-105 transition-transform`}
//                   >
//                     <span className="font-[family-name:var(--font-caveat)] text-lg mr-2">{index + 1}.</span>
//                     <span className="text-sm">{problem}</span>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
          
//           {/* Merchant column */}
//           <div>
//             <div className="sticky-note sticky-orange p-4 rotate-2 inline-flex items-center gap-2 mb-6">
//               <Store className="w-5 h-5" />
//               <span className="font-[family-name:var(--font-caveat)] text-xl font-bold">Merchant Problems</span>
//             </div>
//             <div className="flex flex-col gap-4 ml-4">
//               {merchantProblems.map((problem, index) => {
//                 const rotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1"]
//                 const colors = ["sticky-green", "sticky-yellow", "sticky-blue", "sticky-pink"]
//                 return (
//                   <div 
//                     key={index}
//                     className={`sticky-note ${colors[index]} p-4 ${rotations[index]} hover:scale-105 transition-transform`}
//                   >
//                     <span className="font-[family-name:var(--font-caveat)] text-lg mr-2">{index + 1}.</span>
//                     <span className="text-sm">{problem}</span>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
        
//         {/* Annotation */}
//         <div className="mt-12 text-center">
//           <span className="font-[family-name:var(--font-caveat)] text-xl text-foreground/50 italic">
//             two sides of the same coin
//           </span>
//         </div>
//       </div>
//     </section>
//   )
// }


import { User, Store } from "lucide-react"

const consumerProblems = [
  "LessPay identifies “cashback fatigue” and lack of instant savings as consumer pains.",
  "Most local purchases (tea, groceries) are still done quickly; users don’t mind small scratch cards or the odd cashback.",
  "The real consumer problem may not be “waiting for a few rupees,” but rather why should I download and learn a new app at all?",
  "Trust and habit are huge barriers."
]

const merchantProblems = [
  "LessPay claims small merchants suffer from “high commissions, poor retention, low visibility”.",
  "Static QR UPI transactions have long been free (interchange fees only apply below ₹2k since 2024, but still under 1.1%).",
  "The root problem for merchants is likely customer acquisition & loyalty, not payment acceptance per se.",
  "Merchants are wary of giving away margin and complexity."
]

export function ProblemDecompositionSection() {
  return (
    <section id="problem" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="sticky-note sticky-blue p-4 inline-block rotate-1 mb-12">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            03 - Problem Decomposition
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Consumer */}
          <div>
            <div className="sticky-note sticky-purple p-4 -rotate-2 inline-flex items-center gap-2 mb-6">
              <User className="w-5 h-5" />
              <span className="font-[family-name:var(--font-caveat)] text-xl font-bold">
                Consumer Problems
              </span>
            </div>
            <div className="flex flex-col gap-4 ml-4">
              {consumerProblems.map((problem, index) => {
                const rotations = ["-rotate-1", "rotate-2", "-rotate-2", "rotate-1"]
                const colors = ["sticky-yellow", "sticky-pink", "sticky-green", "sticky-blue"]
                return (
                  <div 
                    key={index}
                    className={`sticky-note ${colors[index]} p-4 ${rotations[index]} hover:scale-105 transition-transform`}
                  >
                    <span className="font-[family-name:var(--font-caveat)] text-lg mr-2">
                      {index + 1}.
                    </span>
                    <span className="text-sm">{problem}</span>
                  </div>
                )
              })}
            </div>
          </div>
          
          {/* Merchant */}
          <div>
            <div className="sticky-note sticky-orange p-4 rotate-2 inline-flex items-center gap-2 mb-6">
              <Store className="w-5 h-5" />
              <span className="font-[family-name:var(--font-caveat)] text-xl font-bold">
                Merchant Problems
              </span>
            </div>
            <div className="flex flex-col gap-4 ml-4">
              {merchantProblems.map((problem, index) => {
                const rotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1"]
                const colors = ["sticky-green", "sticky-yellow", "sticky-blue", "sticky-pink"]
                return (
                  <div 
                    key={index}
                    className={`sticky-note ${colors[index]} p-4 ${rotations[index]} hover:scale-105 transition-transform`}
                  >
                    <span className="font-[family-name:var(--font-caveat)] text-lg mr-2">
                      {index + 1}.
                    </span>
                    <span className="text-sm">{problem}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* Annotation */}
        <div className="mt-12 text-center">
          <span className="font-[family-name:var(--font-caveat)] text-xl text-foreground/50 italic">
            two sides of the same coin
          </span>
        </div>
      </div>
    </section>
  )
}