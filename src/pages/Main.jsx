import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { jsonApi } from "../api/axios";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { logout } from "../redux/slices/authSlice";
import { setTodos } from "../redux/slices/todoSlice";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTodos = async () => {
      const { data } = await jsonApi.get(`/todos`);
      dispatch(setTodos(data));
    };
    getTodos();
  }, []);
  return (
    <>
      <h1>회원제 투두리스트</h1>
      <button onClick={() => dispatch(logout())}>로그아웃</button>
      <TodoForm />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
}
