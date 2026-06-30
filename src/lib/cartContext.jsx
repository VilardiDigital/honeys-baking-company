import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

function getSessionId() {
  let sid = localStorage.getItem('honey_session');
  if (!sid) {
    sid = 'sess_' + Math.random().toString(36).slice(2) + Date.now();
    localStorage.setItem('honey_session', sid);
  }
  return sid;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('honey_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const sessionId = getSessionId();

  useEffect(() => {
    localStorage.setItem('honey_cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product, isSubscription = false) => {
    setItems(prev => {
      const existing = prev.find(i => i.product_id === product.id && i.is_subscription === isSubscription);
      if (existing) {
        return prev.map(i => 
          i.product_id === product.id && i.is_subscription === isSubscription
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, {
        product_id: product.id,
        product_name: product.name,
        product_image: product.image_url,
        price: isSubscription ? product.subscription_price : product.price,
        quantity: 1,
        is_subscription: isSubscription,
        session_id: sessionId
      }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (productId, isSubscription) => {
    setItems(prev => prev.filter(i => !(i.product_id === productId && i.is_subscription === isSubscription)));
  };

  const updateQuantity = (productId, isSubscription, quantity) => {
    if (quantity <= 0) return removeItem(productId, isSubscription);
    setItems(prev => prev.map(i => 
      i.product_id === productId && i.is_subscription === isSubscription
        ? { ...i, quantity }
        : i
    ));
  };

  const clearCart = () => setItems([]);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const FREE_SHIPPING_THRESHOLD = 65;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 5.95;
  const total = subtotal + shipping;

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQuantity, clearCart,
      itemCount, subtotal, shipping, total,
      isCartOpen, setIsCartOpen, sessionId,
      FREE_SHIPPING_THRESHOLD
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}