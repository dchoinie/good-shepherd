import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('getDate');
  const series = searchParams.get('series') || '3';

  if (!date) {
    return NextResponse.json(
      { error: 'getDate parameter is required' },
      { status: 400 }
    );
  }

  // Validate date format (YYYY/MM/DD)
  const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
  if (!dateRegex.test(date)) {
    return NextResponse.json(
      { error: 'Invalid date format. Use YYYY/MM/DD' },
      { status: 400 }
    );
  }

  // Validate series
  const validSeries = ['1', '3'];
  if (!validSeries.includes(series)) {
    return NextResponse.json(
      { error: 'Invalid series. Use 1 or 3' },
      { status: 400 }
    );
  }

  try {
    const url = `https://yaag.org/xml.php?getDate=${date}&series=${series}`;
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Good Shepherd Lutheran Church Lectionary Service',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    
    // Check if we got valid XML
    if (!xmlText.includes('<Sunday>') && !xmlText.includes('<?xml')) {
      throw new Error('Invalid XML response from external API');
    }
    
    // Return the XML as text
    return new NextResponse(xmlText, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error fetching lectionary data:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch lectionary data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
