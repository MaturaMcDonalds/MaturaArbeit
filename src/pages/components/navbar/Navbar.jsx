import React from 'react';
import Logo from "../../../assets/navbar/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {
    let history = useHistory();
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
                <img src={Logo} alt="Logo" onClick={()=>{history.push("/")}}/>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/MaturaArbeit/Matura">
                        Unsere Maturaarbeit
                        </Link>
                    </li>
                    <li>
                        <Link to="/MaturaArbeit/McVergangenheit">
                            McVergangenheit
                        </Link>
                    </li>
                    <li>
                        <Link to="/MaturaArbeit/McAktuell">
                            McAktuell & Werbepyschologie
                        </Link>
                    </li>
                    <li>
                        <Link to="/MaturaArbeit/McZukunft">
                            McZukunft
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