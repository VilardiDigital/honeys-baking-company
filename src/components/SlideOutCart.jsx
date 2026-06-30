import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '@/lib/cartContext';
import { Link } from 'react-router-dom';

export default function SlideOutCart() {
  const {
    items, isCartOpen, setIsCartOpen,
    removeItem, updateQuantity,
    subtotal, shipping, total, FREE_SHIPPING_THRESHOLD
  } = useCart();

  const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-espresso/30 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-honey-50 z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-honey-200">
              <h2 className="font-heading text-2xl text-espresso">Your Basket</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-espresso-400 hover:text-espresso transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Shipping Progress */}
            <div className="px-6 py-4 border-b border-honey-100">
              <div className="flex items-center gap-2 mb-2">
                <Truck size={16} className="text-sage-500" />
                {remaining > 0 ? (
                  <p className="text-sm text-espresso-500">
                    Add <span className="font-medium text-honey-600">${remaining.toFixed(2)}</span> for free shipping
                  </p>
                ) : (
                  <p className="text-sm text-sage-600 font-medium">
                    You've unlocked free shipping!
                  </p>
                )}
              </div>
              <div className="h-2 bg-honey-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${shippingProgress}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-honey-400 to-honey-500 rounded-full"
                />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <p className="font-heading text-xl text-espresso-300 italic mb-2">
                    Your basket is empty
                  </p>
                  <p className="text-sm text-espresso-300">
                    Add some nourishing cookies to get started
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div
                      key={`${item.product_id}-${item.is_subscription}`}
                      className="flex gap-4 bg-white rounded-2xl p-4"
                    >
                      {item.product_image && (
                        <img
                          src={item.product_image}
                          alt={item.product_name}
                          className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-heading text-espresso truncate">{item.product_name}</p>
                        {item.is_subscription && (
                          <span className="inline-flex items-center gap-1 text-xs text-sage-600 bg-sage-50 px-2 py-0.5 rounded-full mt-1">
                            <RefreshCw size={10} /> Monthly
                          </span>
                        )}
                        <p className="text-honey-600 font-medium mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>

                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product_id, item.is_subscription, item.quantity - 1)}
                            className="w-7 h-7 rounded-full border border-honey-200 flex items-center justify-center text-espresso-400 hover:bg-honey-100 transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm font-medium text-espresso w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product_id, item.is_subscription, item.quantity + 1)}
                            className="w-7 h-7 rounded-full border border-honey-200 flex items-center justify-center text-espresso-400 hover:bg-honey-100 transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.product_id, item.is_subscription)}
                        className="text-espresso-300 hover:text-destructive transition-colors self-start"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Perfect Pairings */}
              {items.length > 0 && (
                <div className="mt-8 p-5 bg-sage-50/50 rounded-2xl border border-sage-100">
                  <p className="font-heading text-espresso text-sm mb-1">Perfect Pairing</p>
                  <p className="text-xs text-espresso-400">
                    Pair your cookies with a cup of Mother's Milk herbal tea for optimal galactagogue synergy.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-honey-200 space-y-3">
                <div className="flex justify-between text-sm text-espresso-500">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-espresso-500">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-lg font-heading text-espresso pt-2 border-t border-honey-100">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full bg-honey-500 text-white text-center py-4 rounded-full font-medium hover:bg-honey-600 transition-all duration-300 hover:shadow-lg hover:shadow-honey-500/20 mt-4"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}