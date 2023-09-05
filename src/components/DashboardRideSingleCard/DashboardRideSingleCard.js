import "./DashboardRideSingleCard.scss"
import chevronCircle from "../../assets/icons/circle-chevron-right-solid.svg"

function DashboardRideSingleCard({ride, color}) {
    
    // const starRating = (rating) => {
    //     switch (rating) {
    //         case value < 2:
    //             return <div></div>
        
    //         default:
    //             break;
    //     }
    // }

    return (
        <section className={`card ${color}`} key={ride.id}>
            <div className="card__map"></div>
            <div className="card__section card__section--header">
                <div className="card__section-arrow" ><img className="card__section-arrow-img" src={chevronCircle} alt="chevron nav icon" /> </div>
                <h2 className="card__section-title" >Next Ride</h2>
            </div>
            <div className="card__section card__section--driver" >
                <h3 className="card__section-driver-info" >{ride.driver_name} | {ride.driver_rating}</h3>    
            </div>
            <div className="card__section card__section--ride-info" >
                <p className="card__section-where card__section-where--from" >From</p>
                <p className="card__section-location" >{ride.start_location}</p>
                <p className="card__section-where card__section-where--to" >To</p>
                <p className="card__section-location" >{ride.end_location}</p>
            </div>
            {/* <div className="card__section card__section--buttons" >
                <button className="card__section-btn card__section-btn--edit" >edit</button>
                <button className="card__section-btn card__section-btn--cancel" >cancel</button>
            </div> */}
        </section>
    )
}

export default DashboardRideSingleCard;