import React from 'react';
import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section id="story" className="py-24 md:py-32 relative overflow-hidden">
      <div className="honey-divider text-honey-500 absolute top-0 left-0 right-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6a42d5f18a7e4c860e192b1c/29598d356_generated_6a6f3de6.png"
                alt="Serene nursery with cookies and tea in warm morning light"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-honey-500/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sage-500 uppercase tracking-widest text-sm mb-4">
              Our Story
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-espresso mb-8">
              Born from a <span className="italic text-honey-500">Mother's</span> Need
            </h2>
            <div className="space-y-6 text-espresso-500 leading-relaxed">
              <p>
                Honeys Baking Company began in a small kitchen, fueled by a new mother's 
                determination and a grandmother's recipe. When modern lactation support 
                felt clinical and cold, we turned to the warmth of time-tested ingredients.
              </p>
              <p>
                Every cookie is a marriage of culinary art and nutritional science — crafted 
                with organic galactagogues like brewer's yeast, flaxseed, and whole oats. 
                We don't just bake cookies; we create a daily ritual of nourishment that 
                supports both body and spirit.
              </p>
              <p>
                Today, we've supported over 50,000 mothers on their breastfeeding journey. 
                Each batch is still made in small quantities, because we believe nurture 
                should never be mass-produced.
              </p>
            </div>

            <div className="border-t border-honey-200 mt-10 pt-10">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: '50K+', label: 'Mothers Supported' },
                  { num: '6', label: 'Key Galactagogues' },
                  { num: '100%', label: 'Organic Ingredients' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="font-heading text-3xl text-honey-500">{stat.num}</p>
                    <p className="text-sm text-espresso-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}