import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loader from "./Loader";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]); // `id` as a dependency to re-fetch if `id` changes

  return product ? (
    <div className="flex justify-center w-full items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg p-8 max-w-xl w-full shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{product.title}</h2>
          <div className="text-yellow-400 flex items-center">
            <svg className="w-6 h-6 fill-current mr-1" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.965c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.965a1 1 0 00-.364-1.118L2.26 9.391c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.964z" />
            </svg>
            <span className="text-lg">{product.rating.rate}</span>
            <span className="text-gray-400 ml-1">({product.rating.count})</span>
          </div>
        </div>
        <img
          className="w-full h-64 object-contain mb-6"
          src={product.image}
          alt={product.title}
        />
        <p className="text-white text-sm mb-6">{product.description}</p>
        <div className="flex justify-between items-center">
          <div className="text-2xl text-white font-bold">
            ${product.price.toFixed(2)}
          </div>
          <div>
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md mr-4 hover:bg-yellow-500 transition duration-300">
              Buy Now
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Details;
