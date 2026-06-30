import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import StorySection from '@/components/StorySection';
import ScienceSection from '@/components/ScienceSection';
import ReviewsSection from '@/components/ReviewsSection';
import SlideOutCart from '@/components/SlideOutCart';
import Footer from '@/components/Footer';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeGoal, setActiveGoal] = useState(null);

  useEffect(() => {
    base44.entities.Product.list()
      .then(setProducts)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-honey-50">
      <Navbar />
      <HeroSection onGoalSelect={setActiveGoal} activeGoal={activeGoal} />
      
      {loading ? (
        <div className="py-32 flex justify-center">
          <div className="w-8 h-8 border-2 border-honey-200 border-t-honey-500 rounded-full animate-spin" />
        </div>
      ) : (
        <ProductGrid products={products} activeGoal={activeGoal} />
      )}

      <StorySection />
      <ScienceSection />
      <ReviewsSection />
      <Footer />
      <SlideOutCart />
    </div>
  );
}