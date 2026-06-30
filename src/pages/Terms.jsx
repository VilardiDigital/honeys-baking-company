import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SlideOutCart from '@/components/SlideOutCart';

export default function Terms() {
  return (
    <div className="min-h-screen bg-honey-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-espresso-400 hover:text-honey-500 transition-colors mb-10">
          <ArrowLeft size={18} /> <span className="text-sm">Back Home</span>
        </Link>
        <h1 className="font-heading text-4xl text-espresso mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-espresso-500 space-y-6">
          <p>By using the Honeys Baking Company website and purchasing our products, you agree to the following terms.</p>
          <h3 className="font-heading text-espresso text-xl">Products</h3>
          <p>Our lactation cookies are food products made with natural ingredients. They are not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.</p>
          <h3 className="font-heading text-espresso text-xl">Orders & Shipping</h3>
          <p>Orders are processed within 1–2 business days. Free shipping applies to orders over $65. Standard shipping is $5.95.</p>
          <h3 className="font-heading text-espresso text-xl">Returns & Refunds</h3>
          <p>We offer a 30-day satisfaction guarantee. Contact us at hello@honeysbaking.com for refund requests.</p>
          <h3 className="font-heading text-espresso text-xl">Subscriptions</h3>
          <p>Monthly subscriptions can be paused, skipped, or canceled at any time. There are no long-term commitments.</p>
        </div>
      </div>
      <Footer />
      <SlideOutCart />
    </div>
  );
}