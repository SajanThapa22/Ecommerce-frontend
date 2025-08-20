import {
  amazonSpeakers,
  bookshelf,
  camera,
  chair,
  cpuCooler,
  curology,
  dogFood,
  footballShoes,
  gameConsole,
  gamepad,
  gucciPerfume,
  handbag,
  keyboard,
  laptop,
  monitor,
  playStation5,
  quiltedJacket,
  redJacket,
  toyCar,
  womanWearingHat,
} from "@/assets/images";
import { StaticImageData } from "next/image";

export interface Product {
  image: StaticImageData;
  name: string;
  originalPrice: number;
  priceAfterDiscount?: number;
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

export const bestSellingProducts: Product[] = [
  {
    image: redJacket,
    name: "The north jacket",
    originalPrice: 360,
    priceAfterDiscount: 260,
    rating: 5,
    reviews: 65,
  },
  {
    image: handbag,
    name: "Gucci duffle bag",
    originalPrice: 1160,
    priceAfterDiscount: 960,
    rating: 4.5,
    reviews: 54,
  },
  {
    image: cpuCooler,
    name: "RGB liquid CPU Cooler",
    originalPrice: 170,
    priceAfterDiscount: 160,
    rating: 5,
    reviews: 81,
  },
  {
    image: bookshelf,
    name: "Small Bookshelf",
    originalPrice: 270,
    rating: 5,
    reviews: 96,
  },
];

export const exploreOurProducts = [
  {
    image: dogFood,
    name: "Dry dog food",
    originalPrice: 100,
    rating: 3,
    reviews: 35,
  },
  {
    image: camera,
    name: "Canon DSLR camera",
    originalPrice: 360,
    rating: 4,
    reviews: 95,
  },
  {
    image: laptop,
    name: "Asus Gaming laptop",
    originalPrice: 700,
    rating: 5,
    reviews: 325,
  },
  {
    image: curology,
    name: "Curology product set",
    originalPrice: 500,
    rating: 4,
    reviews: 145,
  },
  {
    image: toyCar,
    name: "Remote Control Car",
    originalPrice: 960,
    rating: 5,
    reviews: 65,
  },
  {
    image: footballShoes,
    name: "Soccer Cleats",
    originalPrice: 99,
    rating: 4.7,
    reviews: 35,
  },
  {
    image: gamepad,
    name: "USB Gamepad",
    originalPrice: 660,
    rating: 4.7,
    reviews: 55,
  },
  {
    image: quiltedJacket,
    name: "Quilted Jacket",
    originalPrice: 253,
    rating: 4.9,
    reviews: 59,
  },
];

export const newArrival = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: playStation5,
  },
  {
    id: 2,
    title: "Woman's collection",
    description: "Featured woman collections that give you another vibe.",
    image: womanWearingHat,
  },
  {
    id: 3,
    title: "Speakers",
    description: "Amazon wireless speakers",
    image: amazonSpeakers,
    gradient: true,
  },
  {
    id: 4,
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: gucciPerfume,
    gradient: true,
  },
];
