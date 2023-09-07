import "./Header.scss";
import hamburger from "../../assets/icons/hamburger.png";
import logo from "../../assets/images/logo/fareCarLogo.png";
import { NavLink } from "react-router-dom"
import Overlay from "../Overlay/Overlay";
import { useState } from "react";

function Header() {

    const [viewOverLay, setViewOverlay] = useState(false)

    
    const handleOverlay = () => {
        setViewOverlay(prev => !prev);
    }
    
    const seeOverlay = viewOverLay ? <Overlay handleOverlay={handleOverlay} /> : null;

    return (
        <header>
            <nav className="nav">
                <div className="nav__section nav__section--start">
                    <div className="nav__section-logo">
                        <img className="nav__section-logo-img" src={logo} alt="logo" />
                    </div>
                    <h2 className="nav__section-title">Fare</h2>  
                </div>
                        
                <ul className="nav__section nav__section--mid">
                    <li className="nav__section-item"><NavLink className="nav__section-item-link" to={"/"}>Home</NavLink> </li>
                    <li className="nav__section-item"><NavLink className="nav__section-item-link" to={"/dashboard/driver"}>Driver</NavLink> </li>
                    <li className="nav__section-item"><NavLink className="nav__section-item-link" to="/login">Rider</NavLink> </li>
                    <li className="nav__section-item"><NavLink className="nav__section-item-link" to={"/"}>About Us</NavLink> </li>
                </ul>

                <ul className="nav__section nav__section--end">
                    <li className="nav__section-item"><NavLink className="nav__section-item-link" to={"/login"}>Login</NavLink> </li>
                    <li className="nav__section-item nav__section-item--register"><NavLink to={"/signup"} className="nav__section-item-link nav__section-item-link--register" >Register</NavLink> </li>
                </ul>
                <img onClick={handleOverlay} className="nav__img" src={hamburger} alt="hamburger menu" />
                {seeOverlay}
            </nav>
        </header>
    )
}

export default Header;