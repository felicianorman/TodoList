import { useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";
import { TodoContext } from "../contexts/TodoContext";
import { DispatchContext } from "../contexts/DispatchContext";
import ShowTodo from "./ShowTodo";
import NewTodo from "./NewTodo";

const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, [])

    return(<>
    <TodoContext.Provider value={todos}>
        <DispatchContext.Provider value={dispatch}>
            <NewTodo></NewTodo>
            <ShowTodo></ShowTodo>
        </DispatchContext.Provider>
    </TodoContext.Provider>
    </>)
}

export default TodoApp;