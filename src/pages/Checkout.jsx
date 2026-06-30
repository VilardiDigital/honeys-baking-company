import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { ArrowLeft, Lock, RefreshCw } from 'lucide-react';
import { useCart } from '@/lib/cartContext';
import Navbar from '@/components/Navbar';
import SlideOutCart from '@/components/SlideOutCart';
import { useToast } from '@/components/ui/use-toast';

export default function Checkout() {
  const { items, subtotal, shipping, total, clearCart, sessionId } = useCart();
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', state: '', zip: '' });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const updateField = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    setSubmitting(true);
    try {
      await base44.entities.Order.create({
        customer_name: form.name,
        customer_email: form.email,
        shipping_address: `${form.address}, ${form.city}, ${form.state} ${form.zip}`,
        items: JSON.stringify(items),
        subtotal,
        shipping,
        total,
        is_subscription: items.some(i => i.is_subscription),
        session_id: sessionId,
      });
      clearCart();
      navigate('/order-confirmation');
    } catch (err) {
      toast({ title: 'Something went wrong', description: 'Please try again.', variant: 'destructive' });
    }
    setSubmitting(false);
  };

  const inputClass = "w-full px-5 py-3.5 rounded-2xl bg-white border border-honey-200 text-espresso placeholder:text-espresso-300 focus:outline-none focus:ring-2 focus:ring-honey-400/40 focus:border-honey-400 transition-all";

  return (
    <div className="min-h-screen bg-honey-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-espresso-400 hover:text-honey-500 transition-colors mb-10">
          <ArrowLeft size={18} />
          <span className="text-sm">Continue Shopping</span>
        </Link>

        <h1 className="font-heading text-4xl text-espresso mb-12">Checkout</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-heading text-xl text-espresso-300 italic mb-4">Your basket is empty</p>
            <Link to="/" className="text-honey-500 hover:text-honey-600 underline">Browse our collection</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <p className="font-heading text-xl text-espresso mb-5">Contact</p>
                  <div className="space-y-4">
                    <input
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={e => updateField('name', e.target.value)}
                      className={inputClass}
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={e => updateField('email', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <p className="font-heading text-xl text-espresso mb-5">Shipping Address</p>
                  <div className="space-y-4">
                    <input
                      required
                      placeholder="Street Address"
                      value={form.address}
                      onChange={e => updateField('address', e.target.value)}
                      className={inputClass}
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        required
                        placeholder="City"
                        value={form.city}
                        onChange={e => updateField('city', e.target.value)}
                        className={inputClass}
                      />
                      <input
                        required
                        placeholder="State"
                        value={form.state}
                        onChange={e => updateField('state', e.target.value)}
                        className={inputClass}
                      />
                      <input
                        required
                        placeholder="ZIP Code"
                        value={form.zip}
                        onChange={e => updateField('zip', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-honey-500 text-white py-4 rounded-full font-medium hover:bg-honey-600 transition-all duration-300 hover:shadow-lg hover:shadow-honey-500/20 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Lock size={16} />
                  {submitting ? 'Processing...' : `Place Order — $${total.toFixed(2)}`}
                </button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl p-6 border border-honey-100 sticky top-28">
                  <p className="font-heading text-xl text-espresso mb-5">Order Summary</p>
                  <div className="space-y-4 mb-6">
                    {items.map(item => (
                      <div key={`${item.product_id}-${item.is_subscription}`} className="flex gap-3">
                        {item.product_image && (
                          <img src={item.product_image} alt={item.product_name} className="w-14 h-14 rounded-xl object-cover" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-espresso truncate">{item.product_name}</p>
                          {item.is_subscription && (
                            <span className="text-xs text-sage-600 flex items-center gap-1">
                              <RefreshCw size={10} /> Monthly
                            </span>
                          )}
                          <p className="text-xs text-espresso-400">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm text-espresso font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-honey-100 pt-4 space-y-2">
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
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
      <SlideOutCart />
    </div>
  );
}