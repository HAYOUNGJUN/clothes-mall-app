import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

export type Product = {
  id: number;
  img: string;
  title: string;
  price: number;
  choice: boolean;
  new: boolean;
  size: string[];
};

export default function Products() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [query] = useSearchParams();

  const getProducts = useCallback(async () => {
    try {
      const searchQuery = query.get('q') || '';
      // const url = `http://localhost:5000/products?q=${searchQuery}`;
      const url = `https://my-json-server.typicode.com/HAYOUNGJUN/clothes-mall-app/products?q=${searchQuery}`;
      const response = await fetch(url);
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }, [query]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className='card-container container mx-auto px-4 grid grid-cols-4 gap-4 py-8'>
      {productList.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
