import { NextRequest, NextResponse } from 'next/server'

interface AnalysisRequest {
  productName: string
  productDescription?: string
  userEmail?: string
}

interface AnalysisResponse {
  productName: string
  overview: string
  problem: string
  user_behavior: string
  value: string
  business: string
  competition: string
  growth: string
  risks: string
  zero_to_one: string
  execution_30_60_90: string
  verdict: string
}

// ✅ YOUR ORIGINAL PROMPT (UNCHANGED)
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
    let cleanText = text.trim()

    if (cleanText.startsWith('```json')) {
      cleanText = cleanText.slice(7)
    } else if (cleanText.startsWith('```')) {
      cleanText = cleanText.slice(3)
    }

    if (cleanText.endsWith('```')) {
      cleanText = cleanText.slice(0, -3)
    }

    cleanText = cleanText.trim()

    const parsed = JSON.parse(cleanText)

    const result: Partial<AnalysisResponse> = {}
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === 'string') {
        result[key as keyof AnalysisResponse] = value
      } else if (typeof value === 'object' && value !== null) {
        result[key as keyof AnalysisResponse] = objectToNarrative(value)
      } else {
        result[key as keyof AnalysisResponse] = String(value)
      }
    }

    return result
  } catch (error) {
    console.error('Failed to parse JSON response:', text.slice(0, 500))
  }
  return {}
}

function objectToNarrative(obj: unknown): string {
  if (obj === null || obj === undefined) return ''

  if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
    return String(obj)
  }

  if (Array.isArray(obj)) {
    return obj.map(item => String(item)).join('\n')
  }

  if (typeof obj === 'object') {
    return Object.entries(obj)
      .map(([key, value]) => `${key}: ${String(value)}`)
      .join('\n')
  }

  return ''
}

export async function POST(request: NextRequest) {
  try {
    const { productName, productDescription } =
      (await request.json()) as AnalysisRequest

    if (!productName || productName.trim().length === 0) {
      return NextResponse.json(
        { error: 'Product name is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.OLLAMA_API_KEY
    const host = process.env.OLLAMA_API_ENDPOINT || 'https://ollama.com'

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Analyzer service not configured' },
        { status: 500 }
      )
    }

    const userPrompt = productDescription
      ? `Analyze this product: "${productName}" - ${productDescription}`
      : `Analyze this product: "${productName}"`

    const response = await fetch(`${host}/api/chat`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-oss:120b',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt },
        ],
        stream: false,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { error: `Ollama Error (${response.status}): ${errorText}` },
        { status: 500 }
      )
    }

    const data = await response.json()
    const analysisText = data.message.content

    const parsed = parseAnalysisResponse(analysisText)

    // ✅ FIXED MAPPING (THIS WAS THE BUG)
    const analysisResponse: AnalysisResponse = {
      productName,
      overview: parsed.overview || '',
      problem: parsed.problem || '',
      user_behavior: parsed.user_behavior || '',
      value: parsed.value || '',
      business: parsed.business || '',
      competition: parsed.competition || '',
      growth: parsed.growth || '',
      risks: parsed.risks || '',
      zero_to_one: parsed.zero_to_one || '',
      execution_30_60_90: parsed.execution_30_60_90 || '',
      verdict: parsed.verdict || '',
    }

    return NextResponse.json(analysisResponse, { status: 200 })
  } catch (error) {
    console.error('Analyze endpoint error:', error)

    return NextResponse.json(
      { error: 'Analysis failed' },
      { status: 500 }
    )
  }
}