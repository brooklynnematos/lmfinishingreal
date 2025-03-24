import { Service, TeamMember, Testimonial, Project, BlogPost, Location } from '../types';

export const services: Service[] = [
  {
    title: "Basement Finishing",
    description: "Transform your unfinished basement into a beautiful, functional living space that adds value to your home.",
    imageUrl: `/images/portfolio/basement/basement-3.webp`,
    features: [
      "Custom design and planning",
      "Full electrical and plumbing work",
      "Premium flooring installation",
      "Entertainment rooms and home theaters",
      "Bathroom and wet bar installations"
    ]
  },
  {
    title: "Home Renovations",
    description: "Upgrade your living spaces with our comprehensive home renovation services.",
    imageUrl: `/images/portfolio/renovations/renovations-2.webp`,
    features: [
      "Kitchen remodeling",
      "Bathroom upgrades",
      "Living room transformations",
      "Room additions",
      "Complete home makeovers"
    ]
  },
  {
    title: "Custom Carpentry",
    description: "Expert craftsmanship for all your custom woodworking and carpentry needs.",
    imageUrl: `/images/portfolio/carpentry/carpentry-38.webp`,
    features: [
      "Built-in entertainment centers",
      "Custom cabinets and shelving",
      "Trim and crown molding",
      "Custom staircases and railings"
    ]
  },
  {
    title: "Exterior Services",
    description: "Enhance your home's curb appeal and outdoor living spaces.",
    imageUrl: `/images/portfolio/exteriors/exteriors-2.webp`,
    features: [
      "Custom deck construction",
      "Patio installations",
      "Exterior trim work",
      "Siding installation",
      "Outdoor living spaces"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Katie G",
    role: "Homeowner",
    content: "We had a great experience with L&M Construction. Leo was great at communicating and always responded to messages and questions. Through every step of the framing process he made sure we were on the same page. We always felt in the loop and very happy with his work. We also had received several bids and felt he was reasonably priced. We wouldn't hesitant to hire him again. We definitely recommend using L&M construction.",
    source: "Google Reviews"
  },
  {
    name: "Mark C",
    role: "Homeowner",
    content: 'Leo and his team are wonderful. They did a great job for framing and dry wall in our bedroom. His price is very reasonable and he knows exactly what he is doing. Very organized and a really respectful person. I have already hired him for many other jobs and he will be my go-to carpenter for what we need done in our home. I would recommend Leo to anyone without hesitation.',
    source: "Google Reviews"
  }
];

export const projects: Project[] = [
  {
    title: "Modern Basement Suite",
    description: "Complete transformation of an unfinished basement into a modern living space.",
    beforeImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    afterImage: "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6",
    category: "Basement"
  },
  {
    title: "Luxury Kitchen Renovation",
    description: "Full kitchen remodel with custom cabinets and high-end appliances.",
    beforeImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    afterImage: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
    category: "Kitchen"
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: "5 Tips for Planning Your Basement Renovation",
    slug: "basement-renovation-tips",
    excerpt: "Essential tips to consider before starting your basement renovation project.",
    content: "Planning a basement renovation can be an exciting yet challenging endeavor...",
    date: "2025-02-15",
    imageUrl: "https://utahhomeremodel.net/wp-content/uploads/2024/02/Utah-basement-remodel-with-bar-2-1080x675.jpg"
  },
  {
    title: "How to Choose the Right Flooring for Your Home",
    slug: "choosing-right-flooring",
    excerpt: "A comprehensive guide to selecting the perfect flooring for different rooms.",
    content: "Selecting the right flooring is crucial for both aesthetics and functionality...",
    date: "2025-03-06",
    imageUrl: "https://www.decosurfaces.com/DATA/BLOGUEIMAGE/2521-1.jpg"
  },
  {
    title: "The Future of Open Floor Plans: Adapting to Modern Living",
    slug: "open-floor-plans",
    excerpt: "Explore how open floor plans are evolving to meet the changing needs of modern families and lifestyles.",
    content: "Open floor plans have dominated home design for decades, but how are they evolving...",
    date: "2025-03-15",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  }
];

export const locations: Location[] = [
  {
    county: "Utah County",
    description: "Serving all cities in Utah County including Provo, Orem, American Fork, and Pleasant Grove.",
    cities: ["Provo", "Orem", "American Fork", "Pleasant Grove", "Lehi", "Spanish Fork"]
  },
  {
    county: "Salt Lake County",
    description: "Complete coverage of Salt Lake County including Salt Lake City, Sandy, West Valley City, and more.",
    cities: ["Salt Lake City", "Sandy", "West Valley City", "South Jordan", "Draper"]
  },
  {
    county: "Davis County",
    description: "Serving Davis County communities including Layton, Bountiful, and Farmington.",
    cities: ["Layton", "Bountiful", "Farmington", "Kaysville", "Syracuse"]
  },
  {
    county: "Wasatch County",
    description: "Serving Wasatch County including Heber City, Midway, and surrounding areas.",
    cities: ["Heber City", "Midway", "Charleston", "Daniel", "Wallsburg"]
  },
  {
    county: "Summit County",
    description: "Serving Summit County including Park City, Coalville, and surrounding mountain communities.",
    cities: ["Park City", "Coalville", "Kamas", "Oakley", "Francis"]
  }
];