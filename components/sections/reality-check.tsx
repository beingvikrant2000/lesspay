// import { MessageCircle, AlertCircle, ArrowRight } from "lucide-react"

// const comparisonData = [
//   { claim: "[Claim 1 placeholder]", reality: "[Reality assessment placeholder]" },
//   { claim: "[Claim 2 placeholder]", reality: "[Reality assessment placeholder]" },
//   { claim: "[Claim 3 placeholder]", reality: "[Reality assessment placeholder]" },
//   { claim: "[Claim 4 placeholder]", reality: "[Reality assessment placeholder]" },
//   { claim: "[Claim 5 placeholder]", reality: "[Reality assessment placeholder]" },
// ]

// export function RealityCheckSection() {
//   return (
//     <section id="reality-check" className="py-24 px-6 relative">
//       <div className="max-w-5xl mx-auto">
//         {/* Section header */}
//         <div className="sticky-note sticky-pink p-4 inline-block -rotate-1 mb-12">
//           <div className="pin" />
//           <span className="font-[family-name:var(--font-caveat)] text-2xl">02 - Reality Check</span>
//         </div>
        
//         <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-8 ml-4">
//           What they say vs what&apos;s actually happening...
//         </p>
        
//         {/* Claims vs Reality board */}
//         <div className="flex flex-col gap-4">
//           {/* Header row */}
//           <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-4">
//             <div className="sticky-note sticky-green p-3 rotate-1 flex items-center gap-2">
//               <MessageCircle className="w-4 h-4" />
//               <span className="font-[family-name:var(--font-caveat)] text-lg font-bold">What They Claim</span>
//             </div>
//             <div className="w-8" />
//             <div className="sticky-note sticky-orange p-3 -rotate-1 flex items-center gap-2">
//               <AlertCircle className="w-4 h-4" />
//               <span className="font-[family-name:var(--font-caveat)] text-lg font-bold">The Reality</span>
//             </div>
//           </div>
          
//           {/* Comparison rows */}
//           {comparisonData.map((row, index) => {
//             const claimRotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-1"]
//             const realityRotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "-rotate-1"]
//             return (
//               <div key={index} className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
//                 <div className={`sticky-note sticky-yellow p-4 ${claimRotations[index]} text-sm`}>
//                   {row.claim}
//                 </div>
//                 <ArrowRight className="w-6 h-6 text-foreground/40" />
//                 <div className={`sticky-note sticky-blue p-4 ${realityRotations[index]} text-sm`}>
//                   {row.reality}
//                 </div>
//               </div>
//             )
//           })}
//         </div>
        
//         <div className="mt-8 ml-4">
//           <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
//             hmm... interesting gaps here
//           </span>
//         </div>
//       </div>
//     </section>
//   )
// }


import { MessageCircle, AlertCircle, ArrowRight } from "lucide-react"

const comparisonData = [
  { 
    claim: "“India’s first offline payment platform”", 
    reality: "Other UPI apps and bank solutions already support offline mode (e.g. UPI Lite); LessPay’s technology is basically UPI QR payment. There’s nothing inherently “first” about it. This appears as marketing hyperbole rather than a unique capability." 
  },
  { 
    claim: "Instant Discounts on Any UPI Payment", 
    reality: "We cannot verify any large network of merchants offering discounts. The app promises “the best payment rewards, real money rewards, and discounted payments every time”, but without users or merchants, this is just a promise. The Play Store shows the mechanism (scan any UPI QR through LessPay), but there’s no evidence of actual discount data (no published numbers of transactions or total discounts given)." 
  },
  { 
    claim: "Hyperlocal Reach", 
    reality: "The site claims “we cover everyone from your local chaiwala to fancy restaurants”. In reality, LessPay has no public list of partner merchants or supported cities. Without a credible way to discover “nearby stores” on the app, the hyperlocal promise is empty." 
  },
  { 
    claim: "Users join to save", 
    reality: "The only user metrics are “100+ downloads”. At best that’s early testing. Compare that to PhonePe/GPay with 400M+ users. The user acquisition claim is not supported." 
  },
  { 
    claim: "Merchants pay no fees", 
    reality: "This is true: the merchant FAQs explicitly state no per-transaction fee. However, UPI itself already imposes 0% fee on sub-₹2,000 payments (with a new 1.1% interchange fee since Jan’24), so “no commission” is largely standard. What LessPay doesn’t say is whether merchants are expected to cover the cost of the discount. It implies they pay through a wallet system." 
  },
]

export function RealityCheckSection() {
  return (
    <section id="reality-check" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="sticky-note sticky-pink p-4 inline-block -rotate-1 mb-12">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            02 - Reality Check
          </span>
        </div>
        
        <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-8 ml-4">
          What they say vs what&apos;s actually happening...
        </p>
        
        {/* Claims vs Reality */}
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center mb-4">
            <div className="sticky-note sticky-green p-3 rotate-1 flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="font-[family-name:var(--font-caveat)] text-lg font-bold">
                What They Claim
              </span>
            </div>
            <div className="w-8" />
            <div className="sticky-note sticky-orange p-3 -rotate-1 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              <span className="font-[family-name:var(--font-caveat)] text-lg font-bold">
                The Reality
              </span>
            </div>
          </div>
          
          {/* Rows */}
          {comparisonData.map((row, index) => {
            const claimRotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1", "rotate-1"]
            const realityRotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2", "-rotate-1"]
            return (
              <div key={index} className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div className={`sticky-note sticky-yellow p-4 ${claimRotations[index]} text-sm`}>
                  {row.claim}
                </div>
                <ArrowRight className="w-6 h-6 text-foreground/40" />
                <div className={`sticky-note sticky-blue p-4 ${realityRotations[index]} text-sm`}>
                  {row.reality}
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-8 ml-4">
          <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
            hmm... interesting gaps here
          </span>
        </div>
      </div>
    </section>
  )
}