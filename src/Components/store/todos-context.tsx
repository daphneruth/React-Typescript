import React from "react";
import Todo from "../../Models/todo";

const TodoContext = React.createContext<{
    items: Todo[];
    addTodo:()=> void;
    removeTodo:(id:string)=>void;

}>({
    items: [],
    addTodo: () => {},
    removeTodo: (id:string)=> {}
})
const TodosContextProvider:React.FC= (props)=> {
    return <TodosContext.Provider>{props.children}</TodosContext.Provider>
}

