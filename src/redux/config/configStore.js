import {configureStore} from "@reduxjs/toolkit";

import todos from "../slices/todoSlice.js";

const store = configureStore({
    reducer: {todos: todos},
});

export default store;