import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/TodoReducer";

export const DispatchContext = createContext<Dispatch<IAction>>(() => {
    return;
})