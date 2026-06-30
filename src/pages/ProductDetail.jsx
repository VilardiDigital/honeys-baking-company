import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Minus, Plus, RefreshCw, ShoppingBag, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SlideOutCart from '@/components/SlideOutCart';
import Footer from '@/components/Footer';
import { useCart } from '@/lib/cartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    async function load() {
      try {
        const products = await base44.entities.Product.list();
        const found = products.find(p => p.slug === slug || p.id === slug);
        setProduct(found || null);
      } catch {
        setProduct(null);
      }
      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-honey-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-honey-200 border-t-honey-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-honey-50">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-heading text-3xl text-espresso mb-4">Product Not Found</h1>
          <Link to="/" className="text-honey-500 hover:text-honey-600 underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const currentPrice = isSubscription ? product.subscription_price : product.price;
  const galactagogues = product.galactagogues ? product.galactagogues.split(',').map(g => g.trim()) : [];
  const ingredients = product.ingredients ? product.ingredients.split(',').map(i => i.trim()) : [];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, isSubscription);
    }
  };

  return (
    <div className="min-h-screen bg-honey-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">
        {/* Breadcrumb */}
        <Link to="/" className="inline-flex items-center gap-2 text-espresso-400 hover:text-honey-500 transition-colors mb-10">
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Sticky Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="rounded-3xl overflow-hidden">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>
          </motion.div>

          {/* Scrolling Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Section 1: Flavor Profile */}
            <div className="mb-12">
              <p className="text-sage-500 uppercase tracking-widest text-sm mb-3">
                {product.category && product.category.charAt(0).toUpperCase() + product.category.slice(1)} Collection
              </p>
              <h1 className="font-heading text-4xl md:text-5xl text-espresso mb-3">
                {product.name}
              </h1>
              <p className="text-espresso-400 text-lg mb-6">{product.tagline}</p>

              {product.flavor_notes && (
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-espresso-300 mb-2">Flavor Notes</p>
                  <p className="text-espresso-500 italic font-heading text-lg">{product.flavor_notes}</p>
                </div>
              )}

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className={i < Math.round(product.rating) ? 'fill-honey-400 text-honey-400' : 'text-honey-200'} />
                    ))}
                  </div>
                  <span className="text-sm text-espresso-400">
                    {product.rating} ({product.review_count} reviews)
                  </span>
                </div>
              )}

              {/* Galactagogue chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {galactagogues.map(g => (
                  <span key={g} className="px-4 py-1.5 rounded-full bg-honey-100 text-honey-700 text-sm flex items-center gap-1.5">
                    <Sparkles size={12} /> {g}
                  </span>
                ))}
              </div>

              <p className="text-espresso-500 leading-relaxed">{product.description}</p>
            </div>

            {/* Thin divider */}
            <div className="h-px bg-honey-200 my-8" />

            {/* Section 2: Baker's Lab Notes */}
            {ingredients.length > 0 && (
              <div className="mb-12">
                <p className="font-heading text-xl text-espresso mb-4">Baker's Lab Notes</p>
                <div className="grid grid-cols-2 gap-3">
                  {ingredients.map(ing => (
                    <div key={ing} className="flex items-center gap-2 text-espresso-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-honey-400 flex-shrink-0" />
                      {ing}
                    </div>
                  ))}
                </div>
                {product.nutrition_facts && (
                  <div className="mt-6 p-5 rounded-2xl bg-honey-100/50 border border-honey-200/50">
                    <p className="text-xs uppercase tracking-widest text-espresso-300 mb-2">
                      Nutritional Highlights
                    </p>
                    <p className="text-espresso-500 text-sm">{product.nutrition_facts}</p>
                  </div>
                )}
              </div>
            )}

            {/* Thin divider */}
            <div className="h-px bg-honey-200 my-8" />

            {/* Section 3: Purchase Widget */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-honey-100">
              {/* Sustain & Save Toggle */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setIsSubscription(false)}
                  className={`flex-1 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    !isSubscription
                      ? 'bg-espresso text-white'
                      : 'bg-honey-50 text-espresso-400 hover:bg-honey-100'
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setIsSubscription(true)}
                  className={`flex-1 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubscription
                      ? 'bg-honey-500 text-white'
                      : 'bg-honey-50 text-espresso-400 hover:bg-honey-100'
                  }`}
                >
                  <RefreshCw size={14} />
                  Monthly Ritual — Save 15%
                </button>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-heading text-4xl text-espresso">
                  ${currentPrice?.toFixed(2)}
                </span>
                {isSubscription && (
                  <span className="text-sm text-espresso-300 line-through">
                    ${product.price?.toFixed(2)}
                  </span>
                )}
                {product.cookies_per_box && (
                  <span className="text-sm text-espresso-400">
                    / {product.cookies_per_box} cookies
                  </span>
                )}
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-espresso-400">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 rounded-full border border-honey-200 flex items-center justify-center text-espresso-400 hover:bg-honey-100 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-medium text-espresso w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded-full border border-honey-200 flex items-center justify-center text-espresso-400 hover:bg-honey-100 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-honey-500 text-white py-4 rounded-full font-medium hover:bg-honey-600 transition-all duration-300 hover:shadow-lg hover:shadow-honey-500/20 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={18} />
                Add to Basket — ${(currentPrice * quantity).toFixed(2)}
              </button>

              <p className="text-center text-xs text-espresso-300 mt-4">
                Free shipping on orders over $65 · 30-day satisfaction guarantee
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
      <SlideOutCart />
    </div>
  );
}