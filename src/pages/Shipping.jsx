import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Clock, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SlideOutCart from '@/components/SlideOutCart';

export default function Shipping() {
  return (
    <div className="min-h-screen bg-honey-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-espresso-400 hover:text-honey-500 transition-colors mb-10">
          <ArrowLeft size={18} /> <span className="text-sm">Back Home</span>
        </Link>
        <h1 className="font-heading text-4xl text-espresso mb-8">Shipping Information</h1>

        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 border border-honey-100 flex gap-5">
            <div className="w-12 h-12 rounded-2xl bg-honey-100 flex items-center justify-center flex-shrink-0">
              <Truck size={22} className="text-honey-600" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-espresso mb-2">Free Shipping</h3>
              <p className="text-espresso-500">All orders over $65 qualify for free standard shipping anywhere in the continental US.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-honey-100 flex gap-5">
            <div className="w-12 h-12 rounded-2xl bg-honey-100 flex items-center justify-center flex-shrink-0">
              <Clock size={22} className="text-honey-600" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-espresso mb-2">Delivery Times</h3>
              <p className="text-espresso-500">Standard shipping: 3–5 business days. We ship Monday through Friday to ensure your cookies arrive fresh.</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-honey-100 flex gap-5">
            <div className="w-12 h-12 rounded-2xl bg-honey-100 flex items-center justify-center flex-shrink-0">
              <Package size={22} className="text-honey-600" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-espresso mb-2">Packaging</h3>
              <p className="text-espresso-500">Every order is packed with care in eco-friendly, insulated packaging to keep your cookies fresh and intact during transit.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <SlideOutCart />
    </div>
  );
}