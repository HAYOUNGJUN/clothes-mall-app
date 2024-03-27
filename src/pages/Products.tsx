import { useEffect, useState } from 'react';
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

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    // const url = 'http://localhost:5000/products';
    const url =
      'https://my-json-server.typicode.com/HAYOUNGJUN/clothes-mall-app/products';
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  }

  return (
    <div className='container mx-auto px-4 grid grid-cols-4 gap-4 py-8'>
      {productList.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
