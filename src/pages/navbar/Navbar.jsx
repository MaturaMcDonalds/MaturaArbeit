import React from 'react';
import Logo from "../../assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="links">
                <ul>
                    <li>Unsere Maturaarbeit</li>
                    <li>McDonalds Geschichte</li>
                    <li>McMarketing</li>
                    <li>Zukunft</li>
                    <li>Text</li>
                    <li>Text</li>
                </ul>
            </div>
            <div className="sidebar">
                <AiOutlineMenu size={40} />
            </div>
        </nav>
    );
}

export default Navbar;