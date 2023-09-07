import "./DashboardHeader.scss";
import profilePic from "../../assets/images/profilePic.png";
import hamburger from "../../assets/icons/hamburger.png";
import { useState } from "react";
import LogoutPrompt from "../LogoutPrompt/LogoutPrompt";


function DashboardHeader({user, handleLogout}) {

    const displayName = user.first_name ? user.first_name + " " : " User";
    const [viewLogout, setViewLogout] = useState(false)

    const handleViewLogout = () => {
        setViewLogout(prev => !prev)
    }

    const logView = viewLogout ? <LogoutPrompt handleLogout={handleLogout}  /> : null;

    return (
        <>
            <header className="header">
                <ul className="navbar">
                    <li className="navbar__item navbar__item--profile"><img className="navbar__item-profile-img" src={profilePic} alt="profile picture" /></li>
                    <li className="navbar__item navbar__item--welcome"><p className="navbar__item-identity">Welcome <span className="navbar__item-identity-name">{displayName}</span></p></li>
                    <li onClick={handleViewLogout} className="navbar__item navbar__item--menu"><img className="navbar__item-hamburger" src={hamburger} alt="hamburger menu"/></li>
                    {logView}
                </ul>
            </header>
        </>
    )
}

export default DashboardHeader;