import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, FlaskConical, Wheat, Droplets } from 'lucide-react';

const INGREDIENTS = [
  {
    name: "Brewer's Yeast",
    icon: FlaskConical,
    description: "Rich in B-vitamins, iron, and chromium. A traditional galactagogue used for centuries to naturally stimulate milk production.",
    benefit: "Prolactin support"
  },
  {
    name: "Flaxseed",
    icon: Droplets,
    description: "Packed with phytoestrogens and omega-3 fatty acids that may help regulate hormones involved in lactation.",
    benefit: "Hormonal balance"
  },
  {
    name: "Whole Oats",
    icon: Wheat,
    description: "A time-honored comfort food for nursing mothers. Oats contain saponins that may support healthy prolactin levels.",
    benefit: "Supply boosting"
  },
  {
    name: "Fenugreek",
    icon: Leaf,
    description: "One of the most researched galactagogues. Contains diosgenin, a compound that may influence milk production pathways.",
    benefit: "Clinical heritage"
  },
];

export default function ScienceSection() {
  return (
    <section id="science" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sage-500 uppercase tracking-widest text-sm mb-4">
                The Science
              </p>
              <h2 className="font-heading text-4xl md:text-5xl text-espresso mb-4">
                The Baker's <span className="italic text-honey-500">Lab</span>
              </h2>
              <p className="text-espresso-400 text-lg mb-12 max-w-md">
                Every ingredient is chosen for purpose — not filler. Here's the science 
                behind each bite.
              </p>
            </motion.div>

            <div className="space-y-8">
              {INGREDIENTS.map((ingredient, i) => {
                const Icon = ingredient.icon;
                return (
                  <motion.div
                    key={ingredient.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-honey-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-honey-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-heading text-xl text-espresso">{ingredient.name}</h3>
                        <span className="px-3 py-0.5 rounded-full bg-sage-50 text-sage-600 text-xs font-medium">
                          {ingredient.benefit}
                        </span>
                      </div>
                      <p className="text-espresso-400 text-base leading-relaxed">
                        {ingredient.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center"
          >
            <div className="rounded-3xl overflow-hidden w-full">
              <img
                src="https://media.base44.com/images/public/6a42d5f18a7e4c860e192b1c/78088c402_generated_d954d311.png"
                alt="Raw lactation cookie ingredients arranged on marble surface"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-sage-500/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}