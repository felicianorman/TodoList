import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { DispatchContext } from "../contexts/DispatchContext"
import { ActionType } from "../reducers/TodoReducer";
import '../scss/newTodo.scss'

const NewTodo = () => {
    const dispatch = useContext(DispatchContext);
    const [userValue, setUserValue] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        dispatch({
            type: ActionType.ADDED,
            payload: userValue
        })
    }

    const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
        setUserValue(e.target.value);
    }
 
    return (<>
    <div className="newTodos">
    <h2>Att göra</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" value={userValue} onChange={handleClick}></input>
        <button>Spara</button>
    </form>
    </div>
    </>)
}

export default NewTodo;