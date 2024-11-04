import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import { ProductContext } from '../utils/Context';

const Home = () => {
  const { products, getAllCategories } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = getAllCategories();
  

  return (
    <>
      <Navbar onCategoryClick={handleCategoryClick} categories={categories} />
      <div className="ml-[20%] w-[80%] min-h-screen overflow-y-auto bg-gray-900 text-gray-100 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card selectedCategory={selectedCategory} />
        </div>
      </div>
    </>
  );
};

export default Home;
