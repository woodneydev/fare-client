import "./DashboardRideSingleCard.scss";
import chevronCircle from "../../assets/icons/circle-chevron-right-solid.svg";
import editIcon from "../../assets/icons/pen-to-square-regular.svg";
import starRating from "../../assets/utilities/starRating";
import formatDate from "../../assets/utilities/formatDate";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function DashboardRideSingleCard({ride, pending = false}) {
    console.log("----------", ride)
    const [showEdit, setShowEdit] = useState(false)

    const rating = starRating(ride.driver_rating);
    const cardTitle = pending ? "Finding Match..." : "Next Ride";
    const driverInfo = pending ? <h3 className="card__section-driver-info" >Pending...</h3>  : <h3 className="card__section-driver-info" >{ride.driver_name} | {rating} </h3> ;
    

    const handleEdit = () => {
        setShowEdit(prev => !prev);
    }

    const dateFormatted = formatDate(ride.start_time);

    const displayEdit = pending ? <NavLink to={`http://localhost:3000/dashboard/edit/${ride.ride_id}`} > <img className="head-interact__icons-icn" src={editIcon} alt="edit icon" /></NavLink> : null;


    return (
        <section className={`card`} key={ride.id}>
            <div className="card__map">
                <div className="head-interact">
                    <p className={`head-interact__date green`} >{dateFormatted}</p>
                    <div className="head-interact__icons">
                        {displayEdit}
                    </div>
                </div>
            </div>
            <div className="card__section card__section--header">
                <div className="card__section-arrow" ><img className="card__section-arrow-img" src={chevronCircle} alt="chevron nav icon" /> </div>
                <h2 className="card__section-title" >{cardTitle}</h2>
            </div>
            <div className="card__section card__section--driver" >
                {driverInfo}
            </div>
            <div className="card__section card__section--ride-info" >
                <div className="card__section-foot" >
                    <p className="card__section-foot-where card__section-where--from" >From</p>
                    <p className="card__section-foot-location" >{ride.start_location}</p>
                    <p className="card__section-foot-where card__section-where--to" >To</p>
                    <p className="card__section-foot-location" >{ride.end_location}</p>
                </div>
                <div className="card__section-corner">
                    <p className="card__section-corner-text" >${ride.fare}</p>
                </div>
            </div>
        </section>
    )
}

export default DashboardRideSingleCard;