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
    id: "oatmeal-chocolate-chip",
    slug: "oatmeal-chocolate-chip",
    name: "Oatmeal Chocolate Chip",
    tagline: "Our signature blend — rich, comforting, effective",
    price: 24.99,
    subscription_price: 21.24,
    image_url: "/images/oatmeal-chocolate-chip.jpg",
    category: "boost",
    galactagogues: "Brewer's Yeast, Flaxseed, Oats, Wheat Germ"
  },
  {
    id: "peanut-butter-oat",
    slug: "peanut-butter-oat",
    name: "Peanut Butter Oat",
    tagline: "Creamy, protein-rich, and deeply satisfying",
    price: 24.99,
    subscription_price: 21.24,
    image_url: "/images/peanut-butter-oat.jpg",
    category: "maintain",
    galactagogues: "Brewer's Yeast, Flaxseed, Oats, Fenugreek"
  },
  {
    id: "double-chocolate-fudge",
    slug: "double-chocolate-fudge",
    name: "Double Chocolate Fudge",
    tagline: "Decadent indulgence meets functional nutrition",
    price: 26.99,
    subscription_price: 22.94,
    image_url: "/images/double-chocolate-fudge.jpg",
    category: "boost",
    galactagogues: "Brewer's Yeast, Flaxseed, Oats, Coconut Oil"
  },
  {
    id: "lemon-coconut-bliss",
    slug: "lemon-coconut-bliss",
    name: "Lemon Coconut Bliss",
    tagline: "Bright, tropical, and refreshingly light",
    price: 24.99,
    subscription_price: 21.24,
    image_url: "/images/lemon-coconut-bliss.jpg",
    category: "recover",
    galactagogues: "Brewer's Yeast, Flaxseed, Oats, Fenugreek, Coconut Oil"
  }
];

export default function Home() {
  const [activeGoal, setActiveGoal] = useState(null);

  return (
    <div className="min-h-screen bg-honey-50">
      <Navbar />
      <HeroSection
        onGoalSelect={setActiveGoal}
        activeGoal={activeGoal}
      />

      <ProductGrid
        products={products}
        activeGoal={activeGoal}
      />

      <StorySection />
      <ScienceSection />
      <ReviewsSection />
      <Footer />
      <SlideOutCart />
    </div>
  );
}
