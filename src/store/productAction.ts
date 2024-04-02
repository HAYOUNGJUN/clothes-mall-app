import { replaceProducts } from './productSlice';
import { AppDispatch } from './store';

export function fetchProductData(searchQuery: string) {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const url = `https://my-json-server.typicode.com/HAYOUNGJUN/clothes-mall-app/products?q=${searchQuery}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Could not feth product data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const productData = await fetchData();
      dispatch(replaceProducts(productData || []));
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };
}
