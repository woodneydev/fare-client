import "./DashboardPage.scss";
import DashboardRideCards from "../../components/DashboardRideCards/DashboardRideCards";
import AddNewRide from "../../components/AddNewRide/AddNewRide";

function DashboardPage({userDetails, viewEdit, handleViewEdit}) {
    console.log(userDetails)

    return <main className="main">
        {/* <h1>Welcome Rider</h1>

        <p>List of upcoming rides are below</p> */}
         {viewEdit ? <AddNewRide handleViewEdit={handleViewEdit} userDetails={userDetails} /> : null }
         <h1 className="main__title">Upcoming Rides</h1>
        <DashboardRideCards userDetails={userDetails} />
    </main>
}

export default DashboardPage;