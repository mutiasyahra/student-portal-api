export type Destination = {
  id: string;
  title: string;
  location: string;
  days?: string;
  price: number;
  image: any;
  rating?: number;
  category: 'mountain' | 'sea' | 'camp' | 'city';
};

export const categories = [
  {
    id: 'c1',
    key: 'mountain',
    title: 'Mountain',
    icon: require('../assets/icons/ic_search.png'),
  },
  {
    id: 'c2',
    key: 'sea',
    title: 'Sea',
    icon: require('../assets/icons/ic_search.png'),
  },
  {
    id: 'c3',
    key: 'camp',
    title: 'Camp',
    icon: require('../assets/icons/ic_search.png'),
  },
  {
    id: 'c4',
    key: 'city',
    title: 'City',
    icon: require('../assets/icons/ic_search.png'),
  },
];

export const recommendations: Destination[] = [
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

export const popular: Destination[] = [
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
