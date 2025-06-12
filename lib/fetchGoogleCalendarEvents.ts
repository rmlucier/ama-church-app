export interface GoogleCalendarEvent {
  id: string;
  title: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  htmlLink: string;
}

export async function fetchGoogleCalendarEvents(): Promise<GoogleCalendarEvent[]> {
  const CALENDAR_ID = 'c_74a77dc24b520db8ea93131e3f116ee1ebb35eda1e920935c28f38cf0586d379@group.calendar.google.com';
  const API_KEY = 'AIzaSyB56IkF1PiztWLEqEsxbOd24WTZAv-F2w8';
  
  const now = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${now}&maxResults=10&orderBy=startTime&singleEvents=true`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.items?.map((item: any) => ({
      id: item.id,
      title: item.summary,
      start: item.start,
      end: item.end,
      location: item.location,
      description: item.description,
      htmlLink: item.htmlLink,
    })) || [];
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    throw error;
  }
}

export function formatEventDateTime(start: { dateTime?: string; date?: string }): string {
  if (start.dateTime) {
    const date = new Date(start.dateTime);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) + ' at ' + date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  } else if (start.date) {
    const date = new Date(start.date);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  return 'Date TBD';
} 