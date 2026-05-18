import { CardProduct } from "@/components/my-card/product-card";
import ProductType from "@/types/product";
import React from "react";
import { json } from "stream/consumers";

export default async function ProductPage() {
  const data = await fetch("https://api.escuelajs.co/api/v1/products");
  const res = await data.json();
  return (
    <div className="flex container mx-auto  flex-wrap justify-center  gap-10 mt-10">
      {res?.map((d: ProductType) => (
        <div>
          <CardProduct props={d} key={d.title} />
        </div>
      ))}
    </div>
  );
}
