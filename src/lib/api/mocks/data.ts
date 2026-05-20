import type { Category, Product } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'c1', slug: 'fruits-veg', name: 'Fruits & Vegetables', emoji: '🥬', productCount: 10,
    subcategories: [
      { id: 's11', slug: 'fresh-vegetables', name: 'Fresh Vegetables', emoji: '🥦' },
      { id: 's12', slug: 'fresh-fruits', name: 'Fresh Fruits', emoji: '🍎' },
      { id: 's13', slug: 'herbs-seasonings', name: 'Herbs & Seasonings', emoji: '🌿' }
    ]
  },
  {
    id: 'c2', slug: 'dairy-bread', name: 'Dairy & Bread', emoji: '🥛', productCount: 8,
    subcategories: [
      { id: 's21', slug: 'milk', name: 'Milk', emoji: '🥛' },
      { id: 's22', slug: 'bread-bakery', name: 'Bread & Bakery', emoji: '🍞' },
      { id: 's23', slug: 'eggs-meat', name: 'Eggs & Meat', emoji: '🥚' },
      { id: 's24', slug: 'butter-cheese', name: 'Butter & Cheese', emoji: '🧈' }
    ]
  },
  {
    id: 'c3', slug: 'snacks', name: 'Snacks & Munchies', emoji: '🍿', productCount: 8,
    subcategories: [
      { id: 's31', slug: 'chips-crisps', name: 'Chips & Crisps', emoji: '🍟' },
      { id: 's32', slug: 'chocolates', name: 'Chocolates', emoji: '🍫' },
      { id: 's33', slug: 'biscuits-cookies', name: 'Biscuits & Cookies', emoji: '🍪' },
      { id: 's34', slug: 'nuts-dry-fruits', name: 'Nuts & Dry Fruits', emoji: '🥜' }
    ]
  },
  {
    id: 'c4', slug: 'beverages', name: 'Cold Drinks & Juices', emoji: '🥤', productCount: 8,
    subcategories: [
      { id: 's41', slug: 'soft-drinks', name: 'Soft Drinks', emoji: '🥤' },
      { id: 's42', slug: 'juices', name: 'Juices', emoji: '🧃' },
      { id: 's43', slug: 'water', name: 'Water', emoji: '💧' },
      { id: 's44', slug: 'beer-cider', name: 'Beer & Cider', emoji: '🍺' }
    ]
  },
  {
    id: 'c5', slug: 'household', name: 'Cleaning Essentials', emoji: '🧹', productCount: 6,
    subcategories: [
      { id: 's51', slug: 'laundry', name: 'Laundry', emoji: '🧺' },
      { id: 's52', slug: 'dishwash', name: 'Dishwash', emoji: '🧴' },
      { id: 's53', slug: 'surface-cleaners', name: 'Surface Cleaners', emoji: '🪣' }
    ]
  },
  {
    id: 'c6', slug: 'pantry', name: 'Pantry Staples', emoji: '🌾', productCount: 6,
    subcategories: [
      { id: 's61', slug: 'mealie-meal-grains', name: 'Mealie Meal & Grains', emoji: '🌽' },
      { id: 's62', slug: 'rice', name: 'Rice', emoji: '🍚' },
      { id: 's63', slug: 'cooking-oil', name: 'Cooking Oil', emoji: '🛢️' },
      { id: 's64', slug: 'sugar-spices', name: 'Sugar & Spices', emoji: '🍯' }
    ]
  }
];

export const PRODUCTS: Product[] = [
  // Fruits & Veg
  { id: 'p1', name: 'Fresh Tomatoes', weight: '500 g', price: 12, mrp: 15, emoji: '🍅', categorySlug: 'fruits-veg', subcategorySlug: 'fresh-vegetables', deliveryMins: 8, inStock: true },
  { id: 'p2', name: 'Cavendish Bananas', weight: '1 kg', price: 18, mrp: 22, emoji: '🍌', categorySlug: 'fruits-veg', subcategorySlug: 'fresh-fruits', deliveryMins: 9, inStock: true },
  { id: 'p3', name: 'Red Apples (Imported)', weight: '500 g', price: 35, mrp: 45, emoji: '🍎', categorySlug: 'fruits-veg', subcategorySlug: 'fresh-fruits', deliveryMins: 10, inStock: true },
  { id: 'p4', name: 'White Onions', weight: '1 kg', price: 22, mrp: 28, emoji: '🧅', categorySlug: 'fruits-veg', subcategorySlug: 'fresh-vegetables', deliveryMins: 8, inStock: true },
  { id: 'p5', name: 'Green Capsicum', weight: '250 g', price: 14, mrp: 18, emoji: '🫑', categorySlug: 'fruits-veg', subcategorySlug: 'fresh-vegetables', deliveryMins: 8, inStock: true },
  { id: 'p6', name: 'Local Cabbage', weight: '1 head', price: 10, mrp: 13, emoji: '🥬', categorySlug: 'fruits-veg', subcategorySlug: 'fresh-vegetables', deliveryMins: 9, inStock: true },
  { id: 'p27', name: 'Sweet Mangoes', weight: '1 kg', price: 32, mrp: 40, emoji: '🥭', categorySlug: 'fruits-veg', subcategorySlug: 'fresh-fruits', deliveryMins: 9, inStock: true },
  { id: 'p28', name: 'Watermelon', weight: '1 piece', price: 28, mrp: 35, emoji: '🍉', categorySlug: 'fruits-veg', subcategorySlug: 'fresh-fruits', deliveryMins: 10, inStock: true },
  { id: 'p29', name: 'Fresh Coriander', weight: '100 g', price: 6, mrp: 8, emoji: '🌿', categorySlug: 'fruits-veg', subcategorySlug: 'herbs-seasonings', deliveryMins: 8, inStock: true },
  { id: 'p30', name: 'Chilli Peppers', weight: '100 g', price: 8, mrp: 10, emoji: '🌶️', categorySlug: 'fruits-veg', subcategorySlug: 'herbs-seasonings', deliveryMins: 8, inStock: true },

  // Dairy & Bread
  { id: 'p7', name: 'Parmalat Fresh Milk', weight: '1 L', price: 26, mrp: 30, emoji: '🥛', categorySlug: 'dairy-bread', subcategorySlug: 'milk', deliveryMins: 7, inStock: true },
  { id: 'p8', name: 'Mukwa Brown Bread', weight: '700 g', price: 18, mrp: 20, emoji: '🍞', categorySlug: 'dairy-bread', subcategorySlug: 'bread-bakery', deliveryMins: 8, inStock: true },
  { id: 'p9', name: 'Local Farm Eggs', weight: 'Tray of 30', price: 95, mrp: 110, emoji: '🥚', categorySlug: 'dairy-bread', subcategorySlug: 'eggs-meat', deliveryMins: 10, inStock: true },
  { id: 'p10', name: 'Salted Butter', weight: '250 g', price: 48, mrp: 55, emoji: '🧈', categorySlug: 'dairy-bread', subcategorySlug: 'butter-cheese', deliveryMins: 9, inStock: true },
  { id: 'p31', name: 'Long Life UHT Milk', weight: '1 L', price: 28, mrp: 32, emoji: '🥛', categorySlug: 'dairy-bread', subcategorySlug: 'milk', deliveryMins: 7, inStock: true },
  { id: 'p32', name: 'White Sandwich Loaf', weight: '600 g', price: 16, mrp: 18, emoji: '🍞', categorySlug: 'dairy-bread', subcategorySlug: 'bread-bakery', deliveryMins: 8, inStock: true },
  { id: 'p33', name: 'Chicken Drumsticks', weight: '500 g', price: 65, mrp: 75, emoji: '🍗', categorySlug: 'dairy-bread', subcategorySlug: 'eggs-meat', deliveryMins: 10, inStock: true },
  { id: 'p34', name: 'Cheddar Cheese Block', weight: '250 g', price: 78, mrp: 90, emoji: '🧀', categorySlug: 'dairy-bread', subcategorySlug: 'butter-cheese', deliveryMins: 9, inStock: true },

  // Snacks
  { id: 'p11', name: 'Simba Crisps - Salted', weight: '120 g', price: 16, mrp: 18, emoji: '🍟', categorySlug: 'snacks', subcategorySlug: 'chips-crisps', deliveryMins: 8, inStock: true },
  { id: 'p12', name: 'Cadbury Dairy Milk', weight: '80 g', price: 32, mrp: 38, emoji: '🍫', categorySlug: 'snacks', subcategorySlug: 'chocolates', deliveryMins: 9, inStock: true },
  { id: 'p13', name: 'Manji Marie Biscuits', weight: '200 g', price: 14, mrp: 17, emoji: '🍪', categorySlug: 'snacks', subcategorySlug: 'biscuits-cookies', deliveryMins: 7, inStock: true },
  { id: 'p14', name: 'Peanuts - Roasted', weight: '500 g', price: 28, mrp: 35, emoji: '🥜', categorySlug: 'snacks', subcategorySlug: 'nuts-dry-fruits', deliveryMins: 8, inStock: true },
  { id: 'p35', name: 'Simba Cheese Crisps', weight: '120 g', price: 16, mrp: 18, emoji: '🥨', categorySlug: 'snacks', subcategorySlug: 'chips-crisps', deliveryMins: 8, inStock: true },
  { id: 'p36', name: 'KitKat Wafer Bar', weight: '45 g', price: 22, mrp: 25, emoji: '🍫', categorySlug: 'snacks', subcategorySlug: 'chocolates', deliveryMins: 9, inStock: true },
  { id: 'p37', name: 'Oreo Cookies', weight: '160 g', price: 28, mrp: 32, emoji: '🍪', categorySlug: 'snacks', subcategorySlug: 'biscuits-cookies', deliveryMins: 8, inStock: true },
  { id: 'p38', name: 'Cashew Nuts', weight: '200 g', price: 48, mrp: 55, emoji: '🌰', categorySlug: 'snacks', subcategorySlug: 'nuts-dry-fruits', deliveryMins: 9, inStock: true },

  // Beverages
  { id: 'p15', name: 'Coca-Cola Bottle', weight: '500 ml', price: 12, mrp: 15, emoji: '🥤', categorySlug: 'beverages', subcategorySlug: 'soft-drinks', deliveryMins: 8, inStock: true },
  { id: 'p16', name: 'Mazoe Orange Crush', weight: '2 L', price: 78, mrp: 90, emoji: '🧃', categorySlug: 'beverages', subcategorySlug: 'juices', deliveryMins: 9, inStock: true },
  { id: 'p17', name: 'Manzi Valley Water', weight: '5 L', price: 22, mrp: 25, emoji: '💧', categorySlug: 'beverages', subcategorySlug: 'water', deliveryMins: 7, inStock: true },
  { id: 'p18', name: 'Mosi Lager Pack', weight: '6 x 330ml', price: 95, mrp: 110, emoji: '🍺', categorySlug: 'beverages', subcategorySlug: 'beer-cider', deliveryMins: 10, inStock: true },
  { id: 'p39', name: 'Sprite Bottle', weight: '500 ml', price: 12, mrp: 15, emoji: '🥤', categorySlug: 'beverages', subcategorySlug: 'soft-drinks', deliveryMins: 8, inStock: true },
  { id: 'p40', name: 'Ceres Apple Juice', weight: '1 L', price: 42, mrp: 48, emoji: '🧃', categorySlug: 'beverages', subcategorySlug: 'juices', deliveryMins: 9, inStock: true },
  { id: 'p41', name: 'Manzi Valley Water', weight: '500 ml', price: 6, mrp: 8, emoji: '💧', categorySlug: 'beverages', subcategorySlug: 'water', deliveryMins: 7, inStock: true },
  { id: 'p42', name: 'Castle Lite', weight: '6 x 330ml', price: 105, mrp: 120, emoji: '🍺', categorySlug: 'beverages', subcategorySlug: 'beer-cider', deliveryMins: 10, inStock: true },

  // Household
  { id: 'p19', name: 'Sunlight Washing Powder', weight: '2 kg', price: 92, mrp: 110, emoji: '🧺', categorySlug: 'household', subcategorySlug: 'laundry', deliveryMins: 10, inStock: true },
  { id: 'p20', name: 'Boom Dishwash Liquid', weight: '750 ml', price: 38, mrp: 45, emoji: '🧴', categorySlug: 'household', subcategorySlug: 'dishwash', deliveryMins: 9, inStock: true },
  { id: 'p21', name: 'Harpic Toilet Cleaner', weight: '750 ml', price: 56, mrp: 65, emoji: '🧽', categorySlug: 'household', subcategorySlug: 'surface-cleaners', deliveryMins: 10, inStock: true },
  { id: 'p22', name: 'Surface Cleaner Spray', weight: '500 ml', price: 42, mrp: 50, emoji: '🪣', categorySlug: 'household', subcategorySlug: 'surface-cleaners', deliveryMins: 9, inStock: true },
  { id: 'p43', name: 'Omo Auto Washing', weight: '3 kg', price: 145, mrp: 170, emoji: '🧺', categorySlug: 'household', subcategorySlug: 'laundry', deliveryMins: 10, inStock: true },
  { id: 'p44', name: 'Sunlight Dish Bar', weight: '125 g', price: 8, mrp: 10, emoji: '🧼', categorySlug: 'household', subcategorySlug: 'dishwash', deliveryMins: 9, inStock: true },

  // Pantry
  { id: 'p23', name: 'Mealie Meal - Roller', weight: '25 kg', price: 280, mrp: 320, emoji: '🌽', categorySlug: 'pantry', subcategorySlug: 'mealie-meal-grains', deliveryMins: 12, inStock: true },
  { id: 'p24', name: 'White Rice', weight: '5 kg', price: 175, mrp: 200, emoji: '🍚', categorySlug: 'pantry', subcategorySlug: 'rice', deliveryMins: 10, inStock: true },
  { id: 'p25', name: 'Cooking Oil', weight: '2 L', price: 110, mrp: 130, emoji: '🛢️', categorySlug: 'pantry', subcategorySlug: 'cooking-oil', deliveryMins: 10, inStock: true },
  { id: 'p26', name: 'Brown Sugar', weight: '1 kg', price: 28, mrp: 32, emoji: '🍯', categorySlug: 'pantry', subcategorySlug: 'sugar-spices', deliveryMins: 9, inStock: true },
  { id: 'p45', name: 'Mealie Meal - Breakfast', weight: '10 kg', price: 145, mrp: 165, emoji: '🌽', categorySlug: 'pantry', subcategorySlug: 'mealie-meal-grains', deliveryMins: 12, inStock: true },
  { id: 'p46', name: 'Basmati Rice', weight: '2 kg', price: 95, mrp: 110, emoji: '🍚', categorySlug: 'pantry', subcategorySlug: 'rice', deliveryMins: 10, inStock: true }
];
