export interface Service {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  source: string;
}

export interface Project {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
}

export interface Location {
  county: string;
  description: string;
  cities: string[];
}

export interface PortfolioImage {
  id: string;
  url: string;
  title: string;
  description: string;
}

export interface ImageCategory {
  [category: string]: PortfolioImage[];
}

export interface ServiceImages {
  primary: string;
  gallery: string[];
}

export interface BlogImages {
  headers: {
    default: string;
    [key: string]: string;
  };
  gallery: {
    [key: string]: string[];
  };
}