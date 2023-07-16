import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  id: number;
  value: any;
};

const initialState: InitialState = { id: 1, value: false };
const mainIconSlice = createSlice({
  name: "mainIcon",
  initialState,
  reducers: {
    iconClick: (state, action) => {
      console.log(state);
      state.value = !state.value || action.payload;
    },
  },
});

export default mainIconSlice;
export const { iconClick } = mainIconSlice.actions;
