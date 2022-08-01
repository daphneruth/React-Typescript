import React from "react";

const TodoContext = React.createContext<>({
    items: [],
    addTodo: () => {},
    removeTodo: (id:string)=> {}
})

