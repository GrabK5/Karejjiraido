import React from 'react';
import {Link} from 'react-router-dom';

import "./Navbar.css";
import Logo from "../assets/Logo.svg";

const navbar = props => {
    return (
        <header>
            <nav className='row nav-properties' style={{ backgroundColor: props.bgColor }}>
                <div className="col-6">
                    <Link to="/">
                        <img src={ Logo } alt="Logo" className="nav-logo" />
                        <span className="nav-logo align-middle">uLift</span>
                    </Link>
                </div>

                {}
            </nav>
        </header>
    );
};

export default navbar;