import React from 'react';
import Logo from "../../../assets/navbar/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    const toggle = () => {
        document.querySelector(".links").classList.toggle("open");
        document.querySelectorAll(".links li").forEach(link => {
            link.classList.toggle("fade");
        })
    }
    React.useEffect(() => {
        document.querySelector(".links").classList.remove("open");
        document.querySelectorAll(".links li").forEach(link => {
            link.classList.remove("fade");
        })
    }, [location]);
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/MaturaArbeit">
                        Unsere Maturaarbeit
                        </Link>
                    </li>
                    <li>
                        <Link to="/MaturaArbeit/McAktuell">
                        McAktuell
                        </Link>
                    </li>
                    <li>
                        <Link to="/MaturaArbeit/Geschichte">
                            McDonalds Vergangenheit
                        </Link>
                    </li>
                    <li>
                        <Link to="/MaturaArbeit/Marketing">
                            McMarketing
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="toggle" onClick={toggle}>
                <AiOutlineMenu size={40} />
            </div>
        </nav>
    );
}

export default Navbar;