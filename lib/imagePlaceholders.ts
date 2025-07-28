// Image placeholder configuration for AMA website
// These are temporary images that can be easily replaced with final client images

export const imagePlaceholders = {
  // Hero section images (rotating carousel)
  hero: [
    {
      src: 'https://source.unsplash.com/1200x600/?church,stained-glass,architecture',
      alt: 'Beautiful church architecture with stained glass windows',
      aspectRatio: 'aspect-[2/1]'
    },
    {
      src: 'https://source.unsplash.com/1200x600/?worship,community,people',
      alt: 'Community worship and fellowship gathering',
      aspectRatio: 'aspect-[2/1]'
    },
    {
      src: 'https://source.unsplash.com/1200x600/?helping,volunteer,service',
      alt: 'Volunteers serving the community together',
      aspectRatio: 'aspect-[2/1]'
    }
  ],

  // Church cards and listings
  churches: {
    default: {
      src: 'https://source.unsplash.com/400x300/?church,building',
      alt: 'Local church building',
      aspectRatio: 'aspect-[4/3]'
    },
    baptist: {
      src: 'https://source.unsplash.com/400x300/?baptist,church',
      alt: 'Baptist church building',
      aspectRatio: 'aspect-[4/3]'
    },
    methodist: {
      src: 'https://source.unsplash.com/400x300/?methodist,church',
      alt: 'Methodist church building',
      aspectRatio: 'aspect-[4/3]'
    },
    catholic: {
      src: 'https://source.unsplash.com/400x300/?catholic,church',
      alt: 'Catholic church building',
      aspectRatio: 'aspect-[4/3]'
    },
    presbyterian: {
      src: 'https://source.unsplash.com/400x300/?presbyterian,church',
      alt: 'Presbyterian church building',
      aspectRatio: 'aspect-[4/3]'
    },
    lutheran: {
      src: 'https://source.unsplash.com/400x300/?lutheran,church',
      alt: 'Lutheran church building',
      aspectRatio: 'aspect-[4/3]'
    }
  },

  // Event images
  events: {
    default: {
      src: 'https://source.unsplash.com/600x400/?event,meeting',
      alt: 'Community event or meeting',
      aspectRatio: 'aspect-[3/2]'
    },
    worship: {
      src: 'https://source.unsplash.com/600x400/?worship,music',
      alt: 'Worship service with music',
      aspectRatio: 'aspect-[3/2]'
    },
    community: {
      src: 'https://source.unsplash.com/600x400/?community,service',
      alt: 'Community service event',
      aspectRatio: 'aspect-[3/2]'
    }
  },

  // About page images
  about: {
    team: {
      src: 'https://source.unsplash.com/800x500/?team,ministry',
      alt: 'Ministry team working together',
      aspectRatio: 'aspect-[8/5]'
    },
    mission: {
      src: 'https://source.unsplash.com/800x500/?mission,service',
      alt: 'Mission and service work',
      aspectRatio: 'aspect-[8/5]'
    }
  },

  // Help/Resources page images
  help: {
    food: {
      src: 'https://source.unsplash.com/400x300/?food,donation',
      alt: 'Food donation and assistance',
      aspectRatio: 'aspect-[4/3]'
    },
    shelter: {
      src: 'https://source.unsplash.com/400x300/?shelter,housing',
      alt: 'Housing and shelter assistance',
      aspectRatio: 'aspect-[4/3]'
    },
    clothing: {
      src: 'https://source.unsplash.com/400x300/?clothing,donation',
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