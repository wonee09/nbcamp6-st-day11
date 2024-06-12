import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../redux/slices/todoSlice";
import TodoItem from "./TodoItem";

export default function TodoList({ isDone, todos }) {
  return (
    <section>
      <h2>{isDone ? "Done..." : "Working..."}</h2>
      <ul>
        {todos
          ?.filter((todo) => todo.isDone === isDone)
          ?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </ul>
    </section>
  );
}
