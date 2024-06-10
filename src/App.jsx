import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {useSelector} from "react-redux";

function App() {
    const todos = useSelector(state => state.todos.todos);

    return (
        <>
            <h1>투두리스트 타임어택</h1>
            <TodoForm/>
            <TodoList isDone={false} todos={todos}/>
            <TodoList isDone={true} todos={todos}/>
        </>
    );
}

export default App;
