import { ImageCategory } from '../types';

// Image paths will be relative to the public folder
export const portfolioImages: ImageCategory[] = {
  'Basement Finishing': [
    {
      id: 'basement-1',
      url: '/images/portfolio/basement/basement-1.jpg',
      title: 'Modern Entertainment Space',
      description: 'Custom-built entertainment area with premium finishes'
    },
    {
      id: 'basement-2',
      url: '/images/portfolio/basement/basement-2.jpg',
      title: 'Home Theater Setup',
      description: 'Professional-grade home theater installation'
    },
    {
      id: 'basement-3',
      url: '/images/portfolio/basement/basement-3.jpg',
      title: 'Basement Bar',
      description: 'Custom wet bar with modern amenities'
    }
  ],
  'Home Renovations': [
    {
      id: 'renovation-1',
      url: '/images/portfolio/renovations/renovation-1.jpg',
      title: 'Kitchen Transformation',
      description: 'Complete kitchen remodel with custom cabinetry'
    },
    {
      id: 'renovation-2',
      url: '/images/portfolio/renovations/renovation-2.jpg',
      title: 'Master Bath Remodel',
      description: 'Luxury bathroom renovation with spa-like features'
    },
    {
      id: 'renovation-3',
      url: '/images/portfolio/renovations/renovation-3.jpg',
      title: 'Living Room Makeover',
      description: 'Modern living room redesign'
    }
  ],
  'Custom Carpentry': [
    {
      id: 'carpentry-1',
      url: '/images/portfolio/carpentry/carpentry-1.jpg',
      title: 'Built-in Entertainment Center',
      description: 'Custom-built entertainment unit with storage'
    },
    {
      id: 'carpentry-2',
      url: '/images/portfolio/carpentry/carpentry-2.jpg',
      title: 'Custom Shelving Units',
      description: 'Built-in shelving with premium finishes'
    },
    {
      id: 'carpentry-3',
      url: '/images/portfolio/carpentry/carpentry-3.jpg',
      title: 'Crown Molding',
      description: 'Detailed crown molding installation'
    }
  ],
  'Exterior': [
    {
      id: 'exterior-1',
      url: '/images/portfolio/exterior/exterior-1.jpg',
      title: 'Custom Deck Installation',
      description: 'Premium deck with custom railings'
    },
    {
      id: 'exterior-2',
      url: '/images/portfolio/exterior/exterior-2.jpg',
      title: 'Outdoor Living Space',
      description: 'Complete outdoor living area design'
    },
    {
      id: 'exterior-3',
      url: '/images/portfolio/exterior/exterior-3.jpg',
      title: 'Exterior Trim',
      description: 'Custom exterior trim work'
    }
  ]
};

export const serviceImages = {
  'Basement Finishing': {
    primary: '/images/services/basement/primary.jpg',
    gallery: [
      '/images/services/basement/gallery-1.jpg',
      '/images/services/basement/gallery-2.jpg'
    ]
  },
  'Home Renovations': {
    primary: '/images/services/renovations/primary.jpg',
    gallery: [
      '/images/services/renovations/gallery-1.jpg',
      '/images/services/renovations/gallery-2.jpg'
    ]
  },
  'Custom Carpentry': {
    primary: '/images/services/carpentry/primary.jpg',
    gallery: [
      '/images/services/carpentry/gallery-1.jpg',
      '/images/services/carpentry/gallery-2.jpg'
    ]
  },
  'Exterior': {
    primary: '/images/services/exterior/primary.jpg',
    gallery: [
      '/images/services/exterior/gallery-1.jpg',
      '/images/services/exterior/gallery-2.jpg'
    ]
  }
};

export const blogImages = {
  headers: {
    default: '/images/blog/headers/default.jpg',
    flooring: '/images/blog/headers/flooring.jpg',
    basement: '/images/blog/headers/basement.jpg'
  },
  gallery: {
    flooring: [
      '/images/blog/gallery/flooring/image-1.jpg',
      '/images/blog/gallery/flooring/image-2.jpg',
      '/images/blog/gallery/flooring/image-3.jpg'
    ],
    basement: [
      '/images/blog/gallery/basement/image-1.jpg',
      '/images/blog/gallery/basement/image-2.jpg',
      '/images/blog/gallery/basement/image-3.jpg'
    ]
  }
};