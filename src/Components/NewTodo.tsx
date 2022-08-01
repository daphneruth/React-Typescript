import { useRef } from "react";
import React from "react";

const NewTodo =()=>{
    const todoInputRef =useRef();
const submitHandler =(event:React.FormEvent) =>{
    event.preventDefault();
};
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type='text' id="text"/>
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo;