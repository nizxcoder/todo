import { createSlice } from '@reduxjs/toolkit';

const initialState = { total: 0, completed: 0 };

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increase(state, action) {
      state.total = action.payload;
    },

    decrease(state, action) {
      state.total = action.payload;
    },

    isCompleted(state, action) {
      state.completed = action.payload;
    },
  },
});

export const { increase, decrease, isCompleted } = todoSlice.actions;

export default todoSlice.reducer;
