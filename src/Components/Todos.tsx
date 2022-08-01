import React from "react";

const Todos:React.FC<{items:string[]}> = (props)=> {
  return (
    <div>
        <ul>
           {props.items.map((item)=><li></li>)}
        </ul>
    </div>
  )
}
export default Todos;