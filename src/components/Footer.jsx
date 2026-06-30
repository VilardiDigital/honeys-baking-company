import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-honey-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-heading text-3xl text-honey-50 mb-4">Honey's</p>
            <p className="text-honey-100/60 max-w-sm leading-relaxed">
              Science-backed lactation cookies, crafted with love. Nourishing mothers 
              and babies, one cookie at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-heading text-lg text-honey-50 mb-4">Quick Links</p>
            <div className="space-y-3">
              <a href="/#products" className="block text-honey-100/60 hover:text-honey-400 transition-colors">
                Shop
              </a>
              <a href="/#story" className="block text-honey-100/60 hover:text-honey-400 transition-colors">
                Our Story
              </a>
              <a href="/#science" className="block text-honey-100/60 hover:text-honey-400 transition-colors">
                The Science
              </a>
              <a href="/#reviews" className="block text-honey-100/60 hover:text-honey-400 transition-colors">
                Reviews
              </a>
              <Link to="/faq" className="block text-honey-100/60 hover:text-honey-400 transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading text-lg text-honey-50 mb-4">Get in Touch</p>
            <div className="space-y-3">
              <a
                href="mailto:hello@honeysbaking.com"
                className="flex items-center gap-2 text-honey-100/60 hover:text-honey-400 transition-colors"
              >
                <Mail size={16} />
                hello@honeysbaking.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-honey-100/60 hover:text-honey-400 transition-colors"
              >
                <Phone size={16} />
                (555) 123-4567
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-honey-100/60 hover:text-honey-400 transition-colors"
              >
                <Instagram size={16} />
                @honeysbaking
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-honey-100/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-honey-100/40 text-sm">
            © 2026 Honeys Baking Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-honey-100/40">
            <Link to="/privacy" className="hover:text-honey-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-honey-400 transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-honey-400 transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}