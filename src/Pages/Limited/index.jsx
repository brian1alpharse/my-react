import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../Components/Atoms";

export default function index() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const limited = useSelector((state) => state.product.products);

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="py-20 px-[10%]">
      <h1 className="pb-10 text-xl font-bold">All Products</h1>

      <div className="grid grid-cols-6 gap-4">
        {products.map((item, idx) => (
          <Card
            key={idx}
            image={item.image}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
