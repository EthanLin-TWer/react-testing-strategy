import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'contact',
  initialState: {},
  reducers: {
    loaded(state, action) {},
  },
})
export const { loaded } = actions
export default reducer
