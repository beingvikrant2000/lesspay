"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { ExecutivePOVSection } from "@/components/sections/executive-pov"
import { RealityCheckSection } from "@/components/sections/reality-check"
import { ProblemDecompositionSection } from "@/components/sections/problem-decomposition"
import { ProductTeardownSection } from "@/components/sections/product-teardown"
import { CoreInsightSection } from "@/components/sections/core-insight"
import { BusinessModelSection } from "@/components/sections/business-model"
import { CompetitiveAnalysisSection } from "@/components/sections/competitive-analysis"
import { ProductGapsSection } from "@/components/sections/product-gaps"
import { ProductStrategySection } from "@/components/sections/product-strategy"
import { GrowthStrategySection } from "@/components/sections/growth-strategy"
import { ZeroToOneInsightSection } from "@/components/sections/zero-to-one-insight"
import { FinalRecommendationSection } from "@/components/sections/final-recommendation"
import { DayPlanSection } from "@/components/sections/day-plan"
import { FooterSection } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExecutivePOVSection />
      <RealityCheckSection />
      <ProblemDecompositionSection />
      <ProductTeardownSection />
      <CoreInsightSection />
      <BusinessModelSection />
      <CompetitiveAnalysisSection />
      <ProductGapsSection />
      <ProductStrategySection />
      <GrowthStrategySection />
      <ZeroToOneInsightSection />
      <FinalRecommendationSection />
      <DayPlanSection />
      <FooterSection />
    </main>
  )
}
