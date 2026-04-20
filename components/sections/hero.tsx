// "use client";

// import { ArrowDown, Pencil } from "lucide-react";

// export function HeroSection() {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 relative"
//     >
//       {/* Decorative elements */}
//       <div className="absolute top-32 left-12 sticky-note sticky-blue p-3 rotate-3 hidden lg:block">
//         <Pencil className="w-5 h-5" />
//       </div>
//       <div className="absolute top-48 right-16 sticky-note sticky-pink p-2 -rotate-2 text-sm hidden lg:block">
//         thinking...
//       </div>

//       <div className="max-w-4xl mx-auto text-center relative z-10">
//         {/* Main title card */}
//         <div className="sticky-note sticky-yellow p-8 md:p-12 -rotate-1 mb-8 inline-block">
//           <div className="tape" />
//           <p className="font-[family-name:var(--font-caveat)] text-lg md:text-xl text-foreground/70 mb-4">
//             Product Case Study
//           </p>
//           <h1 className="font-[family-name:var(--font-caveat)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
//             LessPay
//           </h1>
//           <div
//             className="w-32 h-1 bg-foreground/30 mx-auto mb-4"
//             style={{
//               borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
//             }}
//           />
//         </div>

//         {/* Subtitle sticky note */}
//         <div className="sticky-note sticky-green p-6 rotate-1 max-w-2xl mx-auto mb-8">
//           <p className="text-lg md:text-xl text-foreground/80 text-balance">
//             A Product Owner&apos;s Deep Dive into Payments, Loyalty, and
//             Hyperlocal Commerce
//           </p>
//         </div>

//         {/* Insight sticky note */}
//         <div className="sticky-note sticky-pink p-4 -rotate-2 inline-block mb-12">
//           <p className="font-[family-name:var(--font-caveat)] text-xl md:text-2xl italic">
//             &quot;Not a payment app. A loyalty engine disguised as one.&quot;
//           </p>
//         </div>

//         <div className="flex flex-col items-center gap-6">
//           <a href="#executive-pov">
//             <div className="sticky-note sticky-blue p-4 rotate-3 inline-block">
//               <div className="flex flex-col items-center gap-2">
//                 <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50">
//                   scroll down
//                 </span>
//                 <ArrowDown className="w-5 h-5 text-foreground/50 animate-bounce" />
//               </div>
//             </div>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { ArrowDown, Pencil } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-32 left-12 sticky-note sticky-blue p-3 rotate-3 hidden lg:block">
        <Pencil className="w-5 h-5" />
      </div>
      <div className="absolute top-48 right-16 sticky-note sticky-pink p-2 -rotate-2 text-sm hidden lg:block">
        thinking...
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main title card */}
        <div className="sticky-note sticky-yellow p-8 md:p-12 -rotate-1 mb-8 inline-block">
          <div className="tape" />
          <p className="font-[family-name:var(--font-caveat)] text-lg md:text-xl text-foreground/70 mb-4">
            Product Case Study
          </p>
          <h1 className="font-[family-name:var(--font-caveat)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            LessPay
          </h1>
          <div
            className="w-32 h-1 bg-foreground/30 mx-auto mb-4"
            style={{
              borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
            }}
          />
        </div>

        {/* Subtitle sticky note */}
        <div className="sticky-note sticky-green p-6 rotate-1 max-w-2xl mx-auto mb-8">
          <p className="text-lg md:text-xl text-foreground/80 text-balance">
            A Product Owner&apos;s Deep Dive into Payments, Loyalty, and Hyperlocal Commerce
          </p>
        </div>

        {/* Insight sticky note (EXACT from case study) */}
        <div className="sticky-note sticky-pink p-4 -rotate-2 inline-block mb-12">
          <p className="font-[family-name:var(--font-caveat)] text-xl md:text-2xl italic">
            &quot;LessPay is not a generic UPI wallet - it is a localized loyalty platform disguised as a payment app.&quot;
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a href="#executive-pov">
            <div className="sticky-note sticky-blue p-4 rotate-3 inline-block">
              <div className="flex flex-col items-center gap-2">
                <span className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50">
                  scroll down
                </span>
                <ArrowDown className="w-5 h-5 text-foreground/50 animate-bounce" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}