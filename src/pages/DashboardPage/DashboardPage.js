import "./DashboardPage.scss";
import DashboardRideCards from "../../components/DashboardRideCards/DashboardRideCards";

function DashboardPage({userDetails}) {

    return <main className="main">
        {/* <h1>Welcome Rider</h1>

        <p>List of upcoming rides are below</p> */}

        <DashboardRideCards userDetails={userDetails} />
    </main>
}

export default DashboardPage;