import DashboardRideCards from "../../components/DashboardRideCards/DashboardRideCards";
import "./PendingRidesPage.scss";
import PendingRideCards from "../../components/PendingRideCards/PendingRideCards";
import AddNewRide from "../../components/AddNewRide/AddNewRide";

function PendingRidesPage({userDetails, viewEdit, handleViewEdit}) {
    console.log(userDetails)
    return (
        <main className="all-rides">
            <h1 className="all-rides__title">Pending Rides</h1>
            {viewEdit ? <AddNewRide handleViewEdit={handleViewEdit} userDetails={userDetails} /> : null }
           <PendingRideCards userDetails={userDetails} />
        </main>
    )
}

export default PendingRidesPage;