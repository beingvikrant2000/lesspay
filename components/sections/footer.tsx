// export function FooterSection() {
//   return (
//     <footer className="py-20 px-6 relative">
//       <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none" />
      
//       <div className="max-w-4xl mx-auto text-center relative z-10">
//         <div className="glass rounded-2xl p-12">
//           <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">
//             Prepared by
//           </p>
//           <p className="text-2xl font-bold gradient-text mb-4">
//             [Your Name] — Product Owner
//           </p>
//           <div className="h-px w-16 mx-auto bg-gradient-to-r from-primary to-accent mb-4" />
//           <p className="text-sm text-muted-foreground">
//             LessPay Case Study — {new Date().getFullYear()}
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }



export function FooterSection() {
  return (
    <footer className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">

        {/* Main card */}
        <div className="sticky-note sticky-yellow p-10 md:p-12 rotate-1 inline-block">
          <div className="tape" />

          <p className="font-[family-name:var(--font-caveat)] text-lg text-foreground/60 mb-2">
            Prepared by
          </p>

          <p className="font-[family-name:var(--font-caveat)] text-3xl md:text-4xl font-bold mb-4">
            Vikrant Tanwar — Product Owner
          </p>

          <div
            className="w-20 h-1 bg-foreground/30 mx-auto mb-4"
            style={{
              borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
            }}
          />

          <p className="text-sm text-foreground/60">
            LessPay Case Study — {new Date().getFullYear()}
          </p>
        </div>

        {/* Small floating notes */}
        <div className="relative mt-8">
          <div className="absolute left-10 -top-4 sticky-note sticky-blue p-2 rotate-6 text-sm hidden md:block">
            done.
          </div>
          <div className="absolute right-10 -top-4 sticky-note sticky-pink p-2 -rotate-6 text-sm hidden md:block">
            shipped ✓
          </div>
        </div>

      </div>
    </footer>
  )
}