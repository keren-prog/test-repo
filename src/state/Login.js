import React, {useState} from 'react';
function Login () {
    const [ login, setLogin] = useState(0)
    
   

    function sum(){
        setLogin (login+1)
    }
    return (
        <div>
            <h1>Login</h1>
            {login}
           
            <button onClick={sum}>Login</button>
           
        </div>
    )
}
export default Login;