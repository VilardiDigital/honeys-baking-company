import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import SlideOutCart from '@/components/SlideOutCart';
import Footer from '@/components/Footer';

const FAQS = [
  {
    q: "Do lactation cookies actually work?",
    a: "While individual results vary, our cookies contain galactagogues like brewer's yeast, flaxseed, and oats that have been used traditionally for centuries to support milk production. Many of our customers report noticeable improvements within 24–72 hours."
  },
  {
    q: "What are galactagogues?",
    a: "Galactagogues are substances that promote or increase the flow of breast milk. Our cookies contain several key galactagogues including brewer's yeast (rich in B-vitamins), flaxseed (phytoestrogens), whole oats (saponins), and fenugreek."
  },
  {
    q: "Are the ingredients organic?",
    a: "Yes. We source 100% organic, non-GMO ingredients. Every batch is made in small quantities in our certified kitchen to ensure quality and freshness."
  },
  {
    q: "How many cookies should I eat per day?",
    a: "We recommend 2–3 cookies per day for best results. Some mothers notice benefits with as few as 1 cookie per day. Listen to your body and adjust as needed."
  },
  {
    q: "Are these safe to eat while breastfeeding?",
    a: "Absolutely. All our ingredients are food-grade and commonly consumed during breastfeeding. However, if you have specific allergies or medical concerns, please consult with your healthcare provider."
  },
  {
    q: "How does the subscription work?",
    a: "Our Monthly Ritual subscription delivers fresh cookies to your door every 30 days at a 15% discount. You can pause, skip, or cancel anytime — no commitments."
  },
  {
    q: "What is your shipping policy?",
    a: "Orders over $65 ship free. Standard shipping is $5.95 and typically arrives within 3–5 business days. We ship Monday through Friday to ensure freshness."
  },
  {
    q: "Do you offer a satisfaction guarantee?",
    a: "Yes. If you're not completely satisfied, contact us within 30 days for a full refund. We stand behind every cookie we bake."
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-honey-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-espresso-400 hover:text-honey-500 transition-colors mb-10">
          <ArrowLeft size={18} />
          <span className="text-sm">Back Home</span>
        </Link>

        <h1 className="font-heading text-4xl md:text-5xl text-espresso mb-4">
          Frequently Asked <span className="italic text-honey-500">Questions</span>
        </h1>
        <p className="text-espresso-400 text-lg mb-12">
          Everything you need to know about our cookies and your lactation journey.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white rounded-2xl border border-honey-100 px-6 overflow-hidden"
            >
              <AccordionTrigger className="font-heading text-espresso text-lg py-5 hover:no-underline hover:text-honey-600">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-espresso-500 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Footer />
      <SlideOutCart />
    </div>
  );
}