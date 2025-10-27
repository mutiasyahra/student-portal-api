import { ImageSourcePropType } from 'react-native';

export type Destination = {
  id: string;
  title: string;
  country: string;
  imageUrl: ImageSourcePropType;
  rating: number;
  price: number;
  description?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
};

export const destinations: Destination[] = [
  {
    id: '1',
    title: 'Labuan Bajo',
    country: 'Indonesia',
    imageUrl: require('../assets/images/dest1.jpg'),
    rating: 4.8,
    price: 4000,
    description:
      'From classical music and worship to breathtaking cruises, Labuan Bajo is a gateway to Komodo National Park. Experience stunning sunsets, pristine beaches, and incredible marine life.',
    coordinates: {
      lat: -8.4967,
      lng: 119.8886,
    },
  },
  {
    id: '2',
    title: 'Ubud Bali',
    country: 'Indonesia',
    imageUrl: require('../assets/images/dest2.jpeg'),
    rating: 4.9,
    price: 2500,
    description:
      'Ubud is the cultural heart of Bali, surrounded by lush rice terraces, ancient temples, and vibrant art markets. Perfect for those seeking tranquility and spiritual awakening.',
    coordinates: {
      lat: -8.5069,
      lng: 115.2625,
    },
  },
  {
    id: '3',
    title: 'Mount Bromo',
    country: 'Indonesia',
    imageUrl: require('../assets/images/dest3.jpeg'),
    rating: 4.7,
    price: 1800,
    description:
      'Mount Bromo is an active volcano and one of the most iconic landscapes in Indonesia. Witness spectacular sunrise views and explore the sea of sand surrounding this majestic peak.',
    coordinates: {
      lat: -7.9425,
      lng: 112.953,
    },
  },
  {
    id: '4',
    title: 'Raja Ampat',
    country: 'Indonesia',
    imageUrl: require('../assets/images/dest1.jpg'),
    rating: 5.0,
    price: 5500,
    description:
      "Raja Ampat offers the world's most biodiverse marine environment. Crystal clear waters, vibrant coral reefs, and countless islands make it a paradise for divers and nature lovers.",
    coordinates: {
      lat: -0.2384,
      lng: 130.5183,
    },
  },
];

// Keep old data structure for backward compatibility
export type OldDestination = {
  id: string;
  title: string;
  location: string;
  days?: string;
  price: number;
  image: any;
  rating?: number;
  category: 'mountain' | 'sea' | 'camp' | 'city';
};

// Categories - removed icon requirement since file doesn't exist
export const categories = [
  {
    id: 'c1',
    key: 'mountain',
    title: 'Mountain',
  },
  {
    id: 'c2',
    key: 'sea',
    title: 'Sea',
  },
  {
    id: 'c3',
    key: 'camp',
    title: 'Camp',
  },
  {
    id: 'c4',
    key: 'city',
    title: 'City',
  },
];

export const recommendations: OldDestination[] = [
  {
    id: 'r1',
    title: 'Labuan Bajo',
    location: 'Nusa Tenggara Timur',
    days: '4D3N',
    price: 120,
    image: require('../assets/images/dest1.jpg'),
    rating: 4.8,
    category: 'sea',
  },
  {
    id: 'r2',
    title: 'Mount Bromo',
    location: 'East Java',
    days: '2D1N',
    price: 70,
    image: require('../assets/images/dest3.jpeg'),
    rating: 4.6,
    category: 'mountain',
  },
  {
    id: 'r3',
    title: 'Bali Beach',
    location: 'Bali',
    days: '3D2N',
    price: 95,
    image: require('../assets/images/dest2.jpeg'),
    rating: 4.7,
    category: 'sea',
  },
];

export const popular: OldDestination[] = [
  {
    id: 'p1',
    title: 'Pink Beach',
    location: 'Komodo',
    price: 150,
    image: require('../assets/images/dest1.jpg'),
    rating: 4.7,
    category: 'sea',
  },
  {
    id: 'p2',
    title: 'Ubud',
    location: 'Bali',
    price: 80,
    image: require('../assets/images/dest2.jpeg'),
    rating: 4.6,
    category: 'city',
  },
  {
    id: 'p3',
    title: 'Ijen',
    location: 'Banyuwangi',
    price: 90,
    image: require('../assets/images/dest3.jpeg'),
    rating: 4.5,
    category: 'mountain',
  },
  {
    id: 'p4',
    title: 'Gili T',
    location: 'Lombok',
    price: 110,
    image: require('../assets/images/dest1.jpg'),
    rating: 4.6,
    category: 'sea',
  },
];
