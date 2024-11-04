import React, { createContext, useEffect, useState } from 'react';
import axios from './Axios';

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(null);
  const getProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.log('Error fetching products', error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      const { data } = await axios.post("/products", newProduct);
      setProducts([...products, data]);
    } catch (error) {
      console.log('Error adding product', error);
    }
  }

  const getAllCategories = () => {
    const uniqueCategories = products ? [...new Set(products.map(product => product.category))] : [];
    return uniqueCategories;
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct, getAllCategories }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context;
