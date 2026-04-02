import { Search, CreditCard, Percent, Gift, RefreshCw, ArrowRight } from "lucide-react"

const flowSteps = [
  { 
    icon: Search, 
    label: "Discover", 
    description: "The user opens the LessPay app and sees a map/list of nearby deals (local restaurants, shops). The app uses GPS to “pin location” and show offers.", 
    color: "sticky-blue" 
  },
  { 
    icon: CreditCard, 
    label: "Pay", 
    description: "At the merchant, the user launches LessPay and selects “Scan UPI QR”. LessPay lets you scan the merchant’s UPI QR code directly.", 
    color: "sticky-green" 
  },
  { 
    icon: Percent, 
    label: "Discount", 
    description: "After scanning, the app prompts the user to enter the bill amount. Instantly, it shows a reduced “amount to pay” that includes the discount.", 
    color: "sticky-yellow" 
  },
  { 
    icon: Gift, 
    label: "Reward", 
    description: "Immediately after paying, the user is notified of coins or cashback earned. LessPay’s dashboard updates the user’s rewards and expense tracker.", 
    color: "sticky-pink" 
  },
  { 
    icon: RefreshCw, 
    label: "Repeat", 
    description: "If satisfied with the deal/savings, the user may use LessPay next time, moving the store into their “frequent merchants” list in the app.", 
    color: "sticky-purple" 
  },
]

export function ProductTeardownSection() {
  return (
    <section id="teardown" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="sticky-note sticky-green p-4 inline-block -rotate-1 mb-6">
          <div className="pin" />
          <span className="font-[family-name:var(--font-caveat)] text-2xl">
            04 - Product Teardown
          </span>
        </div>
        
        <p className="font-[family-name:var(--font-caveat)] text-xl text-foreground/60 mb-12 ml-4">
          The user journey flow...
        </p>
        
        {/* Flow */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
          {flowSteps.map((step, index) => {
            const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1"]
            return (
              <div key={index} className="flex items-center gap-2 md:gap-6">
                <div 
                  className={`sticky-note ${step.color} p-4 md:p-0 ${rotations[index]} hover:scale-110 transition-transform text-center w-28 md:w-36`}
                >
                  <div className="tape" />
                  <step.icon className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-[family-name:var(--font-caveat)] text-xl font-bold mb-1">
                    {step.label}
                  </h3>
                  <p className="text-xs pt-2 text-foreground/70">
                    {step.description}
                  </p>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className="w-6 h-6 text-foreground/40" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
        
        {/* Loop */}
        <div className="mt-8 text-center">
          <svg className="inline-block w-48 h-12" viewBox="0 0 200 50">
            <path 
              d="M 10 25 Q 100 50 190 25" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              className="text-foreground/30"
            />
            <polygon 
              points="185,20 195,25 185,30" 
              fill="currentColor"
              className="text-foreground/30"
            />
          </svg>
          <p className="font-[family-name:var(--font-caveat)] text-lg text-foreground/50 italic mt-2">
            the loop that drives retention
          </p>
        </div>
      </div>
    </section>
  )
}