import "./Overlay.scss";
import { NavLink } from "react-router-dom";
import close from "../../assets/icons/close.png"

function Overlay({handleOverlay}) {

    return (
        <div className="overlay">
            <img onClick={handleOverlay} className="overlay__close" src={close} alt="close icon" />
            <h2 className="overlay__title" >Menu</h2>
            <ul className="overlay__list">
                <NavLink to={"/"} className="overlay__list-link" ><li className="overlay__list-link-item">Home</li></NavLink>
                <NavLink to={"/login"} className="overlay__list-link" ><li className="overlay__list-link-item">Login</li></NavLink>
                <NavLink to={"/dashboard"} className="overlay__list-link" ><li className="overlay__list-link-item">Rider</li></NavLink>
                <NavLink to={"/dashboard/driver"} className="overlay__list-link" ><li className="overlay__list-link-item">Driver</li></NavLink>
                <NavLink to={"/signup"} className="overlay__list-link" ><li className="overlay__list-link-item">Register</li></NavLink>
            </ul>
        </div>
    )
}

export default Overlay;