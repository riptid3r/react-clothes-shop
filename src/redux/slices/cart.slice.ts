import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ICartItem, ICartState } from '@/types/interfaces/cart.interface'

import { RootState } from '../store'

const initialState: ICartState = {
  cart: [],
  isLoading: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading

      return state
    },
    setCart: (state, action: PayloadAction<{ list: ICartItem[] }>) => {
      state.cart = action.payload.list

      return state
    },
    clearCart: (state) => {
      state.cart = []

      return state
    },
    addInCart: (state, action: PayloadAction<{ item: ICartItem }>) => {
      state.cart.push(action.payload.item)

      return state
    },
    removeFromCart: (state, action: PayloadAction<{ itemId: number }>) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload.itemId
      )

      return state
    },
    setItemSize: (
      state,
      action: PayloadAction<{ itemId: number; size: string }>
    ) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.itemId
      )

      if (itemIndex === -1) return

      state.cart[itemIndex] = {
        ...state.cart[itemIndex],
        size: action.payload.size
      }

      return state
    },
    setItemQuantity: (
      state,
      action: PayloadAction<{ itemId: number; value: number }>
    ) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.itemId
      )

      if (itemIndex === -1) return

      state.cart[itemIndex] = {
        ...state.cart[itemIndex],
        quantity: action.payload.value
      }

      return state
    }
  }
})

export const {
  setCart,
  clearCart,
  addInCart,
  removeFromCart,
  setItemQuantity,
  setItemSize,
  setLoading
} = cartSlice.actions

export const selectCartData = (state: RootState) => state.cart

export const cartReducer = cartSlice.reducer
