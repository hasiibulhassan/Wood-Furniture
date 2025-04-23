// contexts/ShopContext.js
import { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  // Add to cart function
  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? {...item, quantity: item.quantity + quantity} 
            : item
        );
      }
      return [...prev, {...product, quantity}];
    });
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId ? {...item, quantity: newQuantity} : item
      )
    );
  };

  // Add to wishlist
  const addToWishlist = (product) => {
    setWishlistItems(prev => 
      prev.some(item => item.id === product.id) 
        ? prev 
        : [...prev, product]
    );
  };

  // Remove from wishlist
  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <ShopContext.Provider value={{
      cartItems,
      wishlistItems,
      showCart,
      showWishlist,
      setShowCart,
      setShowWishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      addToWishlist,
      removeFromWishlist
    }}>
      {children}
    </ShopContext.Provider>
  );
};