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

  const addToCart = (product, currentValue) => {
    console.log('currentValue', currentValue);
    const existIndex = cartItems.findIndex((item) => item.id === product.id);
  
    if (existIndex !== -1) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Set local storage here
    } else {
      setCartItems([...cartItems, { ...product, quantity: currentValue || 1 }]);
      localStorage.setItem('cart', JSON.stringify([...cartItems, { ...product, quantity: currentValue || 1 }])); // Set local storage here
    }
  };
  

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
