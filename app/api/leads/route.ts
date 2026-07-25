import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface LeadData {
  name: string;
  email: string;
  company: string;
  jobTitle?: string;
  phone?: string;
  message?: string;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON request body.' },
        { status: 400 }
      );
    }
     
    // Validation
    if (!body || !body.name || !body.email || !body.company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required fields.' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }
    
    const lead: LeadData = {
      name: body.name,
      email: body.email,
      company: body.company,
      jobTitle: body.jobTitle || '',
      phone: body.phone || '',
      message: body.message || '',
      submittedAt: new Date().toISOString(),
    };
    
    // Store in JSON file (mock database)
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'leads.json');
    
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    let leads: LeadData[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        leads = fileContent.trim() ? JSON.parse(fileContent) : [];
      } catch {
        leads = [];
      }
    }
    
    leads.push(lead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));
    
    return NextResponse.json(
      { message: 'Lead captured successfully', lead },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'leads.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ leads: [] });
    }
    
    let leads: LeadData[] = [];
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      leads = fileContent.trim() ? JSON.parse(fileContent) : [];
    } catch {
      leads = [];
    }
    
    return NextResponse.json({ leads });
  } catch (error) {
    console.error('Error reading leads:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
