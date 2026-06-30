import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { itemCount, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', href: '/#products' },
    { label: 'Our Story', href: '/#story' },
    { label: 'The Science', href: '/#science' },
    { label: 'Reviews', href: '/#reviews' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-honey-50/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-heading text-2xl md:text-3xl text-espresso tracking-wide">
            Honey's
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body text-espresso-600 hover:text-honey-500 transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-espresso hover:text-honey-500 transition-colors"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-honey-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>

            <button
              className="md:hidden p-2 text-espresso"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-honey-50/98 backdrop-blur-md border-t border-honey-100"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-heading text-espresso hover:text-honey-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}