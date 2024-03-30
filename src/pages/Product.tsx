import { type ReactNode, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { type Product } from './Products';

export default function Product() {
  const [productData, setProductData] = useState<Product>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams();

  const getProductDetail = useCallback(async () => {
    try {
      setIsFetching(true);
      // const url = `http://localhost:5000/products/${id}`;
      const url = `https://my-json-server.typicode.com/HAYOUNGJUN/clothes-mall-app/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProductData(data);
      setIsFetching(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }, [id]);

  useEffect(() => {
    getProductDetail();
  }, [getProductDetail]);

  let content: ReactNode;

  if (isFetching) {
    content = <p>Loading data...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (productData) {
    // content = (
    //   <>
    //     <div className='w-96'>
    //       <img src={productData.img} alt={productData.title} />
    //     </div>
    //     <div className='ml-8'>
    //       <div className='text-xl my-2 font-bold'>{productData.title}</div>
    //       <div className='text-lg my-2'>₩{productData.price}</div>
    //       <div className='text-sm my-2 font-thin'>
    //         {productData.choice ? 'Conscious choice' : ''}
    //       </div>
    //       <div className='my-2'>
    //         <div>사이즈</div>
    //
    //         <ul className='flex'>
    //           {productData.size.map((sizeOption, key) => (
    //             <li key={key}>
    //               <button className='border-2 border-stone-800 rounded-md px-12 py-4 mx-2 my-2 cursor-pointer focus:border-red-500'>
    //                 {sizeOption}
    //               </button>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div className='my-2'>
    //         <button className='bg-stone-800 text-stone-100 rounded p-2 w-96 hover:bg-stone-600'>
    //           추가
    //         </button>
    //       </div>
    //     </div>
    //   </>
    // );
    content = (
      <>
        <div className='my-2 justify-self-center md:w-96 md:justify-self-end'>
          <img src={productData.img} alt={productData.title} />
        </div>
        <div className='md:ml-8 md:justify-self-start'>
          <div className='font-bold text-xl my-1 md:my-2'>
            {productData.title}
          </div>
          <div className='md:text-lg md:my-2'>₩{productData.price}</div>
          <div className='font-serif text-sm md:my-2 md:font-thin'>
            {productData.choice ? 'Conscious choice' : ''}
          </div>
          <div className='my-2'>
            <div>사이즈</div>
            <ul className='flex mt-1 md:justify-center'>
              {productData.size.map((sizeOption, key) => (
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

  // return <main className='flex justify-center my-12'>{content}</main>;
  return (
    <main className='p-6 grid grid-cols-1 md:grid-cols-2 md:my-6'>
      {content}
    </main>
  );
}
