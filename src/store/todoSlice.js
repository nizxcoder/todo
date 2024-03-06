import { createSlice } from '@reduxjs/toolkit';

const initialState = { pending: 0, completed: 0 };

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increase(state, action) {
      state.pending = action.payload;
    },

    decrease(state, action) {
      state.pending = action.payload;
    },

    isCompleted(state, action) {
      state.completed = action.payload;
    },
  },
});

export const { increase, decrease,isCompleted } = todoSlice.actions;

export default todoSlice.reducer;
