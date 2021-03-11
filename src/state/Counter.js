import React, {useState} from 'react';
function Counter () {
    const [ count, setCount] = useState('hi')
    // const [ username, setUsername] = useState ()
    // const [password, setPassword] = useState ()

    function sum(){
        setCount (count+1)
    }
    function sub(){
        setCount (count-1)
    }

    function multiply(){
        setCount (count*3)
    }

    function hello(){
        setCount ('hello')
    }

    
// const sum=() => {
//     setCount (count+1)
// }

    return (
        <div>
            <h1>Counter</h1>
            {count}
            {/* {username}
            {password} */}

            <button onClick={sum}>submit</button>
            <button onClick={sub}>submit</button>
            <button onClick={multiply}>submit</button>
            <button onClick={hello}>hello</button>
            {/* <button onclick={sum}>submit</button> */}
        </div>
        
    )
}
export default Counter;

