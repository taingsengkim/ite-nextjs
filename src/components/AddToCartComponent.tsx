"use client";
import { useState } from "react";

export default function AddtoCartComponent() {
  //creating state
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Cart : {count}</h1>
      <button
        className="border p-4 rounded bg-amber-300 text-white"
        onClick={() => setCount(count + 1)}
      >
        Add To Cart
      </button>
    </>
  );
}
