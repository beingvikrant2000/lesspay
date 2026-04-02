// import { Sparkles } from "lucide-react"

// export function CoreInsightSection() {
//   return (
//     <section id="insight" className="py-32 px-6 relative">
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Big insight card */}
//         <div className="relative">
//           {/* Decorative elements */}
//           <div className="absolute -top-4 -left-4 sticky-note sticky-blue p-2 rotate-12 text-sm hidden md:block">
//             <Sparkles className="w-4 h-4" />
//           </div>
//           <div className="absolute -top-4 -right-4 sticky-note sticky-green p-2 -rotate-6 text-sm hidden md:block">
//             aha!
//           </div>
          
//           {/* Main insight sticky */}
//           <div className="sticky-note sticky-yellow p-8 md:p-12 rotate-1 animate-wiggle">
//             <div className="tape" />
            
//             <div className="mb-6">
//               <span className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60">
//                 05 - Core Insight
//               </span>
//             </div>
            
//             <blockquote className="font-[family-name:var(--font-caveat)] text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
//               &ldquo;[Core insight statement placeholder - The fundamental truth that 
//               drives the entire product strategy]&rdquo;
//             </blockquote>
            
//             <div className="w-24 h-1 bg-foreground/30 mx-auto mb-6" style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }} />
            
//             <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
//               [Supporting context placeholder - Additional explanation of why this insight 
//               matters and how it shapes the product direction]
//             </p>
//           </div>
//         </div>
        
//         {/* Hand-drawn underline */}
//         <div className="mt-8">
//           <svg className="inline-block w-32 h-4" viewBox="0 0 120 15">
//             <path 
//               d="M 5 10 Q 30 5 60 10 Q 90 15 115 10" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2"
//               className="text-foreground/30"
//             />
//           </svg>
//           <p className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 mt-2">
//             this changes everything
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }



import { Sparkles } from "lucide-react"

export function CoreInsightSection() {
  return (
    <section id="insight" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Big insight card */}
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 sticky-note sticky-blue p-2 rotate-12 text-sm hidden md:block">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="absolute -top-4 -right-4 sticky-note sticky-green p-2 -rotate-6 text-sm hidden md:block">
            aha!
          </div>
          
          {/* Main insight */}
          <div className="sticky-note sticky-yellow p-8 md:p-12 rotate-1 animate-wiggle">
            <div className="tape" />
            
            <div className="mb-6">
              <span className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60">
                05 - Core Insight
              </span>
            </div>
            
            <blockquote className="font-[family-name:var(--font-caveat)] text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
              &ldquo;Users don’t switch for convenience — they switch for immediate value.&rdquo;
            </blockquote>
            
            <div
              className="w-24 h-1 bg-foreground/30 mx-auto mb-6"
              style={{
                borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
              }}
            />
            
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              The only rational reason for a user to use LessPay at a shop is to get a better price immediately. If the discount is substantial (say 10%+), a frugal shopper might switch. However, if the discount is trivial (1–2%), the effort isn’t worth it. Given LessPay’s small scale, it is unclear if they can consistently offer meaningful savings.
            </p>
          </div>
        </div>
        
        {/* Underline */}
        <div className="mt-8">
          <svg className="inline-block w-32 h-4" viewBox="0 0 120 15">
            <path 
              d="M 5 10 Q 30 5 60 10 Q 90 15 115 10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-foreground/30"
            />
          </svg>
          <p className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 mt-2">
            this changes everything
          </p>
        </div>
      </div>
    </section>
  )
}