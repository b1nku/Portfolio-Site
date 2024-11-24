import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar">
            <div className="container"><img src="assets/img/KILLMOUSKIlogo.png" width="194" height="40" style={{
                WebkitFilter: "drop-shadow(2px 2px 2px #888)",
                filter: "drop-shadow(2px 2px 2px #888)"
            }} /><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/grotto">birkes' grotto</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/swamp">ansie's swamp</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/weather">weather</Link></li>
                    </ul>
                </div>
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default Navbar;