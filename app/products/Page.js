"use client";
import React from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { useState, useEffect } from "react";
function Products() {
  const [Getproduct, setGetproduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setGetproduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="w-[90%] m-auto">
        <h1>محصولات</h1>
        <div className="flex flex-wrap justify-center m-auto">
          {Getproduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
