import {useState} from "react";
import {useDispatch} from "react-redux";
import {createTodo} from "../redux/slices/todoSlice.js"
import {v4 as uuidv4} from 'uuid';

export default function TodoForm() {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const dispatch = useDispatch();


    const onSubmit = (e) => {
        e.preventDefault();

        if (!title && !contents) {
            alert("내용이나 제목을 입력해주세요.");
        }

        dispatch(createTodo({
            id: uuidv4(),
            title,
            contents,
            isDone: false
        }))

    }

    return (
        <form onSubmit={onSubmit}>
            <label>제목: </label>
            <input type="text" value={title}
                   onChange={(e) => setTitle(e.target.value)}/>
            <label>내용: </label>
            <input type="text" value={contents}
                   onChange={(e) => setContents(e.target.value)}/>
            <button type={"submit"}>추가</button>
        </form>
    );
}
