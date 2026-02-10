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
    description: "Transform your unfinished basement into a beautiful, functional living space that adds significant value to your home. Our experienced team handles all aspects from moisture control to final finishes.",
    imageUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&h=800&fit=crop", // 👈 VERTICAL BASEMENT FINISHING PHOTO
    features: [
      "Custom design and planning",
      "Full electrical and plumbing work",
      "Premium flooring installation",
      "Entertainment rooms and home theaters",
      "Bathroom and wet bar installations",
      "Local building code compliance"
    ]
  },
  {
    title: "Home Renovations",
    description: "Comprehensive home renovation services including kitchen remodels, bathroom upgrades, and complete home makeovers. We work with homeowners and general contractors to deliver exceptional results.",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop", // 👈 VERTICAL HOME RENOVATIONS PHOTO
    features: [
      "Kitchen remodeling",
      "Bathroom renovations and upgrades",
      "Living room transformations",
      "Room additions and expansions",
      "Complete home makeovers",
      "Energy-efficient upgrades"
    ]
  },
  {
    title: "Custom Carpentry",
    description: "Expert finish carpentry and custom woodworking services. Our skilled craftsmen create beautiful built-ins, custom trim work, and detailed millwork that enhances your home's character and value.",
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=800&fit=crop", // 👈 VERTICAL CUSTOM CARPENTRY PHOTO
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
    description: "Enhance your home's curb appeal and outdoor living spaces with our expert exterior construction services. We build custom decks, patios, and outdoor features designed to last.",
    imageUrl: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=600&h=800&fit=crop", // 👈 VERTICAL EXTERIOR SERVICES PHOTO
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
    description: "Complete transformation of an unfinished basement into a modern living space with custom built-ins and entertainment area.",
    beforeImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    afterImage: "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6",
    category: "Basement"
  },
  {
    title: "Luxury Kitchen Renovation",
    description: "Full kitchen remodel featuring custom cabinets, quartz countertops, and high-end appliances.",
    beforeImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    afterImage: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
    category: "Kitchen"
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: "The Future of Open Floor Plans: Adapting to Modern Living",
    slug: "open-floor-plans",
    excerpt: "Explore how open floor plans are evolving to meet the changing needs of modern families and lifestyles.",
    content: "Open floor plans have dominated home design for decades, but how are they evolving...",
    date: "2025-03-15",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  },
  {
    title: "How Much Does Custom Trim Cost in the DMV? 2025 Pricing Guide",
    slug: "dmv-custom-trim-costs",
    excerpt: "Complete guide to DMV custom trim costs including materials, labor, and factors affecting pricing. Get accurate estimates for your finish carpentry project.",
    content: "Custom trim work can dramatically enhance your home's appearance and value, but understanding the costs involved is crucial for budget planning...",
    date: "2025-01-25",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    title: "How to Choose the Right Flooring for Your Home",
    slug: "choosing-right-flooring",
    excerpt: "A comprehensive guide to selecting the perfect flooring for different rooms.",
    content: "Selecting the right flooring for your home is crucial for both aesthetics and functionality...",
    date: "2025-03-06",
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
  },
  {
    title: "5 Tips for Planning Your Basement Renovation",
    slug: "basement-renovation-tips",
    excerpt: "Essential tips to consider before starting your basement renovation project.",
    content: "Planning a basement renovation can be an exciting yet challenging endeavor...",
    date: "2025-02-15",
    imageUrl: "https://utahhomeremodel.net/wp-content/uploads/2024/02/Utah-basement-remodel-with-bar-2-1080x675.jpg"
  },
  {
    title: "Why Hire a Finish Carpenter Instead of a General Handyman?",
    slug: "finish-carpenter-vs-handyman",
    excerpt: "Learn the key differences between finish carpenters and general handymen, and why specialized skills matter for your custom carpentry project.",
    content: "When planning a custom carpentry project, you might wonder whether to hire a specialized finish carpenter or a general handyman...",
    date: "2025-01-20",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
  },
  {
    title: "The Hidden Costs of DIY Renovations (and How to Avoid Them)",
    slug: "hidden-costs-diy-renovations",
    excerpt: "Discover the hidden costs of DIY renovations that can blow your budget. Learn when to hire a contractor vs DIY to save money and avoid costly mistakes.",
    content: "DIY renovations seem like a great way to save money, but many homeowners discover that the hidden costs can quickly exceed the price of hiring a professional contractor...",
    date: "2025-01-10",
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d"
  },
  {
    title: "Questions to Ask Before Hiring a Contractor",
    slug: "questions-ask-contractor",
    excerpt: "Essential questions to ask contractors before hiring. Protect your investment with our comprehensive guide to vetting contractors for your home renovation project.",
    content: "Hiring the right contractor for your home renovation project is one of the most important decisions you'll make...",
    date: "2025-01-05",
    imageUrl: "https://pixabay.com/photos/woman-construction-helmet-tool-2759503/"
  }
];

export const dmvAreas: Location[] = [
  {
    county: "Washington DC",
    description: "Serving all districts and neighborhoods throughout the nation's capital with expert finish carpentry and custom remodeling services.",
    cities: ["Northwest DC", "Northeast DC", "Southeast DC", "Southwest DC", "Capitol Hill", "Dupont Circle", "Georgetown", "Adams Morgan"]
  },
  {
    county: "Northern Virginia",
    description: "Complete coverage of Northern Virginia including Arlington, Fairfax, and Loudoun Counties with professional finish carpentry services.",
    cities: ["Arlington", "Alexandria", "Fairfax", "McLean", "Tysons", "Reston", "Falls Church", "Vienna"]
  },
  {
    county: "Maryland",
    description: "Serving Maryland communities including Montgomery and Prince George's Counties with quality custom carpentry and home renovation services.",
    cities: ["Bethesda", "Silver Spring", "Rockville", "Gaithersburg", "College Park", "Hyattsville", "Bowie", "Annapolis"]
  },
  {
    area: "Salt Lake County",
    description: "Serving Salt Lake County and surrounding areas with expert finish carpentry and custom remodeling services.",
    cities: ["Salt Lake City", "Sandy", "West Valley City", "South Jordan", "Draper", "Millcreek", "Murray", "Cottonwood Heights"]
  },
  {
    area: "Utah County", 
    description: "Providing quality finish carpentry and home renovation services throughout Utah County communities.",
    cities: ["Provo", "Orem", "American Fork", "Pleasant Grove", "Lehi", "Spanish Fork", "Saratoga Springs", "Eagle Mountain"]
  },
  {
    area: "Summit County", 
    description: "Serving Summit County with professional finish carpentry and custom remodeling services.",
    cities: ["Park City", "Coalville", "Kamas", "Oakley", "Henefer", "Wanship", "Peoa", "Francis"]
  }
];