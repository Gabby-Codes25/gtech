"use client"
import React, { useState } from 'react';
import Footer from '../components/footer';

function CartPage({cartItems,setCartItems}) {
  
  // Function to remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className='absolute top-[8rem]'>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b-2 border-gray-200 py-2">
                <div>
                  <p className="text-lg">{item.name} - ${item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">Proceed to Payment</button>
            </div>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CartPage;
