"use client";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const removeFromCart = (cartId) => {
    const updatedCart = cartItems.filter(item => item.cartId !== cartId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    window.dispatchEvent(new Event("storage"));
    toast.error("Item removed from cart");
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price || 0), 0);

  return (
    <div className="max-w-5xl mx-auto my-10 p-5 min-h-[70vh]">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">Your Shopping Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl">
          <p className="text-xl text-gray-500 mb-5">Your cart is empty!</p>
          <Link href="/products" className="btn bg-[#00A99D] text-white border-none px-10">Shop Now</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* List Section */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.cartId} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-grow">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-[#00A99D] font-bold">${item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.cartId)} className="btn btn-circle btn-ghost text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-gray-50 p-6 rounded-3xl h-fit shadow-inner">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span className="font-bold">{cartItems.length}</span>
            </div>
            <div className="flex justify-between text-xl border-t pt-4 mt-4">
              <span>Total Price:</span>
              <span className="font-bold text-[#00A99D]">${totalPrice}</span>
            </div>
            <button className="btn bg-[#00A99D] hover:bg-[#008c82] text-white w-full border-none mt-6 rounded-xl py-4">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}