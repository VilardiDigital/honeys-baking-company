import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    content: 'These cookies genuinely helped increase my supply within 48 hours. I was skeptical, but the difference was noticeable. Plus, they taste incredible — my husband keeps sneaking them!',
    days_postpartum: 14,
    verified: true,
  },
  {
    id: '2',
    author: 'Jessica L.',
    rating: 5,
    content: 'I tried everything to boost my supply and nothing worked until I found Honey\'s. The oatmeal chocolate chip are my daily ritual now. I\'ve subscribed so I never run out.',
    days_postpartum: 30,
    verified: true,
  },
  {
    id: '3',
    author: 'Amara K.',
    rating: 5,
    content: 'As a second-time mom, I know what works. These cookies are the real deal — quality ingredients you can taste. The subscription saves me from ever having to think about reordering.',
    days_postpartum: 7,
    verified: true,
  },
  {
    id: '4',
    author: 'Rachel T.',
    rating: 4,
    content: 'Delicious and effective! I noticed a difference after the first week. The peanut butter flavor is to die for. Only wish they came in bigger boxes!',
    days_postpartum: 60,
    verified: true,
  },
];

const FILTERS = [
  { label: 'All', value: null },
  { label: '0–14 Days', value: [0, 14] },
  { label: '15–30 Days', value: [15, 30] },
  { label: '30+ Days', value: [31, 9999] },
];

export default function ReviewsSection() {
  const [filter, setFilter] = useState(null);

  const filtered = filter
    ? REVIEWS.filter(r => r.days_postpartum >= filter[0] && r.days_postpartum <= filter[1])
    : REVIEWS;

  return (
    <section id="reviews" className="py-24 md:py-32 bg-honey-100/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sage-500 uppercase tracking-widest text-sm mb-4">
            Mother's Circle
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-espresso mb-4">
            Stories from <span className="italic text-honey-500">Real Mothers</span>
          </h2>
          <p className="text-espresso-400 max-w-lg mx-auto">
            Filtered by postpartum stage, because every week of the journey is different.
          </p>

          {/* Postpartum filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {FILTERS.map(f => (
              <button
                key={f.label}
                onClick={() => setFilter(f.value)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                  JSON.stringify(filter) === JSON.stringify(f.value)
                    ? 'bg-honey-500 text-white'
                    : 'bg-white text-espresso-500 hover:bg-honey-100 border border-honey-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-8 md:p-10 relative"
            >
              <Quote size={32} className="text-honey-200 absolute top-6 right-8" />
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className={idx < review.rating ? 'fill-honey-400 text-honey-400' : 'text-honey-200'}
                  />
                ))}
              </div>

              <p className="text-espresso-600 leading-relaxed mb-6 italic">
                "{review.content}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading text-espresso text-lg">{review.author}</p>
                  {review.verified && (
                    <p className="text-xs text-sage-500 mt-0.5">Verified Purchase</p>
                  )}
                </div>
                <span className="px-3 py-1 rounded-full bg-honey-50 text-honey-600 text-xs font-medium">
                  {review.days_postpartum} days postpartum
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-espresso-400 py-12 font-heading italic text-lg">
            No reviews for this stage yet. Check back soon.
          </p>
        )}
      </div>
    </section>
  );
}