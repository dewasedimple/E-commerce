import { memo } from "react";
const Todos = (props) =>{
    console.log("Todos render");
    return(
        <>
        <h2>My Todos</h2>
        //
        {props.todos.map((elem, index, arr)=>{
            return <p key={index}>{elem}</p>
        })}
        </>
    )
}

export default memo(Todos);