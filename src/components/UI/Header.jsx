import React from 'react';
import {Link} from "react-router-dom";
import logo from './HGS.png';
import button from './кнопки.png';

const Header = () => {
    return (
        <div className ="header">
            <div className="container">
                <div className="box-1">
                    <img src={logo} alt={'logo'} width={130} height={126} style = {{marginTop: -30}}/>
                </div>
                    <div className="box-2">
                        <img src={button} alt={'button'} width={190} height={95}/>
                        Tests
                    <Link to = "/tests"></Link>
                </div>
                <div className="box-3">

                    <img src={button} alt={'button'} width={190} height={95}/>
                    Main
                    <Link to = "/main"></Link>
                </div>
                <div className="box-4">
                    <img src={button} alt={'button'} width={190} height={95}/>
                    About
                    <Link to = "/about"></Link>
                </div>
                <div className="box-5">
                    <img src={button} alt={'button'} width={190} height={95}/>
                    Sign
                </div>
            </div>
        </div>
    );
};

export default Header;