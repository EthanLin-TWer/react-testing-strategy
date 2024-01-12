import { createSlice } from '@reduxjs/toolkit'

export interface HomeState {
  loaded: boolean
}

const { actions, reducer } = createSlice({
  name: 'home',
  initialState: {
    loaded: false,
  },
  reducers: {
    loaded(state: HomeState) {
      state.loaded = true
    },
  },
})

export const { loaded } = actions
export default reducer
