import { configureStore } from "@reduxjs/toolkit";
import mainIconSlice from "./mainIconSlice";

const store = configureStore({
  reducer: {
    mainIcon: mainIconSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
