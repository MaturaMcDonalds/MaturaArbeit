import React from 'react';
import Logo from "../../../assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Matura">
                            Unsere Maturaarbeit
                        </Link>
                    </li>
                    <li>
                        <Link to="/Geschichte">
                            McDonalds Geschichte
                        </Link>
                    </li>
                    <li>
                        <Link to="/Marketing">
                            McMarketing
                        </Link>
                    </li>
                    <li>
                        <Link to="Zukunft">
                            Zukunft
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebar">
                <AiOutlineMenu size={40} />
            </div>
        </nav>
    );
}

export default Navbar;