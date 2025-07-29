# Albion Ministerial Association Website Documentation

## Overview
This is a Next.js web application built for the Albion Ministerial Association (AMA) to connect churches and serve the Albion, MI community. The site features a modern, responsive design with a calming color palette and focuses on community service, church unity, and resource accessibility.

## Organization Information

### Mission Statement
The Albion Ministerial Association exists to foster unity, shared purpose, and collaboration among churches. We support senior leaders and faith-based organizations in serving the community, advancing the message of Christ, fulfilling the Great Commission, and encouraging mutual support in both faith and action.

### Vision Statement
To see the churches of Albion walking in unity, empowered to transform lives through Christ-centered service, collaborative leadership, and support Spirit-led outreach that brings hope, healing, and revival to our community.

### Core Values
1. **Lordship of Jesus Christ** – We proclaim Christ as Lord and Savior (I Corinthians 12:3)
2. **Prayerful Dependence** – We prioritize prayer as essential to ministry and life (Matthew 6:8)
3. **Biblical Truth** - We ground our work in Scripture, seeking wisdom and guidance from God's Word (2 Timothy 3:16)
4. **Commitment to the Great Commission** – We actively engage in making disciples of all nations (Matthew 28:19)
5. **Unity Among Churches** – We strive for oneness across the Body of Christ in Albion and beyond (John 17:21)
6. **Faithful Stewardship** – We commit to wisely managing the resources God has entrusted to us (1 Corinthians 4:2)
7. **Supportive Leadership Fellowship** – We cultivate relationships and mutual support among senior leaders (Ephesians 4:11)
8. **Servant Leadership** – We lead by serving others, following Christ's example (Matthew 20:28)
9. **Biblical View of Marriage** – We affirm marriage as a covenant between one man and one woman (Genesis 1:28)
10. **Great Commandment to Love** – We seek to love God wholly and our neighbors compassionately (Matthew 22:37)
11. **Kingdom-Minded Living** – We pursue God's Kingdom first in all things (Matthew 6:33)
12. **Encouragement** - We support and affirm leaders in their personal faith in Jesus Christ and ministry journey (Hebrews 10:24-25)
13. **Community Impact** - We commit to tangible service that uplifts and transforms lives (Matthew 5:14-16)
14. **Collaboration** - We partner to strengthen our impact and extend our reach (Ecclesiastes 4:9)

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
- **Layout**: Two-column grid for Mission/Vision, full-width Core Values section
- **Content**: 
  - Full Mission Statement
  - Complete Vision Statement
  - All 14 Core Values with scripture references
- **Design**: Card-based layout with visual hierarchy

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

### Dynamic Content
- **Churches Directory**: Google Sheets integration
- **Resources/Help**: Google Sheets integration  
- **Events**: Google Calendar API

### Static Content Locations
- **Mission Statement**: 
  - Homepage: `app/page.tsx` (Mission Section)
  - About Page: `app/about/page.tsx`
- **Vision Statement**: About Page (`app/about/page.tsx`)
- **Core Values**: About Page (`app/about/page.tsx`)
- **Hero Tagline**: `app/components/HeroSection.tsx`
- **Navigation**: `components/Navigation.tsx`

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

## Recent Updates (2025-07-29)
### Major Site Enhancements
1. **Contact Information Integration**
   - Added official mailing address: PO Box 481, Albion, MI 49224
   - Updated phone number: 517-494-0499
   - Added email: Albionministers@gmail.com
   - Integrated Facebook profile link with proper icon

2. **Leadership Structure Implementation**
   - Added complete leadership section to About page
   - Included all 4 officer positions with roles and descriptions
   - Added circular image placeholders for future headshots
   - President: Apostle Ruby Coats, Vice President: TBA, Treasurer: Pastor Paul Keohn, Secretary: Elvarane Showers

3. **New Page Creation**
   - **Privacy Policy** (`/privacy`): Comprehensive privacy protection guidelines
   - **Terms of Use** (`/terms`): Legal terms and acceptable use policies
   - **Donate Page** (`/donate`): Detailed donation information and methods
   - **Get Involved/Volunteer** (`/volunteer`): Volunteer opportunities and church partnership info

4. **Navigation & UX Improvements**
   - Updated main navigation to include all new pages
   - Made homepage info cards clickable (About AMA → /about, Find a Church → /churches, Get Help → /help)
   - Fixed mobile header layout: hamburger (left), AMA (center), donate (right)
   - Added Privacy/Terms links to footer
   - Updated Cash App handle to $AMA1Albion

5. **Technical Fixes & Enhancements**
   - Fixed ESLint errors in all new pages (escaped quotes and apostrophes)
   - Removed broken placeholder images from events page
   - Added rounded corners to "Need Support" section
   - Enhanced visual consistency across all pages

6. **Administrative Tools**
   - Created comprehensive admin training guide for Google Sheets/Calendar management
   - Step-by-step instructions for content updates
   - Best practices and troubleshooting guide

## Design Principles

### Visual Consistency
- **Rounded Corners**: All cards and sections use `rounded-xl` for modern, friendly appearance
- **Color Harmony**: Consistent use of primary, secondary, accent, and surface colors throughout
- **Shadow Depth**: Unified `shadow-md` with `hover:shadow-lg` for interactive elements
- **Typography**: Space Grotesk for headings, consistent font weights and sizes

### User Experience
- **Mobile-First Design**: Responsive layouts that work seamlessly across all devices
- **Clear Navigation**: Intuitive sidebar (desktop) and hamburger menu (mobile)
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support
- **Performance**: Optimized images, minimal JavaScript, fast loading times

### Content Structure
- **Hierarchical Information**: Clear content hierarchy with proper heading structure
- **Scannable Layout**: Cards, lists, and sections that are easy to scan and read
- **Action-Oriented**: Clear call-to-action buttons and links throughout
- **Contact Integration**: Contact information consistently placed and easily accessible

### Interactive Elements
- **Hover Effects**: Subtle animations on buttons, cards, and links
- **Visual Feedback**: Scale animations, color transitions, and shadow changes
- **Clickable Areas**: Clear indication of interactive elements
- **Form Design**: Clean, accessible forms with proper validation styling

## Future Content Updates
To update organization content:
1. **Mission/Vision**: Edit `app/about/page.tsx` and `app/page.tsx`
2. **Core Values**: Edit `app/about/page.tsx`
3. **Leadership Photos**: Replace image placeholder divs with actual headshots
4. **Hero Images**: Update `app/components/HeroSection.tsx` with organization photos
5. **Church Photos**: Use real church images instead of Google Places placeholders

## Next Steps & Recommendations

### Immediate Priorities
1. **Leadership Photos**: Obtain and add professional headshots for all officers
2. **Organization Photos**: Replace placeholder images with actual AMA event/activity photos
3. **Content Review**: Proofread all text content for accuracy and consistency
4. **Testing**: Comprehensive testing across devices and browsers

### Future Enhancements
1. **SEO Optimization**: Add meta descriptions, structured data, and optimize for local search
2. **Analytics Integration**: Add Google Analytics for visitor tracking and insights
3. **Form Functionality**: Implement actual form submission handling for contact forms
4. **Social Media Integration**: Expand social media presence and integration
5. **Newsletter Signup**: Add email newsletter signup functionality
6. **Event Registration**: Enable online event registration capabilities
7. **Resource Management**: Create admin panel for easier content management

### Technical Improvements
1. **Performance Optimization**: Implement image optimization and lazy loading
2. **Security Enhancements**: Add rate limiting and form validation
3. **Backup Strategy**: Implement automated backups for dynamic content
4. **Monitoring**: Add uptime monitoring and error tracking
5. **CDN Integration**: Consider CDN for improved global performance

### Content Strategy
1. **Regular Updates**: Establish schedule for content updates and maintenance
2. **Photo Library**: Build library of high-quality organization photos
3. **Blog/News Section**: Consider adding news or blog functionality
4. **Testimonials**: Collect and display community testimonials
5. **Resource Expansion**: Continuously update community resource directory