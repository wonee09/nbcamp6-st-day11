import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { jsonApi } from "../api/axios.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: (newTodo) => jsonApi.post(`/todos`, newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!title && !contents) {
      alert("내용이나 제목을 입력해주세요.");
    }
    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
      createdAt: Date.now(),
    };
    addMutation.mutate(newTodo);
    // dispatch(createTodo(newTodo));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>내용: </label>
      <input
        type="text"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <button type={"submit"}>추가</button>
    </form>
  );
}
