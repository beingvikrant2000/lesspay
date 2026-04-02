// import { Rocket } from "lucide-react"

// export function ZeroToOneInsightSection() {
//   return (
//     <section id="zero-to-one" className="py-40 px-6 relative overflow-hidden">
//       {/* Gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/20" />
//       <div className="absolute inset-0">
//         <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[150px]" />
//         <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
//       </div>
      
//       <div className="max-w-5xl mx-auto text-center relative z-10">
//         <div className="flex items-center justify-center gap-3 mb-10">
//           <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/50 max-w-[100px]" />
//           <div className="flex items-center gap-2">
//             <Rocket className="w-5 h-5 text-accent" />
//             <span className="text-sm font-mono text-accent uppercase tracking-widest">11 — 0 to 1 Insight</span>
//           </div>
//           <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/50 max-w-[100px]" />
//         </div>
        
//         <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight mb-12 text-balance">
//           <span className="gradient-text">
//             [Zero to One Statement Placeholder]
//           </span>
//         </h2>
        
//         <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//           [Supporting statement placeholder - The key insight that defines the 
//           transition from concept to reality]
//         </p>
//       </div>
//     </section>
//   )
// }



import { Sparkles } from "lucide-react"

export function ZeroToOneInsightSection() {
  return (
    <section id="zero-to-one" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Header */}
        <div className="sticky-note sticky-purple p-4 inline-block -rotate-2 mb-8">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            11 - 0→1 Insight
          </span>
        </div>

        {/* Main insight */}
        <div className="sticky-note sticky-yellow p-8 md:p-12 rotate-1">
          <div className="tape" />

          <Sparkles className="w-6 h-6 mx-auto mb-4 text-foreground/60" />

          <blockquote className="font-[family-name:var(--font-caveat)] text-2xl md:text-3xl leading-relaxed mb-6">
            “LessPay should not try to compete head-on with UPI giants. It should become the loyalty engine for neighborhood commerce. In other words, LessPay must pivot from being just another payment method to being the go-to loyalty platform that happens to use UPI.”
          </blockquote>

          <p className="text-base text-foreground/70 max-w-2xl mx-auto">
            Users would open LessPay not because it’s the easiest way to pay, but because it’s the easiest way to save money on the places they care about. The product strategy should align with this insight by focusing on features that strengthen local engagement and loyalty.
          </p>
        </div>

        {/* Annotation */}
        <div className="mt-8">
          <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic">
            this is the real shift
          </span>
        </div>
      </div>
    </section>
  )
}