import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export type ProductItem = {
  id: number;
  img: string;
  title: string;
  price: number;
  choice: boolean;
  new: boolean;
  size: string[];
};

type ProductsState = {
  items: ProductItem[];
};

const initialState: ProductsState = {
  items: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // getProductDetail: (state, action: PayloadAction<number>) => {
    //   const filteredProduct = state.items.filter(
    //     (item) => item.id === action.payload
    //   );
    //   state.items = filteredProduct;
    // },
  },
});

// export const { getProductDetail } = productSlice.actions;

export default productSlice.reducer;
