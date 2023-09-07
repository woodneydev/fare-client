import "./PendingRideCards.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import DashboardRideSingleCard from "../DashboardRideSingleCard/DashboardRideSingleCard";
import searchIcon from "../../assets/icons/magnifying-glass-solid.svg";

function PendingRideCards({userDetails , booked = false}) {

    const [upcomingRides, setUpcomingRides] = useState(null)
    const [search, setSearch] = useState("");
    const [filteredRides, setFilteredRides] = useState(null)
    const token = sessionStorage.getItem('fareAuth');
    const getURL = "http://localhost:8080/rides";
    const endURL = `/${userDetails.id}` ;

    const handleSearchChange = (event) => {

        setSearch(event.target.value)

        if (upcomingRides) {
            const filtered = upcomingRides.filter(ride => {
                return ride.start_location.toLowerCase().includes(event.target.value.toLowerCase()) || ride.end_location.toLowerCase().includes(event.target.value.toLowerCase()) || ride.start_location.toLowerCase().split(" ").includes(event.target.value.toLowerCase()) || ride.end_location.toLowerCase().includes(event.target.value.toLowerCase()) || ride.end_location.toLowerCase().split(" ").includes(event.target.value.toLowerCase())
            })
            setFilteredRides(filtered)
        }
       
    }   

    useEffect(() => {

        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    
        axios.get(getURL + endURL, headers)
            .then(response => {
                setUpcomingRides(response.data.data);
                setFilteredRides(response.data.data)
            })
            .catch(error => {
                alert("Unable to get upcoming rides, please try again later");
            })
    }, [token, endURL])

    if (filteredRides === null) return <p>Loading...</p>

    const rideElements = filteredRides.map(ride => {
        return <DashboardRideSingleCard key={ride.id} ride={ride} pending={true} />
    })

    const noRidesMessage = !filteredRides.length ? <p className="no-rides">No rides match this criteria</p> : null;

    return (
        <section className="dashboard-ride-card">
            <form className="form">
                <img className="form__search-icon" src={searchIcon} alt="search icon" />
                <input onChange={handleSearchChange} className="form__search-box" type="text" placeholder="Search by address" value={search} />
                {noRidesMessage}
            </form>
            <div className="card-els">
                {rideElements}
            </div>
        </section>
    )
}

export default PendingRideCards;