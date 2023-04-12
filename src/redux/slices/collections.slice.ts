import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import {
  ICollectionItem,
  ICollectionsState
} from '@/types/interfaces/collections.interface'

import { RootState } from '../store'

const initialState: ICollectionsState = {
  collections: []
}

export const collectionsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCollections: (
      state,
      action: PayloadAction<{ list: ICollectionItem[] }>
    ) => {
      state.collections = action.payload.list

      return state
    }
  }
})

export const { setCollections } = collectionsSlice.actions

export const selectCollectionsData = (state: RootState) => state.collections

export const collectionsReducer = collectionsSlice.reducer
