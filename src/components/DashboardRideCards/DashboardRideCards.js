import "./DashboardRideCards.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import DashboardRideSingleCard from "../DashboardRideSingleCard/DashboardRideSingleCard";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";

function DashboardRideCards({userDetails}) {

    const [upcomingRides, setUpcomingRides] = useState(null)
    const token = sessionStorage.getItem('fareAuth');
    const getURL = "http://localhost:8080/rides";
    const endURL = `/${userDetails.id}/booked`;

    useEffect(() => {

        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    
        axios.get(getURL + endURL, headers)
            .then(response => {
                setUpcomingRides(response.data.data);
            })
            .catch(error => {
                alert("Unable to get upcoming rides, please try again later");
            })
    }, [token, endURL])

    if (upcomingRides === null) return <p>Loading...</p>

    const rideElements = upcomingRides.map(ride => {
        return <DashboardRideSingleCard ride={ride} />
    })

    return (
        <section className="dashboard-ride-card">
            <form className="form">
                <img className="form__search-icon" src={searchIcon} alt="search icon" />
                <input className="form__search-box" type="text" placeholder="Search" />
            </form>
            {rideElements}
        </section>
    )
}

export default DashboardRideCards;