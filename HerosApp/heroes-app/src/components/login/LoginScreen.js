import React, { useContext } from "react";

import { Fragment } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

//utilizando las props del react router dom =>history
const LoginScreen = ({history}) => {
    
    const lastPath=localStorage.getItem('lastPath')   || '/';
   
    // extrarer dispatch del context
    //la cual es la funcion para login y logout
    const {dispatch} = useContext(AuthContext);
    

    //mandar un action del tipo auth-login
    const action={
        type: types.login,
        payload:{name:'Antonio'}    
    }
    
    const handleLogin=()=>{
        
        //  console.log(history.push('/marvel'))
        //  console.log(history.replace('/')) 
        const obj=dispatch(action);
        //el obj a mandar debe ser name:'Antonio'
            history.replace(lastPath);
       
        


 }
 return(

    <div>
            <div className='container'>
                <h1>Login</h1>
            </div>
            <br/>
            <button className='btn btn-primary' 
            onClick={handleLogin} >
                Login

            </button>

    </div>

 );
 
};

export default LoginScreen;