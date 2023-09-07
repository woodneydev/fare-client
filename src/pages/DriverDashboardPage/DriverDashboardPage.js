import { useEffect, useState } from "react";
import AddNewRide from "../../components/AddNewRide/AddNewRide";
import DashboardRideCards from "../../components/DashboardRideCards/DashboardRideCards";
import axios from "axios";

function DriverDashBoardPage({userDetails, viewEdit, handleViewEdit}) {
    console.log(userDetails)
    const [count, setCount] = useState(0);
    const [allRides, setAllRides] = useState(null);
    
    const handleUpdate = () => {
        setCount(prev => prev + 1);
    }

    useEffect(() => {
        axios.get(`https://fare-app-b36c43511aea.herokuapp.com/rides/all/${userDetails.id}`)
            .then(response => {
                console.log(response.data.data)
                setAllRides(response.data.data)
            })
    }, [])

    const handleAdd = (rideId) => {
        if (window.confirm("Do you want to add this ride to your queue?")) {
           const postObj = {
            data: {
                ride_id: rideId,
                driver_id: userDetails.id
            }
           }
            axios.post("https://fare-app-b36c43511aea.herokuapp.com/rides/all", postObj)
                .then(response => {
                    setCount(prev => prev + 1)
                })
                .catch(error => {
                    alert("something went wrong")
                    console.log(error)
                })
            
        } else {
            // Action to be taken if user clicks "Cancel"
            console.log("User chose not to continue");
        }
    }

    if (!allRides) return <p>Loading...</p>

    const list = allRides.map(ride => {
        console.log(ride)
        return (
            <p key={ride.id}> No - {ride.id} - From {ride.start_location} - To {ride.end_location} - Price {ride.fare}   </p>
            // <p className="all-rides" key={ride.id}> No: {ride.id} | From: {ride.start_location} | To: {ride.end_location} | $: {ride.fare}  <button onClick={() => {handleAdd(ride.id)}} type="button" >add</button>  </p>
        )
    })

    

    return <main className="main">
        {/* <h1>Welcome Rider</h1>

        <p>List of upcoming rides are below</p> */}
         {/* {viewEdit ? <AddNewRide handleViewEdit={handleViewEdit} userDetails={userDetails} handleUpdate={handleUpdate} /> : null } */}
         <h1 className="main__title">Driver Rides</h1>
        {/* <DashboardRideCards userDetails={userDetails} /> */}
        {list}
    </main>
}

export default DriverDashBoardPage;