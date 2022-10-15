import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'home',
  initialState: {},
  reducers: {
    loaded(state) {},
  },
})
export const { loaded } = actions
export default reducer
