import "./DashboardHeader.scss";
import profilePic from "../../assets/images/profilePic.png";
import hamburger from "../../assets/icons/hamburger.png";

function DashboardHeader({user}) {

    const displayName = user.first_name ? user.first_name + " " : " User";

    return (
        <>
            <header className="header">
                <ul className="navbar">
                    <li className="navbar__item navbar__item--profile"><img className="navbar__item-profile-img" src={profilePic} alt="profile picture" /></li>
                    <li className="navbar__item navbar__item--welcome"><p className="navbar__item-identity">Welcome<span className="navbar__item-identity-name">{displayName}</span></p></li>
                    <li className="navbar__item navbar__item--menu"><img className="navbar__item-hamburger" src={hamburger} alt="hamburger menu"/></li>
                </ul>
            </header>
        </>
    )
}

export default DashboardHeader;