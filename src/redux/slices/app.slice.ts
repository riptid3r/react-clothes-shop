import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IAppState } from '@/types/interfaces/app.interface'

import { RootState } from '../store'

const initialState: IAppState = {
  showBurger: false,
  showCart: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setBurgerVisibility: (state, action: PayloadAction<{ value: boolean }>) => {
      state.showBurger = action.payload.value

      return state
    },
    setCartVisibility: (state, action: PayloadAction<{ value: boolean }>) => {
      state.showCart = action.payload.value

      return state
    }
  }
})

export const { setBurgerVisibility, setCartVisibility } = appSlice.actions

export const selectAppData = (state: RootState) => state.app

export const appReducer = appSlice.reducer
