import { useRef } from "react";
import React from "react";

const NewTodo =()=>{
    const todoInputRef =useRef<HTMLInputElement>(null);
const submitHandler =(event:React.FormEvent) =>{
    event.preventDefault();

    const enteredText = todoInputRef.current?.value;
};
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type='text' id="text" ref={todoInputRef}/>
            
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo;