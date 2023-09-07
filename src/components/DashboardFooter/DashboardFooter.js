import "./DashboardFooter.scss";
import { NavLink, useLocation } from "react-router-dom";
import homeIcon from "../../assets/icons/house-solid.svg"
import slashedHandshake from "../../assets/icons/handshake-slash-solid.svg"
import addIcon from "../../assets/icons/circle-plus-solid.svg"
import { useNavigate } from "react-router-dom";


function DashboardFooter({handleViewEdit, driver = false}) {

    const navigate = useNavigate();

    const handleHomeclick = () => {
        navigate("/dashboard");
    }

    const handleAllRidesClick = () => {
        navigate("/dashboard/rides")
    }

    const displayAdd = driver ? null : <div> <img onClick={handleViewEdit} className="footer__bar-link-img" src={addIcon} alt="add icon" /> </div>

    return (
        <footer className="footer">
            <div className="footer__bar">
                <div onClick={handleHomeclick} className="footer__bar-link" >
                    <img className="footer__bar-link-img" src={homeIcon} alt="home icon" />
                </div>
                <div onClick={handleAllRidesClick} className="footer__bar-link" >
                    <img className="footer__bar-link-img" src={slashedHandshake} alt="pending icon" />
                </div>
                {/* <div>
                    <img onClick={handleViewEdit} className="footer__bar-link-img" src={addIcon} alt="add icon" />
                </div> */}
                {displayAdd}
                
            </div>
        </footer>
    )
}

export default DashboardFooter;