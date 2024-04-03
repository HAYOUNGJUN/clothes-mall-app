import { type ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../store/productApi';

export default function Product() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id!);

  let content: ReactNode;
  if (isLoading) {
    content = <p>Fetching data...</p>;
  }

  if (error) {
    content = <p>Failed to fetch data...</p>;
  }

  if (data) {
    content = (
      <>
        <div className='my-2 justify-self-center md:w-96 md:justify-self-end'>
          <img src={data.img} alt={data.title} />
        </div>
        <div className='md:ml-8 md:justify-self-start'>
          <div className='font-bold text-xl my-1 md:my-2'>{data.title}</div>
          <div className='md:text-lg md:my-2'>₩{data.price}</div>
          <div className='font-serif text-sm md:my-2 md:font-thin'>
            {data.choice ? 'Conscious choice' : ''}
          </div>
          <div className='my-2'>
            <div>사이즈</div>
            <ul className='flex mt-1 md:justify-center'>
              {data.size.map((sizeOption, key) => (
                <li key={key}>
                  <button className='border-2 border-stone-800 rounded-md px-4 md:px-12 py-2 md:py-4 mr-4 cursor-pointer focus:border-red-500'>
                    {sizeOption}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-24 md:w-96 md:mt-4'>
            <button className='bg-stone-800 text-stone-100 rounded my-6 p-2 w-full hover:bg-stone-600'>
              추가
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <main className='p-6 grid grid-cols-1 md:grid-cols-2 md:my-6'>
      {content}
    </main>
  );
}
