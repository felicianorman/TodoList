import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import TodoView from "./TodoView"

const ShowTodo = () => {
    const todos = useContext(TodoContext)

    return(<>
    <div className="showTodos">
        {todos.map((todo) => (
            <TodoView todo={todo}></TodoView>
        ))}
    </div>
    </>)
}

export default ShowTodo