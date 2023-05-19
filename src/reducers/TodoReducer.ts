import Todo from "../models/Todo";

export interface IAction {
    type: ActionType;
    payload: string;
}

export enum ActionType {
    ADDED,
    TOGGLED,
    REMOVED
}

const TodoReducer = (todos: Todo[], action: IAction) => {
    switch(action.type) {
        case ActionType.ADDED: {
            return [...todos, new Todo(action.payload, false, +crypto.randomUUID())]
        }
        break;
    }
    return todos;
}

export default TodoReducer;
