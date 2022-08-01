import React from "react";

const TodoContext = React.createContext<{
    items: Todo[];
    addTodo:()=> void;
    removeTodo:(id:string)=>void;

}>({
    items: [],
    addTodo: () => {},
    removeTodo: (id:string)=> {}
})

