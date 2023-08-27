import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart'));
    if (data) {
      setCartItems(data);
    }
  }, []);

  const addToCart = (product) => {
    const existIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existIndex !== -1) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
