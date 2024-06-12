import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { logout } from "../redux/slices/authSlice";

export default function Main() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <>
      <h1>회원제 투두리스트</h1>
      <button onClick={() => dispatch(logout())}>로그아웃</button>
      <TodoForm />
      <TodoList isDone={false} todos={todos} />
      <TodoList isDone={true} todos={todos} />
    </>
  );
}
