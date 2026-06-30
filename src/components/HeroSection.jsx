import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const GOALS = [
  { key: 'boost', label: 'Boost', desc: 'Increase supply' },
  { key: 'maintain', label: 'Maintain', desc: 'Steady support' },
  { key: 'recover', label: 'Recover', desc: 'Postpartum care' },
];

export default function HeroSection({ onGoalSelect, activeGoal }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a42d5f18a7e4c860e192b1c/97c30854c_generated_4131d1e4.png"
          alt="Artisanal lactation cookie broken open revealing oats and chocolate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-honey-50/95 via-honey-50/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-sage-500 uppercase tracking-widest text-sm mb-6 font-medium"
          >
            Honeys Baking Company
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-espresso leading-none mb-8"
          >
            Nourishment<br />
            <span className="italic text-honey-500">for the Journey</span><br />
            of Two.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-espresso-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
          >
            Science-backed lactation cookies crafted with premium galactagogues — 
            brewer's yeast, flaxseed, and oats — to support your milk supply naturally.
          </motion.p>

          {/* Quick-Start Goal Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-sm text-espresso-400 uppercase tracking-widest mb-4">
              What's your lactation goal?
            </p>
            <div className="flex flex-wrap gap-3">
              {GOALS.map(goal => (
                <button
                  key={goal.key}
                  onClick={() => onGoalSelect(goal.key === activeGoal ? null : goal.key)}
                  className={`group px-6 py-3 rounded-full border transition-all duration-500 ${
                    activeGoal === goal.key
                      ? 'bg-honey-500 border-honey-500 text-white shadow-lg shadow-honey-500/20'
                      : 'border-espresso-200 text-espresso hover:border-honey-400 hover:text-honey-600'
                  }`}
                >
                  <span className="font-medium">{goal.label}</span>
                  <span className={`ml-2 text-sm ${
                    activeGoal === goal.key ? 'text-white/80' : 'text-espresso-300'
                  }`}>
                    {goal.desc}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#products"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-espresso-300 hover:text-honey-500 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} strokeWidth={1} />
        </motion.div>
      </motion.a>
    </section>
  );
}