import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SlideOutCart from '@/components/SlideOutCart';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-honey-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-espresso-400 hover:text-honey-500 transition-colors mb-10">
          <ArrowLeft size={18} /> <span className="text-sm">Back Home</span>
        </Link>
        <h1 className="font-heading text-4xl text-espresso mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-espresso-500 space-y-6">
          <p>Honeys Baking Company respects your privacy. We collect only the information necessary to process your orders and improve your experience.</p>
          <h3 className="font-heading text-espresso text-xl">Information We Collect</h3>
          <p>When you place an order, we collect your name, email address, and shipping address. We do not store payment information on our servers.</p>
          <h3 className="font-heading text-espresso text-xl">How We Use Your Information</h3>
          <p>Your information is used solely to fulfill orders, send shipping updates, and improve our products. We never sell or share your personal data with third parties.</p>
          <h3 className="font-heading text-espresso text-xl">Contact</h3>
          <p>For privacy-related questions, email us at hello@honeysbaking.com.</p>
        </div>
      </div>
      <Footer />
      <SlideOutCart />
    </div>
  );
}