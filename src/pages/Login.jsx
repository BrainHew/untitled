import React, {useContext} from 'react';
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
    }

    return (
        <div className="background1">
            <div className="auth2">
                <h1>Authorization</h1>
            </div>
            <div className="auth1">
                <form onSubmit = {login}>
                    <input type = "text" placeholder= "Логин"/>
                    <input type = "password" placeholder = "Пароль"/>
                    <button> Sign</button>
                </form>
            </div>
        </div>
    );
};

export default Login;