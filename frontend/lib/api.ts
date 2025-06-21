import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');

    if (!authHeader) {
      return NextResponse.json(
        {
          message: "authentication failed",
          error: "invalid access",
          data: null
        },
        { status: 403 }
      );
    }

    const res = await fetch('http://localhost:5000/v1/auth/email-verify/request', {
      method: 'GET',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          message: data.message || 'Request failed',
          error: data.error || data,
          data: null
        },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Email verification request error:', error);

    return NextResponse.json(
      {
        message: 'Something went wrong',
        error: error.message || 'Unknown error',
        data: null
      },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    const body = await request.json();

    if (!authHeader) {
      return NextResponse.json(
        {
          message: "authentication failed",
          error: "invalid access",
          data: null
        },
        { status: 403 }
      );
    }

    const res = await fetch('http://localhost:5000/v1/auth/email-verify/submit', {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          message: data.message || 'Request failed',
          error: data.error || data,
          data: null
        },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Email verification submit error:', error);

    return NextResponse.json(
      {
        message: 'Something went wrong',
        error: error.message || 'Unknown error',
        data: null
      },
      { status: 500 }
    );
  }
}