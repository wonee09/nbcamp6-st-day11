import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const counterSlice = createSlice({
  name: "todos", // 이 모듈의 이름
  initialState, // 이 모듈의 초기상태 값
  reducers: {
    // 이 모듈의 Reducer 로직
    setTodos: (state, action) => {
      const newTodos = action.payload;
      state.todos = newTodos;
    },
    createTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    updateIsDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고

export const { createTodo, updateIsDone, deleteTodo, setTodos } =
  counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
