import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProductData } from '../store/productAction';

import ProductCard from '../components/ProductCard';

export default function Products() {
  const productList = useAppSelector((state) => state.product.items);
  const [query] = useSearchParams();
  const dispatch = useAppDispatch();

  // const url = `http://localhost:5000/products?q=${searchQuery}`;

  useEffect(() => {
    const searchQuery = query.get('q') || '';
    dispatch(fetchProductData(searchQuery));
  }, [dispatch, query]);

  return (
    <div className='card-container container mx-auto px-4 grid grid-cols-4 gap-4 py-8'>
      {productList.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
