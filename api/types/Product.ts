import {
  chair,
  gameConsole,
  keyboard,
  laptop,
  monitor,
} from "@/public/assets/images";
import { StaticImageData } from "next/image";

export interface Product {
  image: StaticImageData;
  name: string;
  originalPrice: number;
  priceAfterDiscount: number;
  rating: number;
  reviews: number;
  percentOff?: number;
}

export const products: Product[] = [
  {
    image: gameConsole,
    name: "Game Console",
    originalPrice: 500,
    priceAfterDiscount: 450,
    rating: 5,
    reviews: 320,
    percentOff: 10,
  },
  {
    image: monitor,
    name: "Ultra HD Monitor",
    originalPrice: 300,
    priceAfterDiscount: 240,
    rating: 4,
    reviews: 210,
    percentOff: 20,
  },
  {
    image: keyboard,
    name: "Mechanical Keyboard",
    originalPrice: 120,
    priceAfterDiscount: 90,
    rating: 3.6,
    reviews: 150,
    percentOff: 25,
  },
  {
    image: chair,
    name: "Ergonomic Chair",
    originalPrice: 200,
    priceAfterDiscount: 160,
    rating: 4.3,
    reviews: 95,
    percentOff: 20,
  },
  {
    image: laptop,
    name: "Gaming Laptop",
    originalPrice: 1200,
    priceAfterDiscount: 999,
    rating: 2.8,
    reviews: 400,
    percentOff: 17,
  },
  {
    image: gameConsole,
    name: "Game Console",
    originalPrice: 500,
    priceAfterDiscount: 450,
    rating: 5,
    reviews: 320,
    percentOff: 10,
  },
  {
    image: monitor,
    name: "Ultra HD Monitor",
    originalPrice: 300,
    priceAfterDiscount: 240,
    rating: 4,
    reviews: 210,
    percentOff: 20,
  },
  {
    image: keyboard,
    name: "Mechanical Keyboard",
    originalPrice: 120,
    priceAfterDiscount: 90,
    rating: 3.6,
    reviews: 150,
    percentOff: 25,
  },
  {
    image: chair,
    name: "Ergonomic Chair",
    originalPrice: 200,
    priceAfterDiscount: 160,
    rating: 4.3,
    reviews: 95,
    percentOff: 20,
  },
];
