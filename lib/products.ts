import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description: "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 199.99,
    image: "/wireless-bluetooth-headphones.jpg",
    category: "Electronics",
    inStock: true,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking with heart rate monitor, GPS, and waterproof design.",
    price: 299.99,
    image: "/smart-fitness-watch.png",
    category: "Electronics",
    inStock: true,
    rating: 4.7,
    reviews: 89,
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    price: 29.99,
    image: "/organic-cotton-t-shirt.jpg",
    category: "Clothing",
    inStock: true,
    rating: 4.3,
    reviews: 256,
  },
  {
    id: "4",
    name: "Stainless Steel Water Bottle",
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours.",
    price: 39.99,
    image: "/stainless-steel-bottle.png",
    category: "Lifestyle",
    inStock: true,
    rating: 4.6,
    reviews: 174,
  },
  {
    id: "5",
    name: "Leather Laptop Bag",
    description: "Professional leather laptop bag with multiple compartments and adjustable strap.",
    price: 149.99,
    image: "/leather-laptop-bag.jpg",
    category: "Accessories",
    inStock: false,
    rating: 4.4,
    reviews: 67,
  },
  {
    id: "6",
    name: "Portable Phone Charger",
    description: "High-capacity portable charger with fast charging and multiple USB ports.",
    price: 49.99,
    image: "/portable-phone-charger.jpg",
    category: "Electronics",
    inStock: true,
    rating: 4.2,
    reviews: 203,
  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id)
}

export const getRelatedProducts = (productId: string, category: string, limit = 4): Product[] => {
  return products.filter((product) => product.id !== productId && product.category === category).slice(0, limit)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category)
}
