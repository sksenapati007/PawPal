// Local storage utilities for PawPal demo
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  location?: string;
}

export interface Pet {
  id: string;
  userId: string;
  name: string;
  breed: string;
  age: number;
  photos: string[];
  bio?: string;
}

export interface Post {
  id: string;
  userId: string;
  petId?: string;
  content: string;
  images: string[];
  likes: string[];
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  hostId: string;
  attendees: string[];
  maxCapacity: number;
  imageUrl?: string;
}

export interface VetProvider {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  distance: string;
  isEmergency: boolean;
  isAvailable: boolean;
  phone: string;
  address: string;
  imageUrl?: string;
}

// Storage keys
const STORAGE_KEYS = {
  CURRENT_USER: 'pawpal_current_user',
  USERS: 'pawpal_users',
  PETS: 'pawpal_pets',
  POSTS: 'pawpal_posts',
  EVENTS: 'pawpal_events',
  VET_PROVIDERS: 'pawpal_vet_providers',
};

// Helper functions
export const getStorageItem = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export const setStorageItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// User management
export const getCurrentUser = (): User | null => {
  return getStorageItem<User>(STORAGE_KEYS.CURRENT_USER);
};

export const setCurrentUser = (user: User): void => {
  setStorageItem(STORAGE_KEYS.CURRENT_USER, user);
};

export const clearCurrentUser = (): void => {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
};

// Initialize demo data
export const initializeDemoData = (): void => {
  if (!getStorageItem(STORAGE_KEYS.VET_PROVIDERS)) {
    const demoVets: VetProvider[] = [
      {
        id: '1',
        name: 'Happy Paws Veterinary Clinic',
        specialty: 'General Care',
        rating: 4.8,
        distance: '0.5 miles',
        isEmergency: true,
        isAvailable: true,
        phone: '(555) 123-4567',
        address: '123 Pet Street, Petville',
      },
      {
        id: '2',
        name: 'Emergency Pet Hospital',
        specialty: 'Emergency Care',
        rating: 4.9,
        distance: '1.2 miles',
        isEmergency: true,
        isAvailable: true,
        phone: '(555) 911-PETS',
        address: '456 Emergency Ave, Petville',
      },
      {
        id: '3',
        name: 'Furry Friends Grooming',
        specialty: 'Grooming',
        rating: 4.7,
        distance: '0.8 miles',
        isEmergency: false,
        isAvailable: false,
        phone: '(555) 987-6543',
        address: '789 Grooming Blvd, Petville',
      }
    ];
    setStorageItem(STORAGE_KEYS.VET_PROVIDERS, demoVets);
  }

  if (!getStorageItem(STORAGE_KEYS.EVENTS)) {
    const demoEvents: Event[] = [
      {
        id: '1',
        title: 'Dog Park Meetup',
        description: 'Join us for a fun playdate at Central Dog Park! Perfect for socializing your furry friends.',
        date: '2024-09-20',
        time: '10:00 AM',
        location: 'Central Dog Park',
        hostId: 'demo-user',
        attendees: ['demo-user'],
        maxCapacity: 20,
      },
      {
        id: '2',
        title: 'Pet Training Workshop',
        description: 'Learn basic training techniques from certified trainers. All skill levels welcome!',
        date: '2024-09-22',
        time: '2:00 PM',
        location: 'Community Center',
        hostId: 'demo-user',
        attendees: [],
        maxCapacity: 15,
      },
    ];
    setStorageItem(STORAGE_KEYS.EVENTS, demoEvents);
  }
};