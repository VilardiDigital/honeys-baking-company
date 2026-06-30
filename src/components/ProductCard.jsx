import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Sparkles } from 'lucide-react';
import { useCart } from '@/lib/cartContext';

const GALACTAGOGUE_COLORS = {
  "Brewer's Yeast": 'bg-honey-200 text-honey-800',
  "Flaxseed": 'bg-sage-100 text-sage-700',
  "Oats": 'bg-honey-100 text-honey-700',
  "Fenugreek": 'bg-sage-200 text-sage-800',
  "Coconut Oil": 'bg-honey-50 text-honey-600',
  "Wheat Germ": 'bg-sage-50 text-sage-600',
};

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const galactagogues = product.galactagogues ? product.galactagogues.split(',').map(g => g.trim()) : [];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.slug || product.id}`} className="block relative overflow-hidden rounded-3xl mb-5">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
        </motion.div>

        {/* Galactagogue halo on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none"
        >
          <div className="flex flex-wrap gap-1.5 justify-center px-4">
            {galactagogues.map((g, i) => (
              <motion.span
                key={g}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  GALACTAGOGUE_COLORS[g] || 'bg-honey-100/90 text-honey-700'
                } bg-opacity-90`}
              >
                <Sparkles size={10} className="inline mr-1" />
                {g}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Link>

      {/* Info */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link
            to={`/product/${product.slug || product.id}`}
            className="font-heading text-xl text-espresso hover:text-honey-600 transition-colors"
          >
            {product.name}
          </Link>
          <p className="text-sm text-espresso-400 mt-1">{product.tagline}</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-heading text-lg text-espresso">${product.price?.toFixed(2)}</span>
            {product.subscription_price && (
              <span className="text-sm text-sage-500">
                ${product.subscription_price?.toFixed(2)}/mo
              </span>
            )}
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="mt-1 p-3 rounded-full bg-honey-500 text-white hover:bg-honey-600 transition-all duration-300 hover:shadow-lg hover:shadow-honey-500/20 flex-shrink-0"
        >
          <Plus size={18} />
        </button>
      </div>
    </motion.div>
  );
}