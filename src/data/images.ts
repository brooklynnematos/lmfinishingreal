import { ImageCategory } from '../types';

export const portfolioImages: ImageCategory[] = {
  'Basement Finishing': Array.from({ length: 7 }, (_, i) => ({
    id: `basement-${i + 1}`,
    url: `/images/portfolio/basement/basement-${i + 1}.jpeg`,
    title: `Basement Project ${i + 1}`,
    description: 'Expert basement finishing and design'
  })),
  'Custom Carpentry': Array.from({ length: 42 }, (_, i) => ({
    id: `carpentry-${i + 1}`,
    url: `/images/portfolio/carpentry/carpentry-${i + 1}.jpeg`,
    title: `Custom Carpentry Project ${i + 1}`,
    description: 'Expert carpentry craftsmanship and detail'
  })),
  'Exterior': Array.from({ length: 16 }, (_, i) => ({
    id: `exteriors-${i + 1}`,
    url: `/images/portfolio/exteriors/exteriors-${i + 1}.jpeg`,
    title: `Exterior Project ${i + 1}`,
    description: 'Professional exterior renovation and improvement'
  })),
  'Home Renovations': Array.from({ length: 37 }, (_, i) => ({
    id: `renovations-${i + 1}`,
    url: `/images/portfolio/renovations/renovations-${i + 1}.jpeg`,
    title: `Home Renovation Project ${i + 1}`,
    description: 'Complete home transformation and upgrade'
  }))
};

export const serviceImages = {
  'Basement Finishing': {
    primary: '/images/services/basement/primary.jpeg',
    gallery: [
      '/images/services/basement/gallery-1.jpeg',
      '/images/services/basement/gallery-2.jpeg'
    ]
  },
  'Home Renovations': {
    primary: '/images/services/renovations/primary.jpeg',
    gallery: [
      '/images/services/renovations/gallery-1.jpeg',
      '/images/services/renovations/gallery-2.jpeg'
    ]
  },
  'Custom Carpentry': {
    primary: '/images/services/carpentry/primary.jpeg',
    gallery: [
      '/images/services/carpentry/gallery-1.jpeg',
      '/images/services/carpentry/gallery-2.jpeg'
    ]
  },
  'Exterior': {
    primary: '/images/services/exterior/primary.jpeg',
    gallery: [
      '/images/services/exterior/gallery-1.jpeg',
      '/images/services/exterior/gallery-2.jpeg'
    ]
  }
};

export const blogImages = {
  headers: {
    default: '/images/blog/headers/default.jpeg',
    flooring: '/images/blog/headers/flooring.jpeg',
    basement: '/images/blog/headers/basement.jpeg'
  },
  gallery: {
    flooring: [
      '/images/blog/gallery/flooring/image-1.jpeg',
      '/images/blog/gallery/flooring/image-2.jpeg',
      '/images/blog/gallery/flooring/image-3.jpeg'
    ],
    basement: [
      '/images/blog/gallery/basement/image-1.jpeg',
      '/images/blog/gallery/basement/image-2.jpeg',
      '/images/blog/gallery/basement/image-3.jpeg'
    ]
  }
};
