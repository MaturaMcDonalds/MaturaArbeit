import React from 'react';
import Logo from "../../assets/Logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="links">
                <ul>
                    <li>Menu</li>
                    <li>McCafé</li>
                    <li>Was gibts Neues?</li>
                    <li>myOrder</li>
                    <li>myMcDonalds's</li>
                    <li>Familie</li>
                    <li>McDelivery</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;