import React from 'react';
import Logo from "../../assets/Logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">

            </div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Advert</li>
                    <li>Media</li>
                    <li>Burger</li>
                    <li>About us</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
// <img src={Logo} alt="Logo" />