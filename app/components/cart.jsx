import React, { useState } from 'react';
import CartPage from '../Cart/page';
import { useRouter } from 'next/navigation';

function Cart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const product = {
    name: "Macbook Laptop",
    price: 250,
    image: "/Macbook-M2.jpg"
  };

  const addToCart = () => {
    setCartItems(prevItems => [...prevItems, product]);
    setShowConfirmation(true);
  };

  const navigateToCart = () => {
    router.push('/CartPage');
  };

  return (
    <div className="flex justify-center">
      <div className="bg-gray-600 border-black shadow-2xl rounded-xl w-64 h-80 mx-auto mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-t-xl h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-white text-xl font-bold mb-2">{product.name}</h2>
          <div className="flex items-center justify-between">
            <a href="/" className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-300">
              <span className="text-white font-bold pr-1">${product.price}</span>
            </a>
            <button onClick={addToCart} className="text-white hover:text-blue-400 focus:outline-none">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div className="ml-4 flex flex-col justify-center">
          <p className="text-white">Item added to cart!</p>
          <button onClick={navigateToCart} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-blue-700">
            View Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
