import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
  IProductItem,
  IProductsState
} from '@/types/interfaces/products.interface'

import { RootState } from '../store'

const initialState: IProductsState = {
  products: [],
  newArrival: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductList: (
      state,
      action: PayloadAction<{ list: IProductItem[] }>
    ) => {
      state.products = action.payload.list

      return state
    },

    setNewArrivalList: (
      state,
      action: PayloadAction<{ list: IProductItem[] }>
    ) => {
      state.newArrival = action.payload.list

      return state
    }
  }
})

export const { setProductList, setNewArrivalList } = productSlice.actions

export const selectProductsData = (state: RootState) => state.products

export const productsReducer = productSlice.reducer
