import { useEffect, useState } from "react";

function Timer(){
    const [ count, setCount] = useState(0);


    useEffect(()=>{
        setTimeout(() => {
            setCount((count)=> count+1);
        }, 1000);
    },[count])

    return(<div>
        the count is {count}
    </div>)
}

export default Timer;
