import "./DashboardFooter.scss";
import { NavLink, useLocation } from "react-router-dom";
import homeIcon from "../../assets/icons/house-solid.svg"
import slashedHandshake from "../../assets/icons/handshake-slash-solid.svg"
import addIcon from "../../assets/icons/circle-plus-solid.svg"


function DashboardFooter() {
    return (
        <footer className="footer">
            <div className="footer__bar">
                <NavLink className="footer__bar-link" >
                    <img className="footer__bar-link-img" src={homeIcon} alt="home icon" />
                </NavLink>
                <NavLink className="footer__bar-link" >
                    <img className="footer__bar-link-img" src={slashedHandshake} alt="pending icon" />
                </NavLink>
                <NavLink className="footer__bar-link" >
                    <img className="footer__bar-link-img" src={addIcon} alt="add icon" />
                </NavLink>
            </div>
        </footer>
    )
}

export default DashboardFooter;