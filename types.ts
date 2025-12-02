export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'Design' | 'Development' | 'Marketing' | 'Translation';
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  company: string;
}