export interface Ad {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  categories: string[];
}

export interface UserPreferences {
  interests: string[];
  excludedCategories: string[];
}

export const categories = [
  'Technology',
  'Fashion',
  'Food',
  'Travel',
  'Sports',
  'Entertainment',
  'Education',
  'Health',
  'Business',
  'Lifestyle'
];

export const mockAds: Ad[] = [
  {
    id: '1',
    title: 'Next-Gen Laptop Pro',
    description: 'Experience unprecedented power with our latest laptop. Perfect for creators and professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80',
    link: 'https://example.com/laptop',
    categories: ['Technology', 'Business']
  },
  {
    id: '2',
    title: 'Wellness Retreat Package',
    description: 'Escape to paradise and rejuvenate your mind, body, and soul with our all-inclusive wellness retreat.',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
    link: 'https://example.com/retreat',
    categories: ['Health', 'Lifestyle', 'Travel']
  },
  {
    id: '3',
    title: 'Smart Fitness Tracker',
    description: 'Track your health goals with precision. Advanced sensors and AI-powered insights.',
    imageUrl: 'https://images.unsplash.com/photo-1557836879-87e69b9260a2?auto=format&fit=crop&w=1600&q=80',
    link: 'https://example.com/fitness',
    categories: ['Technology', 'Health', 'Sports']
  },
  {
    id: '4',
    title: 'Online Master\'s Program',
    description: 'Advance your career with our flexible online learning program. World-class education at your fingertips.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    link: 'https://example.com/education',
    categories: ['Education', 'Technology']
  },
  {
    id: '5',
    title: 'Gourmet Meal Kit',
    description: 'Restaurant-quality meals at home. Fresh ingredients and chef-crafted recipes delivered to your door.',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=80',
    link: 'https://example.com/food',
    categories: ['Food', 'Lifestyle']
  }
];