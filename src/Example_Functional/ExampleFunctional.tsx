import {useState} from "react";

const ExampleFunctional = () => {
    const [count,setCount] = useState<number>(0);
    const addNumber = () =>{
        setCount(count+1)
    }
    const minNumber = () =>{
        setCount(count-1)
    }
    return (
        <div>
            <h1>Functional Component</h1>
            {count}
            <button onClick={minNumber}>-</button>
            <button onClick={addNumber}>+</button>
        </div>
    )
}

export default ExampleFunctional