import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-honey-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 md:px-12 pt-32 pb-20 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle size={40} className="text-sage-600" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-heading text-4xl md:text-5xl text-espresso mb-4"
        >
          Thank You, Mama
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-espresso-400 text-lg max-w-md mx-auto mb-10 leading-relaxed"
        >
          Your order has been placed. We'll begin baking your cookies fresh 
          and send a confirmation to your email shortly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-honey-500 text-white px-8 py-4 rounded-full font-medium hover:bg-honey-600 transition-all duration-300 hover:shadow-lg hover:shadow-honey-500/20"
          >
            Continue Shopping
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}