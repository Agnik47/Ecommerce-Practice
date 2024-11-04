import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onCategoryClick, categories }) => {
  const [searhTerm, setsearhTerm] = useState("");

  const randomColor = () => {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`;
  };

  return (
    <nav className="fixed top-0 left-0 w-1/5 h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6 flex flex-col items-start text-gray-200 shadow-lg">
      {/* Need a input search bar */}
      <input
        type="text"
        className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-400 focus:outline-none text-slate-600  focus:border-blue-500 mb-2 "
        placeholder="Search for products..."
        onChange={setsearhTerm}
      />
      <div className="SearchBtn py-3 px-5 w-full text-center rounded mb-6 bg-green-600 hover:bg-green-500 hover:shadow-lg transition duration-300 mt-1">
        Search
      </div>
      <Link
        to="/create"
        className="py-3 px-5 w-full text-center rounded mb-6 bg-blue-600 hover:bg-blue-500 hover:shadow-lg transition duration-300"
      >
        Add New Product
      </Link>
      <hr className="w-full my-6 border-gray-700" />
      <h1 className="text-lg font-semibold mb-4">Categories</h1>
      <ul className="w-full space-y-3">
        <li
          className="py-3 px-5 flex items-center w-full rounded hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
          onClick={() => onCategoryClick("")}
        >
          <span
            className="inline-block w-3 h-3 rounded-full mr-3"
            style={{ backgroundColor: "red" }}
          ></span>
          ALL PRODUCTS
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            className="py-3 px-5 flex items-center w-full rounded hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            onClick={() => onCategoryClick(category)}
          >
            <span
              className="inline-block w-3 h-3 rounded-full mr-3"
              style={{ backgroundColor: randomColor() }}
            ></span>
            {category.toUpperCase()}
          </li>
        ))}
      </ul>
      <hr className="w-full my-6 border-gray-700" />
      {/* Need to make a range slider for peice Range */}

      <label
        for="minmax-range"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Min-max range
      </label>
      <input
        id="minmax-range"
        type="range"
        min="0"
        max="10"
        value="5"
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </nav>
  );
};

export default Navbar;
