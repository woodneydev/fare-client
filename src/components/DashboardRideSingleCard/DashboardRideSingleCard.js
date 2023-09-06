import "./DashboardRideSingleCard.scss";
import chevronCircle from "../../assets/icons/circle-chevron-right-solid.svg";
import editIcon from "../../assets/icons/pen-to-square-regular.svg";
import cancelIcon from "../../assets/icons/ban-solid.svg";
import starRating from "../../assets/utilities/starRating";

function DashboardRideSingleCard({ride, pending = false}) {
    
    const rating = starRating(ride.driver_rating);
    const cardTitle = pending ? "Finding Match..." : "Next Ride"
    const driverInfo = pending ? <h3 className="card__section-driver-info" >Pending...</h3>  : <h3 className="card__section-driver-info" >{ride.driver_name} | {rating} </h3> 
    
    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';

        if (hours === 0) {
            hours = 12;
        } else if (hours > 12) {
            hours = hours - 12;
        }

        const strMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
        return month + '/' + year + ' - ' + hours + ':' + strMinutes + ampm;
    }

    const dateFormatted = formatDate(ride.start_time);

    function getRandomColor() {
        return Math.random() < 0.5 ? 'orange' : 'green';
    }

    console.log("this is ride---------", ride)

    return (
        <section className={`card`} key={ride.id}>
            <div className="card__map">
                <div className="head-interact">
                    <p className={`head-interact__date green`} >{dateFormatted}</p>
                    <div className="head-interact__icons">
                        <img className="head-interact__icons-icn" src={editIcon} alt="edit icon" />
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