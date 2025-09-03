# AMA Church App - Project Status & Quick Reference

## Project Overview
**Name:** Albion Ministerial Association Website  
**Type:** Next.js Church Directory & Community Resource Platform  
**Status:** 🔄 Development Phase  
**Local Path:** `/Users/fc-office/Development/ama-church-app/`  
**Repository:** https://github.com/rmlucier/ama-church-app  

## Technology Stack
- **Framework:** Next.js 14+ with App Router
- **Styling:** Tailwind CSS with custom design tokens
- **Language:** TypeScript
- **Data Sources:** Google Sheets CSV, Google Calendar API
- **Maps:** Google Maps integration
- **Deployment:** Ready for Vercel

## Key Features
- **Church Directory:** Dynamic church listings from Google Sheets
- **Events Calendar:** Google Calendar API integration
- **Resource Directory:** Community assistance resources
- **Google Maps:** Interactive church location mapping
- **Responsive Design:** Mobile-first approach

## Design System
- **Primary Color:** #7A6A53 (Warm brown)
- **Secondary Color:** #99B2B7 (Soft blue-gray)  
- **Background:** #F5F5F2 (Off-white)
- **Font:** Space Grotesk

## Quick Commands
```bash
# Navigate to project
cd /Users/fc-office/Development/ama-church-app/

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Check git status
git status

# Deploy (after setup)
vercel --prod
```

## Project Structure
```
ama-church-app/
├── app/                 # Next.js App Router pages
├── components/         # Reusable components
├── lib/               # Utilities (CSV fetch, Calendar API)
├── public/            # Static assets
├── ADMIN_TRAINING_GUIDE.md
├── AMA_SITE_DOCUMENTATION.md
└── CHURCH_GUIDE.md
```

## Data Integration
- **Churches:** Google Sheets → CSV → Dynamic display
- **Events:** Google Calendar API → Event cards
- **Resources:** Google Sheets → Community assistance directory

## Organization Details
**Mission:** Foster unity, shared purpose, and collaboration among churches in Albion, MI  
**Vision:** Churches of Albion walking in unity, empowered to transform lives through Christ-centered service  
**Leadership:** President: Apostle Ruby Coats, Treasurer: Pastor Paul Keohn, Secretary: Elvarane Showers  
**Contact:** Albionministers@gmail.com, 517-494-0499

## Next Steps
1. ✅ Review existing documentation and code structure
2. ⏳ Test local development environment
3. ⏳ Configure external integrations (Google Sheets, Calendar)
4. ⏳ Deploy to staging environment
5. ⏳ Content review and updates
6. ⏳ Production deployment

## Important Notes
- Comprehensive documentation already exists in project
- Google API integrations need configuration
- Ready for deployment with proper environment variables
- Mobile-responsive and accessibility-focused design

---
*Last Updated: August 22, 2025*