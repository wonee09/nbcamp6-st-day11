import { configureStore } from "@reduxjs/toolkit";

import todos from "../slices/todoSlice";
import auth from "../slices/authSlice";
const store = configureStore({
  reducer: { todos, auth },
});

export default store;
