import React,{useEffect,useState} from "react";
const Counter = () =>{
    const [count,setCount] = useState(0);
    useEffect(()=>{

    },[count]);
    const handleIncrement = () =>{
        setCount((prev) => prev + 1)
    }
    const handleDecrement = () =>{
        setCount((prev) => prev - 1)
    }
    return(

        <>
            <div>
                <h1>Counter App</h1>
                <br/>
                <p>Count: {count}</p>
                <br/>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>

        </>
    )
}
export default Counter;