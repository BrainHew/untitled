import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import logo from './HGS.png';
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
                    <Link to = "/main" style={{color: 'white', marginTop: 19}}>Main</Link>
                </div>
                <div className="box-3">
                    <Link to = "/tests" style={{color: 'white', marginTop: 19}}>Tests</Link>
                </div>
                <div className="box-4">
                    <Link to = "/about" style={{color: 'white', marginTop: 19}}>About</Link>
                </div>
                <div className="box-5" >
                    <button onClick={() => setIsAuth(false)}>
                        <p style={{color: 'white', marginTop: 12}}>Exit</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;