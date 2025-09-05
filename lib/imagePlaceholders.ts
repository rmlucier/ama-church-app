// Image placeholder configuration for AMA website
// These are temporary images that can be easily replaced with final client images

export const imagePlaceholders = {
  // Hero section images (rotating carousel)
  hero: [
    {
      src: '/images/hero/ama-3-of-11.jpeg',
      alt: 'Albion Ministerial Association National Day of Prayer event',
      aspectRatio: 'aspect-[2/1]'
    },
    {
      src: '/images/hero/ama-10-of-11.jpeg',
      alt: 'AMA community gathering and fellowship',
      aspectRatio: 'aspect-[2/1]'
    },
    {
      src: '/images/hero/ama-11-of-11.jpeg',
      alt: 'AMA leadership and community service',
      aspectRatio: 'aspect-[2/1]'
    }
  ],

  // Church cards and listings - using SVG placeholders for reliability
  churches: {
    default: {
      src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23dde5b6"/%3E%3Cg transform="translate(200 150)"%3E%3Cpath d="M-40 -60 L0 -100 L40 -60 L40 40 L-40 40 Z" fill="%236c584c"/%3E%3Crect x="-30" y="-30" width="60" height="50" fill="%23adc178"/%3E%3Cpath d="M-10 -15 L0 -25 L10 -15 Z" fill="%236c584c"/%3E%3C/g%3E%3Ctext x="200" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="%236c584c"%3ELocal Church%3C/text%3E%3C/svg%3E',
      alt: 'Local church building',
      aspectRatio: 'aspect-[4/3]'
    },
    baptist: {
      src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23dde5b6"/%3E%3Cg transform="translate(200 150)"%3E%3Cpath d="M-50 -60 L0 -110 L50 -60 L50 40 L-50 40 Z" fill="%236c584c"/%3E%3Crect x="-40" y="-40" width="80" height="60" fill="%23adc178"/%3E%3Ccircle cx="0" cy="-15" r="8" fill="%236c584c"/%3E%3C/g%3E%3Ctext x="200" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="%236c584c"%3EBaptist Church%3C/text%3E%3C/svg%3E',
      alt: 'Baptist church building',
      aspectRatio: 'aspect-[4/3]'
    },
    methodist: {
      src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23dde5b6"/%3E%3Cg transform="translate(200 150)"%3E%3Cpath d="M-45 -65 L0 -105 L45 -65 L45 40 L-45 40 Z" fill="%236c584c"/%3E%3Crect x="-35" y="-35" width="70" height="55" fill="%23adc178"/%3E%3Cpath d="M-15 -20 L0 -30 L15 -20 L15 0 L-15 0 Z" fill="%23f0ead2"/%3E%3C/g%3E%3Ctext x="200" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="%236c584c"%3EMethodist Church%3C/text%3E%3C/svg%3E',
      alt: 'Methodist church building',
      aspectRatio: 'aspect-[4/3]'
    },
    catholic: {
      src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23dde5b6"/%3E%3Cg transform="translate(200 150)"%3E%3Cpath d="M-55 -70 L0 -115 L55 -70 L55 40 L-55 40 Z" fill="%236c584c"/%3E%3Crect x="-45" y="-45" width="90" height="65" fill="%23adc178"/%3E%3Cpath d="M0 -85 L0 -65 M-10 -75 L10 -75" stroke="%23f0ead2" stroke-width="3"/%3E%3C/g%3E%3Ctext x="200" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="%236c584c"%3ECatholic Church%3C/text%3E%3C/svg%3E',
      alt: 'Catholic church building',
      aspectRatio: 'aspect-[4/3]'
    },
    presbyterian: {
      src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23dde5b6"/%3E%3Cg transform="translate(200 150)"%3E%3Cpath d="M-45 -60 L0 -100 L45 -60 L45 40 L-45 40 Z" fill="%236c584c"/%3E%3Crect x="-35" y="-30" width="70" height="50" fill="%23adc178"/%3E%3Cpolygon points="-10,-20 0,-30 10,-20 10,0 -10,0" fill="%23f0ead2"/%3E%3C/g%3E%3Ctext x="200" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="%236c584c"%3EPresbyterian Church%3C/text%3E%3C/svg%3E',
      alt: 'Presbyterian church building',
      aspectRatio: 'aspect-[4/3]'
    },
    lutheran: {
      src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23dde5b6"/%3E%3Cg transform="translate(200 150)"%3E%3Cpath d="M-40 -55 L0 -95 L40 -55 L40 40 L-40 40 Z" fill="%236c584c"/%3E%3Crect x="-30" y="-25" width="60" height="45" fill="%23adc178"/%3E%3Cpath d="M0 -75 L0 -55 M-8 -65 L8 -65" stroke="%23f0ead2" stroke-width="2"/%3E%3C/g%3E%3Ctext x="200" y="280" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="%236c584c"%3ELutheran Church%3C/text%3E%3C/svg%3E',
      alt: 'Lutheran church building',
      aspectRatio: 'aspect-[4/3]'
    }
  },

  // Event images
  events: {
    default: {
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
      alt: 'Community event or meeting',
      aspectRatio: 'aspect-[3/2]'
    },
    worship: {
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      alt: 'Worship service with music',
      aspectRatio: 'aspect-[3/2]'
    },
    community: {
      src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
      alt: 'Community service event',
      aspectRatio: 'aspect-[3/2]'
    }
  },

  // About page images
  about: {
    team: {
      src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=500&fit=crop',
      alt: 'Ministry team working together',
      aspectRatio: 'aspect-[8/5]'
    },
    mission: {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
      alt: 'Mission and service work',
      aspectRatio: 'aspect-[8/5]'
    }
  },

  // Help/Resources page images
  help: {
    food: {
      src: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop',
      alt: 'Food donation and assistance',
      aspectRatio: 'aspect-[4/3]'
    },
    shelter: {
      src: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
      alt: 'Housing and shelter assistance',
      aspectRatio: 'aspect-[4/3]'
    },
    clothing: {
      src: 'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=400&h=300&fit=crop',
      alt: 'Clothing donation and assistance',
      aspectRatio: 'aspect-[4/3]'
    }
  }
};

// Helper function to get church image based on denomination
export function getChurchImage(denomination: string) {
  const denominationKey = denomination.toLowerCase().replace(/\s+/g, '');
  return imagePlaceholders.churches[denominationKey as keyof typeof imagePlaceholders.churches] || imagePlaceholders.churches.default;
}

// Helper function to get event image based on type
export function getEventImage(eventType: string) {
  const typeKey = eventType.toLowerCase().replace(/\s+/g, '');
  return imagePlaceholders.events[typeKey as keyof typeof imagePlaceholders.events] || imagePlaceholders.events.default;
} 