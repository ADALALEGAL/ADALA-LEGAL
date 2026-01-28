
export enum AppView {
  HOME = 'home',
  AI_CHAT = 'ai_chat',
  SERVICES = 'services',
  PROFILE = 'profile',
  MY_REQUESTS = 'my_requests'
}

export interface LegalService {
  id: string;
  title: string;
  description: string;
  category: 'legal' | 'notary';
  subCategory: string;
  icon: string;
  price?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

export interface Request {
  id: string;
  serviceTitle: string;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
}
