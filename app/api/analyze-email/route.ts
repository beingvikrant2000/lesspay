import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

interface EmailRequest {
  email: string
  analysis: {
    productName: string
    problem: string
    insight: string
    strategy: string
    growth: string
    analysis: string
  }
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email, analysis } = (await request.json()) as EmailRequest

    // Validate inputs
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    if (!analysis || !analysis.productName) {
      return NextResponse.json(
        { error: 'Analysis data required' },
        { status: 400 }
      )
    }

    // Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Create HTML email
    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0a0a0a;">
        <div style="background: linear-gradient(135deg, #fef3c7 0%, #fecaca 100%); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 28px; color: #0a0a0a;">Product Analysis</h1>
          <p style="margin: 10px 0 0 0; font-size: 14px; color: #666;">By Vikrant Tanwar</p>
        </div>

        <div style="background: #ffffff; padding: 40px 20px; border: 1px solid #e5e5e5;">
          <h2 style="margin: 0 0 10px 0; font-size: 20px; color: #0a0a0a;">${analysis.productName}</h2>
          <div style="height: 2px; width: 40px; background: #0a0a0a; margin: 0 0 30px 0;"></div>

          <div style="margin-bottom: 30px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #0a0a0a; font-weight: 600;">Problem</h3>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666;">${analysis.problem}</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #0a0a0a; font-weight: 600;">Market Insight</h3>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666;">${analysis.insight}</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #0a0a0a; font-weight: 600;">Strategy</h3>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666;">${analysis.strategy}</p>
          </div>

          <div style="margin-bottom: 30px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; color: #0a0a0a; font-weight: 600;">Growth Levers</h3>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666;">${analysis.growth}</p>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 4px; margin: 30px 0;">
            <h3 style="margin: 0 0 10px 0; font-size: 16px; color: #0a0a0a; font-weight: 600;">Full Analysis</h3>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #666;">${analysis.analysis.replace(/\n/g, '<br>')}</p>
          </div>
        </div>

        <div style="background: #f5f5f5; padding: 30px 20px; text-align: center; border-radius: 0 0 8px 8px;">
          <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;">Want to explore more strategic insights?</p>
          <a href="https://vikranttanwar.com/lesspay" style="display: inline-block; background: #0a0a0a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 14px;">View Case Studies</a>
          <p style="margin: 30px 0 0 0; font-size: 12px; color: #999;">Curious about product strategy? Reach out to discuss your product challenges.</p>
          <a href="https://vikranttanwar.com/lesspay/contact" style="color: #0a0a0a; text-decoration: none; font-weight: 600; font-size: 12px;">Get In Touch →</a>
        </div>
      </div>
    `

    // Send email
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `Product Analysis: ${analysis.productName} — By Vikrant Tanwar`,
      html: htmlContent,
      replyTo: process.env.CONTACT_EMAIL || 'vikranttanwar2000@gmail.com',
    })

    if (response.error) {
      console.error('Resend error:', response.error)
      return NextResponse.json(
        { error: `Failed to send email: ${response.error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Analysis sent to your email!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Analyze email endpoint error:', error)
    return NextResponse.json(
      { error: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
