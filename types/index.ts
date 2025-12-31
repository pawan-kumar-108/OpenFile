// Core types for Policy Navigator

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface FooterSection {
  title: string;
  links: NavigationLink[];
}
