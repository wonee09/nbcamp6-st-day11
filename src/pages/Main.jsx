import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { jsonApi } from "../api/axios";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { logout } from "../redux/slices/authSlice";

export default function Main() {
  const dispatch = useDispatch();

  const { data: todos, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await jsonApi.get(`/todos`);
      return data;
    },
  });

  if (isPending) return <h2>로딩중...</h2>;

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
