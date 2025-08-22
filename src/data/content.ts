import { Service, TeamMember, Testimonial, Project, BlogPost, Location } from '../types';

// ========================================
// SERVICE IMAGES - UPDATE THESE URLs TO CHANGE SERVICE PHOTOS
// ========================================
// These images appear on both the Home page services section and Services page
// Simply replace the URLs below with your new image URLs
// Recommended size: 800x600 pixels or larger
// ========================================

export const services: Service[] = [
  {
    title: "Basement Finishing",
    description: "Transform your unfinished Utah basement into a beautiful, functional living space that adds significant value to your home. Our Utah basement finishing contractors handle all aspects from moisture control to final finishes.",
    imageUrl: "/images.ts/basement-3.webp", // 👈 LOCAL BASEMENT FINISHING PHOTO
    features: [
      "Custom design and planning for Utah basements",
      "Full electrical and plumbing work",
      "Premium flooring installation",
      "Entertainment rooms and home theaters",
      "Bathroom and wet bar installations",
      "Utah building code compliance"
    ]
  },
  {
    title: "Home Renovations",
    description: "Comprehensive Utah home renovation services including kitchen remodels, bathroom upgrades, and complete home makeovers. We work with homeowners and general contractors throughout Northern Utah.",
    imageUrl: "/images.ts/renovations-2.webp", // 👈 CHANGE THIS URL FOR HOME RENOVATIONS PHOTO
    features: [
      "Utah kitchen remodeling",
      "Bathroom renovations and upgrades",
      "Living room transformations",
      "Room additions and expansions",
      "Complete Utah home makeovers",
      "Energy-efficient upgrades"
    ]
  },
  {
    title: "Custom Carpentry",
    description: "Expert Utah finish carpentry and custom woodworking services. Our skilled craftsmen create beautiful built-ins, custom trim work, and detailed millwork that enhances your home's character.",
    imageUrl: "/images.ts/carpentry-38.webp", // 👈 CHANGE THIS URL FOR CUSTOM CARPENTRY PHOTO
    features: [
      "Built-in entertainment centers",
      "Custom cabinets and shelving",
      "Crown molding and trim work",
      "Custom staircases and railings",
      "Wainscoting and paneling",
      "Fireplace mantels and surrounds"
    ]
  },
  {
    title: "Exterior Services",
    description: "Enhance your Utah home's curb appeal and outdoor living spaces with our expert exterior construction services. We build custom decks, patios, and outdoor features designed for Utah's climate.",
    imageUrl: "/images.ts/exteriors-19.webp", // 👈 CHANGE THIS URL FOR EXTERIOR SERVICES PHOTO
    features: [
      "Custom deck construction",
      "Patio installations",
      "Exterior trim work",
      "Siding installation and repair",
      "Outdoor living spaces",
      "Pergolas and gazebos"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Katie G",
    role: "Utah County Homeowner",
    content: "We had a great experience with L&M Construction. Leo was great at communicating and always responded to messages and questions. Through every step of the framing process he made sure we were on the same page. We always felt in the loop and very happy with his work. We also had received several bids and felt he was reasonably priced. We wouldn't hesitant to hire him again. We definitely recommend using L&M construction.",
    source: "Google Reviews"
  },
  {
    name: "Mark C",
    role: "Salt Lake County Homeowner",
    content: 'Leo and his team are wonderful. They did a great job for framing and dry wall in our bedroom. His price is very reasonable and he knows exactly what he is doing. Very organized and a really respectful person. I have already hired him for many other jobs and he will be my go-to carpenter for what we need done in our home. I would recommend Leo to anyone without hesitation.',
    source: "Google Reviews"
  }
];

export const projects: Project[] = [
  {
    title: "Modern Utah Basement Suite",
    description: "Complete transformation of an unfinished Utah County basement into a modern living space with custom built-ins and entertainment area.",
    beforeImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    afterImage: "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6",
    category: "Basement"
  },
  {
    title: "Luxury Utah Kitchen Renovation",
    description: "Full kitchen remodel in Salt Lake County featuring custom cabinets, quartz countertops, and high-end appliances.",
    beforeImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    afterImage: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
    category: "Kitchen"
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: "Questions to Ask Before Hiring a Utah Contractor",
    slug: "questions-ask-utah-contractor",
    excerpt: "Essential questions to ask Utah contractors before hiring. Protect your investment with our comprehensive guide to vetting contractors for your home renovation project.",
    content: "Hiring the right contractor for your Utah home renovation project is one of the most important decisions you'll make...",
    date: "2025-01-05",
    imageUrl: "https://images.unsplash.com/photo-1600566752547-c06598f4a0d5"
  },
  {
    title: "The Hidden Costs of DIY Renovations (and How to Avoid Them)",
    slug: "hidden-costs-diy-renovations",
    excerpt: "Discover the hidden costs of DIY renovations that can blow your budget. Learn when to hire a Utah contractor vs DIY to save money and avoid costly mistakes.",
    content: "DIY renovations seem like a great way to save money, but many Utah homeowners discover that the hidden costs can quickly exceed the price of hiring a professional contractor...",
    date: "2025-01-10",
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
  },
  {
    title: "Why Hire a Utah Finish Carpenter Instead of a General Handyman?",
    slug: "finish-carpenter-vs-handyman",
    excerpt: "Learn the key differences between Utah finish carpenters and general handymen, and why specialized skills matter for your custom carpentry project.",
    content: "When planning a custom carpentry project in Utah, you might wonder whether to hire a specialized finish carpenter or a general handyman...",
    date: "2025-01-20",
    imageUrl: "https://images.unsplash.com/photo-1600566752547-c06598f4a0d5"
  },
  {
    title: "How Much Does Custom Trim Cost in Utah? 2025 Pricing Guide",
    slug: "utah-custom-trim-costs",
    excerpt: "Complete guide to Utah custom trim costs including materials, labor, and factors affecting pricing. Get accurate estimates for your Utah finish carpentry project.",
    content: "Custom trim work can dramatically enhance your Utah home's appearance and value, but understanding the costs involved is crucial for budget planning...",
    date: "2025-01-25",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    title: "5 Tips for Planning Your Utah Basement Renovation",
    slug: "basement-renovation-tips",
    excerpt: "Essential tips to consider before starting your Utah basement renovation project, including moisture control, permits, and design considerations.",
    content: "Planning a basement renovation in Utah can be an exciting yet challenging endeavor...",
    date: "2025-02-15",
    imageUrl: "https://utahhomeremodel.net/wp-content/uploads/2024/02/Utah-basement-remodel-with-bar-2-1080x675.jpg"
  },
  {
    title: "How to Choose the Right Flooring for Your Utah Home",
    slug: "choosing-right-flooring",
    excerpt: "A comprehensive guide to selecting the perfect flooring for different rooms in your Utah home, considering climate and lifestyle factors.",
    content: "Selecting the right flooring for your Utah home is crucial for both aesthetics and functionality...",
    date: "2025-03-06",
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
  },
  {
    title: "The Future of Open Floor Plans: Adapting to Modern Utah Living",
    slug: "open-floor-plans",
    excerpt: "Explore how open floor plans are evolving to meet the changing needs of modern Utah families and lifestyles.",
    content: "Open floor plans have dominated Utah home design for decades, but how are they evolving...",
    date: "2025-03-15",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  }
];

export const locations: Location[] = [
  {
    county: "Utah County",
    description: "Serving all cities in Utah County including Provo, Orem, American Fork, Pleasant Grove, Lehi, and Saratoga Springs with expert finish carpentry and custom remodeling services.",
    cities: ["Provo", "Orem", "American Fork", "Pleasant Grove", "Lehi", "Spanish Fork", "Saratoga Springs", "Eagle Mountain"]
  },
  {
    county: "Salt Lake County",
    description: "Complete coverage of Salt Lake County including Salt Lake City, Sandy, West Valley City, Draper, and more with professional Utah finish carpentry services.",
    cities: ["Salt Lake City", "Sandy", "West Valley City", "South Jordan", "Draper", "Millcreek", "Murray", "Cottonwood Heights"]
  },
  {
    county: "Davis County",
    description: "Serving Davis County communities including Layton, Bountiful, Farmington, and surrounding areas with quality custom carpentry and home renovation services.",
    cities: ["Layton", "Bountiful", "Farmington", "Kaysville", "Syracuse", "Centerville", "Woods Cross"]
  },
  {
    county: "Wasatch County",
    description: "Serving Wasatch County including Heber City, Midway, and surrounding mountain communities with specialized finish carpentry for Utah's unique climate.",
    cities: ["Heber City", "Midway", "Charleston", "Daniel", "Wallsburg"]
  },
  {
    county: "Summit County",
    description: "Serving Summit County including Park City, Coalville, and surrounding mountain communities with high-end custom carpentry and luxury home renovations.",
    cities: ["Park City", "Coalville", "Kamas", "Oakley", "Francis"]
  }
];