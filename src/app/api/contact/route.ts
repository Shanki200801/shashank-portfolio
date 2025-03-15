import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    // Validate the request data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }
    
    // In a real application, you would send an email here
    // For example, using a service like SendGrid, Mailgun, or AWS SES
    
    // For now, we'll just log the data and return a success response
    console.log('Contact form submission:', { name, email, message });
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
} 