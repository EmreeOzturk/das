import { NextRequest, NextResponse } from 'next/server';

// Add this type declaration at the top of the file
interface CustomNextRequest extends NextRequest {
  ip?: string;
}

export async function GET(req: CustomNextRequest) {
  try {
    const ip = req.ip || req.headers.get('x-real-ip') || 
               req.headers.get('x-forwarded-for')?.split(',')[0];
    
    return NextResponse.json({ 
      success: true, 
      ipAddress: ip || 'Unable to detect IP' 
    });
    
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to detect IP' },
      { status: 500 }
    );
  }
} 