"use client";
import { useState } from "react";

export default function AddtoCartComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center bg-amber-400 justify-center ">
      <div
        className="bg-blue-900  p-8 w-80 text-center  shadow-[10px_10px_0px_rgba(0,0,0,0.4)]
    hover:shadow-[15px_15px_0px_rgba(0,0,0,0.5)]
    transition-all duration-200
    hover:-translate-y-1 hover:-translate-x-1"
      >
        <h1 className="text-2xl font-bold mb-6 text-white">Shopping Cart</h1>
        <div className="text-5xl font-bold text-amber-500 mb-6">{count}</div>
        <p className="text-white mb-6">Items in your cart</p>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full bg-amber-400 hover:bg-amber-500 transition text-white font-semibold py-3 "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
