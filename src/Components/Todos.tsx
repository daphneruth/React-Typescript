import React from "react";

const Todos:React.FC<{items:string}> = (props)=> {
  return (
    <div>
        <ul>
           {props.items}
        </ul>
    </div>
  )
}
export default Todos;