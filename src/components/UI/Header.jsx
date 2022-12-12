import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import logo from './HGS.png';
import button from './кнопки.png';
import {AuthContext} from "../../context";

const Header = () => {
    const {setIsAuth} = useContext(AuthContext);
    return (
        <div className ="header">
            <div className="container">
                <div className="box-1">
                    <img src={logo} alt={'logo'} width={130} height={126} style = {{marginTop: -20}}/>
                </div>
                <div className="box-2">
                    <img src={button} alt={'button'} width={150} height={75}/>
                        <Link to = "/main" style={{color: 'white', marginTop: -70}}>Главная</Link>
                </div>
                <div className="box-3">
                    <img src={button} alt={'button'} width={150} height={75}/>
                    <Link to = "/tests" style={{color: 'white', marginTop: -70}}>Тесты</Link>
                </div>
                <div className="box-4">
                    <img src={button} alt={'button'} width={150} height={75}/>
                    <Link to = "/about" style={{color: 'white', marginTop: -70}}>О нас</Link>
                </div>
                <div className="box-5" >
                    <button onClick={() => setIsAuth(false)}>
                        <img src={button} alt={'button'} width={150} height={75} style={{marginTop: -24}}/>
                        <p style={{color: 'white', marginTop: -75}}>Выйти</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;