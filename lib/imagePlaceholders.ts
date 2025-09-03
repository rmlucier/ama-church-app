// Image placeholder configuration for AMA website
// These are temporary images that can be easily replaced with final client images

export const imagePlaceholders = {
  // Hero section images (rotating carousel)
  hero: [
    {
      src: '/images/hero/AMA - 3 of 11.jpeg',
      alt: 'Albion Ministerial Association National Day of Prayer event',
      aspectRatio: 'aspect-[2/1]'
    },
    {
      src: '/images/hero/AMA - 10 of 11.jpeg',
      alt: 'AMA community gathering and fellowship',
      aspectRatio: 'aspect-[2/1]'
    },
    {
      src: '/images/hero/AMA - 11 of 11.jpeg',
      alt: 'AMA leadership and community service',
      aspectRatio: 'aspect-[2/1]'
    }
  ],

  // Church cards and listings
  churches: {
    default: {
      src: 'https://images.unsplash.com/photo-1520637836862-4d197d17c968?w=400&h=300&fit=crop',
      alt: 'Local church building',
      aspectRatio: 'aspect-[4/3]'
    },
    baptist: {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      alt: 'Baptist church building',
      aspectRatio: 'aspect-[4/3]'
    },
    methodist: {
      src: 'https://images.unsplash.com/photo-1518411581080-b16818d7b8cc?w=400&h=300&fit=crop',
      alt: 'Methodist church building',
      aspectRatio: 'aspect-[4/3]'
    },
    catholic: {
      src: 'https://images.unsplash.com/photo-1549388604-817d15aa0110?w=400&h=300&fit=crop',
      alt: 'Catholic church building',
      aspectRatio: 'aspect-[4/3]'
    },
    presbyterian: {
      src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop',
      alt: 'Presbyterian church building',
      aspectRatio: 'aspect-[4/3]'
    },
    lutheran: {
      src: 'https://images.unsplash.com/photo-1520637836862-4d197d17c968?w=400&h=300&fit=crop',
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