import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useGetAllProductQuery } from '../store/productApi';
import type { ReactNode } from 'react';

export default function Products() {
  const [query] = useSearchParams();
  const searchQuery = query.get('q') || '';
  const { data, error, isLoading } = useGetAllProductQuery(searchQuery);

  let content: ReactNode;

  if (isLoading) {
    content = <p>Fetching Data...</p>;
  }

  if (error) {
    content = <p>Failed to fetch data...</p>;
  }

  if (data) {
    content = (
      <>
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </>
    );
  }

  return (
    <div className='card-container container mx-auto px-4 grid grid-cols-4 gap-4 py-8'>
      {content}
    </div>
  );
}
