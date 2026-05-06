
export type Category = 'Canned Goods' | 'Snacks & Drinks' | 'Household' | 'Personal Care' | 'Rice & Grains' | 'Bundles';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  stock: number;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Mega Sardines in Tomato Sauce',
    description: '155g - Classic Filipino favorite for quick meals.',
    price: 24.50,
    category: 'Canned Goods',
    image: 'https://images.unsplash.com/photo-1622467827417-6409b699392e?q=80&w=400&h=400&auto=format&fit=crop',
    stock: 50,
    featured: true
  },
  {
    id: '2',
    name: 'Piattos Cheese',
    description: '85g - Crunchy hexagonal potato chips.',
    price: 36.00,
    category: 'Snacks & Drinks',
    image: 'https://images.unsplash.com/photo-1621447509323-570a14a4f8fc?q=80&w=400&h=400&auto=format&fit=crop',
    stock: 20
  },
  {
    id: '3',
    name: 'Surf Powder with Fabcon',
    description: '1.1kg - Cherry Blossom scent for fresh laundry.',
    price: 145.00,
    category: 'Household',
    image: 'https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=400&h=400&auto=format&fit=crop',
    stock: 12,
    featured: true
  },
  {
    id: '4',
    name: 'Sunsilk Strong & Long',
    description: '180ml - Shampoo for healthy long hair.',
    price: 115.00,
    category: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=400&h=400&auto=format&fit=crop',
    stock: 15
  },
  {
    id: '5',
    name: 'Sinandomeng Rice',
    description: 'Per kg - Premium quality white rice.',
    price: 54.00,
    category: 'Rice & Grains',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&h=400&auto=format&fit=crop',
    stock: 100,
    featured: true
  },
  {
    id: '6',
    name: 'Breakfast Bundle',
    description: '1x Coffee (200g), 1x Sugar (500g), 1x Loaf Bread.',
    price: 285.00,
    category: 'Bundles',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&h=400&auto=format&fit=crop',
    stock: 5,
    featured: true
  },
  {
    id: '7',
    name: 'Kopiko Black',
    description: '10 Sachets - Strong coffee for early mornings.',
    price: 85.00,
    category: 'Snacks & Drinks',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&h=400&auto=format&fit=crop',
    stock: 40
  },
  {
    id: '8',
    name: 'Safeguard White',
    description: '130g - Traditional germ protection soap.',
    price: 45.00,
    category: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=400&h=400&auto=format&fit=crop',
    stock: 25
  }
];
