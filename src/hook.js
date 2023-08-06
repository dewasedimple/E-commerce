import { useState } from "react";



function HookDemo(){

    const[color,setColor] = useState("yellow");
    const[count,setCount] =useState(0);
    const [car, setCar] = useState({brand:"ford", model:"mustang", color:"white"})

    return(<>
    My favoriate color is {count}
    <button onClick={()=> setCount(count+1)}>ChangeColor</button>

    MY car color is {car.color}
    <button onClick={() =>setCar((car)=>{
        return {...car,color:"red"}
    })}>change color</button>
    </>)
}

export default HookDemo;