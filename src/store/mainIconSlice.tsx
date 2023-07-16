import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  id: number;
  value: any;
};

const initialState: InitialState = { id: 1, value: 0 };
const mainIconSlice = createSlice({
  name: "mainIcon",
  initialState,
  reducers: {
    mainIcon: (state, action) => {
      // console.log(state);
      state.value = !state.value || action.payload;
    },
  },
});

export default mainIconSlice;
export const { mainIcon } = mainIconSlice.actions;
