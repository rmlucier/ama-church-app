# Albion Ministerial Association Website Documentation

## Overview
This is a Next.js web application built for the Albion Ministerial Association (AMA) to connect churches and serve the Albion, MI community. The site features a modern, responsive design with a calming color palette and focuses on community service, church unity, and resource accessibility.

## Architecture
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Language**: TypeScript
- **UI Pattern**: Vertical sidebar navigation (desktop) / Hamburger menu (mobile)

## Design System

### Colors
- **Primary**: #7A6A53 (Warm brown - main text and headings)
- **Secondary**: #99B2B7 (Soft blue-gray - links and accents)
- **Neutral**: #F5F5F2 (Off-white - background)
- **Accent**: #948C75 (Muted gold - buttons and highlights)
- **Surface**: #D5DED9 (Light sage - cards and sections)

### Typography
- **Font Family**: Space Grotesk (primary), Geist (fallback)
- **Styles**: Regular (400), Semi-bold (600), Bold (700)

## Site Structure

### 1. Homepage (`/`)
- **Hero Section**: Auto-rotating image carousel with mission statement
- **Mission Section**: Icon-driven presentation of AMA's purpose
- **Churches Grid**: Sample church cards with denomination-based imagery
- **Info Cards**: Three quick-access cards (About, Churches, Help)
- **CTA Section**: Prominent call-to-action for those needing assistance

### 2. About Page (`/about`)
- Simple, centered layout
- Mission and Vision statements
- Focused on unity and community service

### 3. Churches Page (`/churches`)
- **Data Source**: Google Sheets CSV integration
- **Features**:
  - Interactive Google Maps embed showing all churches
  - Church cards with:
    - Denomination-specific placeholder images
    - Service times, pastor info, contact details
    - Direct links to Google Maps directions
    - Email contact buttons
- **Dynamic Content**: Pulls real-time data from spreadsheet

### 4. Events Page (`/events`)
- **Data Source**: Google Calendar API integration
- **Features**:
  - Real-time event fetching
  - Event cards with:
    - Event-type based placeholder images
    - Date/time formatting
    - Location information
    - Direct calendar links
- **Calendar ID**: Configured for AMA's Google Calendar

### 5. Help/Resources Page (`/help`)
- **Data Source**: Google Sheets CSV integration
- **Features**:
  - Resource directory for community assistance
  - Categories: Food, Shelter, Clothing, etc.
  - Contact information and hours
  - Google Maps integration for locations

### 6. Contact Page (`/contact`)
- Simple contact form
- Form fields: Name, Email, Message
- Success confirmation message

## Technical Features

### Data Integration
1. **CSV Fetching** (`lib/fetchCsv.ts`)
   - Parses Google Sheets published CSV data
   - Handles quoted values and special characters

2. **Calendar Integration** (`lib/fetchGoogleCalendarEvents.ts`)
   - Google Calendar API v3
   - Fetches upcoming events
   - Formats dates/times

### Image Management
- **Placeholder System** (`lib/imagePlaceholders.ts`)
   - Unsplash integration for temporary images
   - Denomination/event-type based image selection
   - Consistent aspect ratios

### Navigation
- **Desktop**: Fixed vertical sidebar with all pages
- **Mobile**: Hamburger menu with smooth animations
- **Active Page Highlighting**: Visual indicator for current page

### Special Elements
- **Donate Button**: Fixed position, links to Cash App
- **Responsive Design**: Mobile-first approach
- **Print Optimization**: Cards maintain layout when printed

## External Integrations
1. **Google Sheets** (2 instances):
   - Churches directory
   - Resource directory

2. **Google Calendar**:
   - Public calendar for community events

3. **Google Maps**:
   - Embedded church locations map
   - Dynamic direction links

## Content Management
All dynamic content is managed through:
- Google Sheets for church and resource data
- Google Calendar for events
- Static content in page components

## Accessibility Features
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast color ratios

## Performance Optimizations
- Lazy loading images
- Client-side data caching
- Minimal JavaScript bundle
- Optimized font loading

## Future Considerations
The site is built to easily accommodate:
- Real church photos (replacing placeholders)
- Additional resource categories
- Enhanced contact form functionality
- More detailed church profiles
- Event registration features

## Deployment
Ready for deployment on Vercel or similar Next.js-compatible platforms with:
- Environment variables for API keys
- Static generation where possible
- Dynamic routes for church/event details