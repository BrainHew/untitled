import React, {useContext} from 'react';
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit = {login}>
                <input type = "text" placeholder= "Введите логин"/>
                <input type = "password" placeholder = "Введите пароль"/>
                <button> Войти</button>
            </form>
        </div>
    );
};

export default Login;