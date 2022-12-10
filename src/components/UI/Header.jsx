import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className ="header">
            <div className="container">
                <div className="box-1">

                </div>
                <div className="box-2">
                    <Link to = "/tests"></Link>
                </div>
                <div className="box-3">
                    <Link to = "/main"></Link>
                </div>
                <div className="box-4">
                    <Link to = "/about"></Link>
                </div>
                <div className="box-5">
                    Sign
                </div>
            </div>
        </div>
    );
};

export default Header;