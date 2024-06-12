import axios from "axios";
import { useDispatch } from "react-redux";
import { jsonApi } from "../api/axios.js";
import { deleteTodo, updateIsDone } from "../redux/slices/todoSlice.js";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const toggleTodo = async (id) => {
    const { data: todo } = await jsonApi.get(`/todos/${id}`);
    await jsonApi.patch(`/todos/${id}`, {
      isDone: !todo.isDone,
    });
    dispatch(updateIsDone(todo.id));
  };

  const removeTodo = async (id) => {
    await jsonApi.delete(`/todos/${id}`);
    dispatch(deleteTodo(id));
  };

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {todo.title}</p>
        <p>내용: {todo.contents}</p>
      </section>
      <section>
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
        <button onClick={() => removeTodo(todo.id)}>삭제</button>
      </section>
    </li>
  );
}
