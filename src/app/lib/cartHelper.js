'use client';
import { useState, useEffect } from 'react';

export const saveToCart = (cart) => {
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }
};

export const getFromCart = () => {
  if (typeof window !== 'undefined') {
    try {
      return JSON.parse(window.localStorage.getItem('cart')) || {};
    } catch (error) {
      console.error('Error getting cart from localStorage:', error);
      return {};
    }
  }
  return {};
};

export const addItemToCart = (itemId, quantity, size) => {
  const cart = getFromCart();
  cart[itemId] = (cart[itemId] || 0) + quantity + size;
  saveToCart(cart);
};

export const removeItemFromCart = (itemId) => {
  const cart = getFromCart();
  delete cart[itemId];
  saveToCart(cart);
};

export const updateCartItemQuantity = (itemId, newQuantity) => {
  const cart = getFromCart();
  if (newQuantity > 0) {
    cart[itemId] = newQuantity;
  } else {
    delete cart[itemId];
  }
  saveToCart(cart);
};

export const getCartTotalCount = () => {
  const cart = getFromCart();
  return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
};

export const useCart = () => {
  const [cart, setCart] = useState(() => getFromCart());

  useEffect(() => {
    setCart(getFromCart());
  }, []);

  const addOrUpdateItem = (itemId, quantity) => {
    updateCartItemQuantity(itemId, quantity);
    setCart(getFromCart());
  };

  const removeItem = (itemId) => {
    removeItemFromCart(itemId);
    setCart(getFromCart());
  };

  const clearCart = () => {
    saveToCart({});
    setCart({});
  };

  return {
    cart,
    addOrUpdateItem,
    removeItem,
    clearCart,
    totalCount: getCartTotalCount(),
  };
};
