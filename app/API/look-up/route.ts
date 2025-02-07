import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { ipAddress, user_agent, user_language, strictness = 1 } = await req.json();
    
    if (!ipAddress) {
      return NextResponse.json(
        { success: false, message: 'IP address is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.IP_QUALITY_SCORE_API_KEY;
    const baseUrl = `https://ipqualityscore.com/api/json/ip/${apiKey}/${ipAddress}`;
    
    const params = new URLSearchParams({
      ...(user_agent && { user_agent }),
      ...(user_language && { user_language }),
      strictness: strictness.toString(),
      allow_public_access_points: 'true',
      mobile: 'true' // Enable mobile device detection
    });

    const apiUrl = `${baseUrl}?${params}`;
    
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.success) {
      return NextResponse.json(
        { success: false, message: data.message || 'IP quality check failed' },
        { status: 400 }
      );
    }

    // Enhanced validation logic from sample code
    const validationResult = {
      isRisky: data.fraud_score >= 75,
      isProxy: data.proxy,
      isVPN: data.vpn || data.active_vpn,
      isTOR: data.tor || data.active_tor,
      isCrawler: data.is_crawler,
      isMobile: data.mobile,
      fraudScore: data.fraud_score,
      abuseVelocity: data.abuse_velocity,
      ...data // Include all response data
    };

    return NextResponse.json({
      success: true,
      data: validationResult
    });

  } catch (error) {
    console.error('IP Quality Check Error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
