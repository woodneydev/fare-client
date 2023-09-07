import DashboardRideCards from "../../components/DashboardRideCards/DashboardRideCards";
import "./PendingRidesPage.scss";
import PendingRideCards from "../../components/PendingRideCards/PendingRideCards";
import AddNewRide from "../../components/AddNewRide/AddNewRide";
import { useState } from "react";

function PendingRidesPage({userDetails, viewEdit, handleViewEdit}) {
    const [count, setCount] = useState(0);
    
    const handleUpdate = () => {
        setCount(prev => prev + 1);
    }

    return (
        <main className="all-rides">
            <h1 className="all-rides__title">Pending Rides</h1>
            {viewEdit ? <AddNewRide handleViewEdit={handleViewEdit} userDetails={userDetails} handleUpdate={handleUpdate} /> : null }
           <PendingRideCards userDetails={userDetails} />
        </main>
    )
}

export default PendingRidesPage;