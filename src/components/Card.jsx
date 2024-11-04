import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loader from "./Loader";

const Card = ({ selectedCategory }) => {
  const { products } = useContext(ProductContext) || {};

  const filteredProducts = products
    ? selectedCategory
      ? products.filter(product => product.category === selectedCategory)
      : products
    : [];

  return (
    <>
      {filteredProducts.length ? (
        filteredProducts.map((product) => (
          <Link
            to={`/details/${product.id}`} 
            key={product.id} 
            className="w-full max-w-xs h-fit bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              className="w-full h-48 object-cover object-center"
              src={product.image}
              alt={product.title}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 truncate">
                {product.title}
              </h3>
              <div className="text-lg text-white font-semibold mb-2">
                ${product.price.toFixed(2)}
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="bg-gray-700 rounded-full px-2 py-1 text-gray-400">
                  {product.category}
                </span>
                <span className="flex items-center text-yellow-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.965c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.965a1 1 0 00-.364-1.118L2.26 9.391c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.964z" />
                  </svg>
                  <span className="ml-1">
                    {product.rating.rate} ({product.rating.count})
                  </span>
                </span> 
              </div>
            </div>
          </Link>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Card;
