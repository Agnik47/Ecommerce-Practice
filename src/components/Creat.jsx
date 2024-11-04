import React, { useContext, useState } from 'react';
import { ProductContext } from '../utils/Context';

const Creat = () => {
  const { addProduct, getAllCategories } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    setFormData({
      title: '',
      price: '',
      description: '',
      category: '',
      image: ''
    });
  };

  const categories = getAllCategories();

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-900">
      <div className="bg-gray-800 rounded-lg p-8 w-full max-w-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Create Your Own Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter price"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter description"
              rows="3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter category"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-yellow-400"
              placeholder="Enter image URL"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Create Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default Creat;
