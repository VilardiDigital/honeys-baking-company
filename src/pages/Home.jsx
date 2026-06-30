import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import StorySection from '@/components/StorySection';
import ScienceSection from '@/components/ScienceSection';
import ReviewsSection from '@/components/ReviewsSection';
import SlideOutCart from '@/components/SlideOutCart';
import Footer from '@/components/Footer';

const products = [
  {
    id: 1,
    name: "Oatmeal Chocolate Chip",
    description: "Our signature blend — rich, comforting, effective",
    price: 24.99,
    subscription_price: 21.24,
    image: "/images/oatmeal-chocolate-chip.jpg"
  },
  {
    id: 2,
    name: "Peanut Butter Oat",
    description: "Creamy, protein-rich, and deeply satisfying",
    price: 24.99,
    subscription_price: 21.24,
    image: "/images/peanut-butter-oat.jpg"
  },
  {
    id: 3,
    name: "Double Chocolate Fudge",
    description: "Decadent indulgence meets functional nutrition",
    price: 26.99,
    subscription_price: 22.94,
    image: "/images/double-chocolate-fudge.jpg"
  },
  {
    id: 4,
    name: "Lemon Coconut Bliss",
    description: "Bright, tropical, and refreshingly light",
    price: 24.99,
    subscription_price: 21.24,
    image: "/images/lemon-coconut-bliss.jpg"
  }
];

export default function Home() {
  const [activeGoal, setActiveGoal] = useState(null);

  return (
    <div className="min-h-screen bg-honey-50">
      <Navbar />
      <HeroSection onGoalSelect={setActiveGoal} activeGoal={activeGoal} />
      <ProductGrid products={products} activeGoal={activeGoal} />
      <StorySection />
      <ScienceSection />
      <ReviewsSection />
      <Footer />
      <SlideOutCart />
    </div>
  );
}
