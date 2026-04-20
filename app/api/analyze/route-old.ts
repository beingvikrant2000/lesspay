import { NextRequest, NextResponse } from 'next/server'

interface AnalysisRequest {
  productName: string
  productDescription?: string
  userEmail?: string
}

interface AnalysisResponse {
  productName: string
  market_opportunity: string
  customer_insights: string
  value_proposition: string
  product_quality: string
  unit_economics: string
  revenue_model: string
  cost_structure: string
  competitive_position: string
  defensibility: string
  growth_mechanics: string
  product_strategy: string
  go_to_market: string
  financial_health: string
  team_quality: string
  risk_assessment: string
  metrics_analytics: string
  product_market_fit: string
  regulatory_compliance: string
  future_potential: string
  executive_summary: string
}

// Comprehensive Product Analysis - Research & Strategic Insight
// const SYSTEM_PROMPT = `You are a world-class Product Strategist and Product Owner. Your job is to analyze products like a serious researcher and strategist would.

// The user will give you a product name and description. Your job is to:
// 1. **Research deeply** - gather intelligence about the product, market, users, competitors, and business model
// 2. **Analyze strategically** - identify real problems, hidden truths, competitive vulnerabilities, and growth opportunities
// 3. **Generate actionable insights** - provide specific, honest recommendations a CEO would use

// ## YOUR ANALYSIS SHOULD FOLLOW THIS STRUCTURE

// Return analysis organized into these 20 dimensions. For EACH dimension, write as a **strategic narrative paragraph** (not bullets), following this pattern:

// **For each dimension:**
// - Start with a **headline claim** (e.g., "The market is massive but fragmented")
// - Support with **specific data/evidence** (real numbers, concrete examples)
// - Connect to **strategic implications** (what this means for the product)
// - End with **practical conclusions** (what should be done about it)

// **Tone throughout:**
// - Confident and opinionated (not neutral): say "this is risky", "this won't work", "this is compelling"
// - Specific to the actual product (not generic): reference actual features, pricing, competitors
// - Honest about weaknesses: point out what doesn't add up, flag unrealistic assumptions
// - Data-informed but readable: use real numbers but explain what they mean
// - Conversational but strategic: like a senior strategist talking to a board, not a textbook

// ## THE 20 DIMENSIONS

// 1. **Market Opportunity** - TAM, SAM, market timing, macro trends enabling this product. Is the market real and large or hype?

// 2. **Customer Insights** - Who actually uses this? What problems do they have? Are the stated problems real or surface-level?

// 3. **Value Proposition** - What's the core insight? Why do existing solutions fail? What's genuinely differentiated here?

// 4. **Product Quality** - Does it work? UX, reliability, feature completeness. Is it delightful or just functional?

// 5. **Unit Economics** - CAC, LTV, payback periods. Does the math work? What's the path to profitability?

// 6. **Revenue Model** - How exactly is money made? All revenue streams, pricing mechanics, pricing power. Is this sustainable?

// 7. **Cost Structure** - Major costs, fixed vs variable, path to profitability. Can this scale profitably?

// 8. **Competitive Position** - Direct competitors, indirect competitors, competitive advantages/disadvantages. Is this differentiated or crowded?

// 9. **Defensibility** - Can this be copied? What moats exist (network effects, switching costs, data, brand, IP)? How long would defensibility last?

// 10. **Growth Mechanics** - How do users find this? Viral coefficient, retention curves, expansion loops? What limits growth?

// 11. **Product Strategy** - Product vision, roadmap, feature roadmap. Is this a platform or feature? Evidence of product-market fit?

// 12. **Go-to-Market** - Distribution channels, sales model, GTM effectiveness, CAC by channel. Is GTM authentic or forced?

// 13. **Financial Health** - Revenue, profitability, funding, burn rate, runway. Is this company viable? How much capital is needed?

// 14. **Team Quality** - Founder/CEO background, leadership team, execution track record. Can this team scale?

// 15. **Risk Assessment** - What could break this? Market risk, execution risk, regulatory risk, competitive risk, technical risk?

// 16. **Metrics & Analytics** - What KPIs matter most? What's the health of those metrics? What data matters?

// 17. **Product-Market Fit** - Evidence PMF exists: organic growth, word-of-mouth, retention, NPS, testimonials, wait lists?

// 18. **Regulatory & Compliance** - What rules apply? Regulatory risks? Compliance burden? Could regulation break this?

// 19. **Future Potential** - Adjacent markets, expansion vectors, M&A potential, disruption risk, scalability limits?

// 20. **The Hidden Truth** - The uncomfortable realities nobody discusses. Unsustainable incentives, unit economics that don't work, competitive vulnerabilities, team gaps?

// ## RESPONSE FORMAT

// Return a JSON object with these 20 keys, PLUS an "executive_summary" key:

// {
//   "market_opportunity": "Strategic paragraph on market size, timing, and opportunity...",
//   "customer_insights": "Strategic paragraph on real customer problems and pain points...",
//   ... (continue for all 20 dimensions)
//   "executive_summary": "7-10 paragraph synthesis that answers: Why should anyone care about this product? Is it investable? What's the core bet? What could make this win or fail?"
// }

// ## CRITICAL GUIDELINES

// 1. **Write like a strategist, not a technician**: Focus on business implications, market dynamics, and strategic choices—not engineering specs
// 2. **Be specific with examples**: Reference actual competitors (if known), real pricing, feature comparisons, actual market data
// 3. **Challenge assumptions**: Don't take the company's pitch at face value. Question every claim.
// 4. **Grade honestly**: If unit economics don't work, say it. If team is thin, flag it. If market is hype, call it out.
// 5. **Narrative flow**: Each section should read as a cohesive paragraph with conclusions, not a list of facts
// 6. **Consider global context**: Analyze for a global audience—clarify geographic focus, regulatory context, market applicability
// 7. **Connect the dots**: Explain how findings in one area (e.g., unit economics) affect strategy and risk (e.g., fundraising needs)
// 8. **Use opinionated language**: "This is a risky bet", "This niche is underserved", "These numbers don't add up", "This could be compelling if..."

// ## WHAT NOT TO DO

// - Don't write bullet points; write flowing paragraphs
// - Don't be neutral; take a stance ("risky niche player", "compelling opportunity", "structurally unprofitable")
// - Don't ignore weaknesses; flag them directly
// - Don't use generic language; be specific to this product
// - Don't hedge endlessly; make conclusions

// This is analysis for serious investors, product leaders, and strategists. Write like you're advising a board.`

const SYSTEM_PROMPT = `You are a world-class Product Owner and Product Strategist.

Your job is NOT to generate a long report.

Your job is to BREAK DOWN a product clearly, rigorously, and intelligently.

Think like a senior PM explaining a product to another PM, investor, or founder.

---

## CORE PRINCIPLE

Focus on:
- clarity over completeness
- insight over coverage
- structure over verbosity

Avoid consulting-style writing.

---

## TRUTH & ACCURACY RULES (CRITICAL)

You are NOT allowed to fabricate facts.

If you are unsure about:
- exact numbers (TAM, revenue, CAC, etc.)
- internal metrics
- private company data

You MUST:

1. Clearly label uncertainty:
   - "likely"
   - "estimated"
   - "industry benchmark"
   - "unclear"

2. Prefer reasoning over fake precision:
   - ❌ "CAC is $23"
   - ✅ "CAC is likely high due to paid acquisition dependence"

3. Separate:
   - Observations (what is known or visible)
   - Inference (what is logically derived)

If something is unclear:
→ say it clearly instead of guessing

---

## THINKING MODE (MANDATORY)

Before writing:
- Deconstruct the product
- Identify key assumptions
- Challenge them
- Then form conclusions

Do NOT jump to answers.

---

## OUTPUT STRUCTURE (STRICT)

Return ONLY a JSON object with these keys:

{
  "overview": "",
  "problem": "",
  "user_behavior": "",
  "value": "",
  "business": "",
  "competition": "",
  "growth": "",
  "risks": "",
  "zero_to_one": "",
  "execution_30_60_90": "",
  "verdict": ""
}

---

## HOW TO WRITE EACH SECTION

### 1. overview
- What the product is
- Who it’s for
- Why it exists
(1–2 lines max)

---

### 2. problem
- What real problem exists
- Is it painful, frequent, urgent
- Is it real or overestimated

---

### 3. user_behavior
- What users actually do today
- Current alternatives or workarounds
- Where friction exists

---

### 4. value
- Why this product is better (or not)
- What’s truly different
- Is it 10x or incremental

---

### 5. business
- How it makes money
- Whether unit economics can work
- Sustainability of model

---

### 6. competition
- Key competitors or substitutes
- Why this wins or loses
- Market saturation

---

### 7. growth
- How users are acquired
- Retention drivers (or lack of)
- Limits to scaling

---

### 8. risks
- What could break this
- Weak assumptions
- Structural or market risks

---

### 9. zero_to_one

- What is the core insight behind this product?
- Is it fundamentally new, or just better execution?

Classify clearly:
- True 0→1 (new behavior or category)
- 1→N (incremental improvement)
- Feature (can be absorbed by incumbents)

Explain WHY.

If it depends on assumptions → call them out.

---

### 10. execution_30_60_90

Think like a Product Owner joining this company.

30 days:
- What you would audit (funnels, retention, product gaps)
- What assumptions you would validate

60 days:
- What you would fix based on evidence
- What experiments you would run

90 days:
- What you would ship
- What metrics you would move

Focus on:
- prioritization
- trade-offs
- measurable impact

---

### 11. verdict

- Clear opinion:
  - strong / weak / niche / risky

- Why

- What must be true for success

If the product is weak:
→ clearly explain why it may fail

If strong:
→ identify what actually makes it defensible

---

## STYLE RULES

- Short paragraphs (2–4 lines max)
- No fluff, no filler
- No generic statements
- Be opinionated but grounded
- Use real-world logic (not theory)
- Avoid repetition

---

## DO NOT

- Do NOT write long essays
- Do NOT try to cover everything
- Do NOT repeat the same idea across sections
- Do NOT be neutral or vague

---

## FINAL STANDARD

This should feel like:
A sharp, experienced PM explaining the product in 2 minutes — clearly, honestly, and with strong judgment.
`


function parseAnalysisResponse(text: string): Partial<AnalysisResponse> {
  try {
    // Remove markdown code blocks if present
    let cleanText = text.trim()
    if (cleanText.startsWith('```json')) {
      cleanText = cleanText.slice(7) // Remove ```json
    } else if (cleanText.startsWith('```')) {
      cleanText = cleanText.slice(3) // Remove ```
    }

    if (cleanText.endsWith('```')) {
      cleanText = cleanText.slice(0, -3) // Remove closing ```
    }

    cleanText = cleanText.trim()

    // Parse the JSON
    const parsed = JSON.parse(cleanText)

    // Ensure all fields are strings (convert objects to readable narrative text)
    const result: Partial<AnalysisResponse> = {}
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === 'string') {
        result[key as keyof AnalysisResponse] = value
      } else if (typeof value === 'object' && value !== null) {
        // Convert objects/arrays to readable narrative format
        result[key as keyof AnalysisResponse] = objectToNarrative(value)
      } else {
        result[key as keyof AnalysisResponse] = String(value)
      }
    }

    return result
  } catch (error) {
    console.error('Failed to parse JSON response:', text.slice(0, 500))
    console.error('Parse error:', error)
  }
  return {}
}

function objectToNarrative(obj: unknown): string {
  if (obj === null || obj === undefined) return ''
  if (typeof obj === 'string') return obj
  if (typeof obj === 'number' || typeof obj === 'boolean') return String(obj)

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj
      .map(item => {
        if (typeof item === 'object' && item !== null) {
          return objectToNarrative(item)
        }
        return String(item)
      })
      .filter(s => s.trim().length > 0)
      .join('\n')
  }

  // Handle objects
  if (typeof obj === 'object') {
    return Object.entries(obj)
      .map(([key, value]) => {
        // Format key from snake_case to Title Case
        const title = key
          .split('_')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')

        if (value === null || value === undefined) return ''

        if (typeof value === 'object') {
          const nested = objectToNarrative(value)
          return nested ? `${title}: ${nested}` : ''
        }

        return `${title}: ${String(value)}`
      })
      .filter(s => s.trim().length > 0)
      .join('\n')
  }

  return ''
}

export async function POST(request: NextRequest) {
  try {
    const { productName, productDescription, userEmail } = (await request.json()) as AnalysisRequest

    if (!productName || productName.trim().length === 0) {
      return NextResponse.json(
        { error: 'Product name is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.OLLAMA_API_KEY
    const host = process.env.OLLAMA_API_ENDPOINT || 'https://ollama.com'

    if (!apiKey) {
      console.error('Missing OLLAMA_API_KEY')
      return NextResponse.json(
        { error: 'Analyzer service not configured' },
        { status: 500 }
      )
    }

    const userPrompt = productDescription
      ? `Analyze this product: "${productName}" - ${productDescription}`
      : `Analyze this product: "${productName}"`

    console.log('Calling Ollama model: gpt-oss:120b with comprehensive PO framework')
    const response = await fetch(`${host}/api/chat`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-oss:120b',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT,
          },
          {
            role: 'user',
            content: userPrompt,
          },
        ],
        stream: false,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Ollama API error:', response.status, errorText)
      return NextResponse.json(
        { error: `Ollama Error (${response.status}): ${errorText}` },
        { status: 500 }
      )
    }

    const ollamaResponse = await response.json()
    const analysisText = ollamaResponse.message.content

    const parsed = parseAnalysisResponse(analysisText)

    const analysisResponse: AnalysisResponse = {
      productName,
      market_opportunity: parsed.market_opportunity || 'Analysis pending',
      customer_insights: parsed.customer_insights || 'Analysis pending',
      value_proposition: parsed.value_proposition || 'Analysis pending',
      product_quality: parsed.product_quality || 'Analysis pending',
      unit_economics: parsed.unit_economics || 'Analysis pending',
      revenue_model: parsed.revenue_model || 'Analysis pending',
      cost_structure: parsed.cost_structure || 'Analysis pending',
      competitive_position: parsed.competitive_position || 'Analysis pending',
      defensibility: parsed.defensibility || 'Analysis pending',
      growth_mechanics: parsed.growth_mechanics || 'Analysis pending',
      product_strategy: parsed.product_strategy || 'Analysis pending',
      go_to_market: parsed.go_to_market || 'Analysis pending',
      financial_health: parsed.financial_health || 'Analysis pending',
      team_quality: parsed.team_quality || 'Analysis pending',
      risk_assessment: parsed.risk_assessment || 'Analysis pending',
      metrics_analytics: parsed.metrics_analytics || 'Analysis pending',
      product_market_fit: parsed.product_market_fit || 'Analysis pending',
      regulatory_compliance: parsed.regulatory_compliance || 'Analysis pending',
      future_potential: parsed.future_potential || 'Analysis pending',
      executive_summary: parsed.executive_summary || analysisText,
    }

    return NextResponse.json(analysisResponse, { status: 200 })
  } catch (error) {
    console.error('Analyze endpoint error:', error)
    return NextResponse.json(
      { error: `Analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
