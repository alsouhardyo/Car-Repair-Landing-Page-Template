interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  discountPercentage?: number;
  discountedPrice?: number;
}

export const products: Product[] = [
  {
    id: 1,
    image: "/oil-change-service.png",
    title: "Oil Change Service",
    price: 45,
    discountPercentage: 20,
    discountedPrice: 36
  },
  {
    id: 2,
    image: "/brake-repair.png",
    title: "Brake Repair",
    price: 180
  },
  {
    id: 3,
    image: "/tire-replacement.png",
    title: "Tire Replacement",
    price: 120,
    discountPercentage: 15,
    discountedPrice: 102
  },
  {
    id: 4,
    image: "/engine-diagnostic.png",
    title: "Engine Diagnostic",
    price: 95
  },
  {
    id: 5,
    image: "/transmission-service.png",
    title: "Transmission Service",
    price: 250,
    discountPercentage: 10,
    discountedPrice: 225
  },
  {
    id: 6,
    image: "/ac-repair.png",
    title: "AC Repair",
    price: 150
  },
  {
    id: 7,
    image: "/battery-replacement.png",
    title: "Battery Replacement",
    price: 85
  },
  {
    id: 8,
    image: "/wheel-alignment.png",
    title: "Wheel Alignment",
    price: 75
  }
];