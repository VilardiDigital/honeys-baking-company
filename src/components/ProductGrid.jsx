import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

export default function ProductGrid({ products, activeGoal }) {
  const filtered = activeGoal
    ? products.filter(p => p.category === activeGoal)
    : products;

  return (
    <section id="products" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-sage-500 uppercase tracking-widest text-sm mb-4">
            Our Collection
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-espresso">
            {activeGoal
              ? `Crafted to ${activeGoal.charAt(0).toUpperCase() + activeGoal.slice(1)}`
              : 'Every Cookie, a Purpose'
            }
          </h2>
          <div className="w-16 h-0.5 bg-honey-500 mt-6" />
        </motion.div>

        {filtered.length === 0 ? (
          <p className="text-espresso-400 text-center py-16 font-heading text-xl italic">
            No cookies found for this goal. Try another or view all.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}