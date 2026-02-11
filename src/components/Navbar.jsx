import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
import logo from "../assets/logo_s.png";
import search from "../assets/search.svg";

const Navbar = () => { 
    const location = useLocation();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(clicked=>!clicked); 
        console.log(clicked)
    };
    const handleClick2 = () => {
        setClicked(clicked => false);
        
    };

    // Helper function to check if a link is active
    const isActive = (path) => location.pathname === path;

    return (
        <div>
            <nav className="nav">
                <Link to="/" 
                    onClick={handleClick2}>
                    <img  className="logo" src={logo} alt="Logo" />
                    
                </Link>

                <div className={`links ${!clicked ? 'active1' : ''}`}>
                    <Link
                        to="/about"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/about') ? 'active font-bold text-lg' : ''}`}
                    >
                        Timeline
                    </Link>

                    <Link
                        to="/gallery"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/gallery') ? 'active font-bold text-lg' : ''}`}
                    >
                        Gallery
                    </Link>

                    <Link
                        to="/clubs"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/project') ? 'active font-bold text-lg' : ''}`}
                    >
                        Projects
                    </Link>

                    {/* <Link
                        to="/roombook"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/roombook') ? 'active font-bold text-lg' : ''}`}
                    >
                        Room Booking
                    </Link> */}
                     <Link
                        to="/Inventory"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/contact') ? 'active font-bold text-lg' : ''}`}
                    >
                        Inventory
                    </Link>
                    <Link
                        to="/inventive"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/inventive') ? 'active font-bold text-lg' : ''} `}
                    >
                        INVENTIVE'25
                    </Link>
                   
                    <Link
                        to="/Team"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/Team') ? 'active font-bold text-lg' : ''}`}
                    >
                        Team
                    </Link>
                    <Link
                        to="/contact"
                        onClick={handleClick}
                        className={`nav-link ${isActive('/contact') ? 'active font-bold text-lg' : ''}`}
                    >
                        Contact Us
                    </Link>
                   
                    
                </div>
                <div id="mobile" onClick={handleClick}>
                     <i id="bar" className={clicked ? 'fas fa-times':'fas fa-bars'}></i>
                </div> 
            </nav>
        </div>
    );
};

export default Navbar;