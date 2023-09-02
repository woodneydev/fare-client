import axios from "axios";
import { useState } from "react";

function DashboardPage() {
    const [userDetails, setUserDetails] = useState(null)

    return <>
        <h1>Welcome Rider</h1>

        <p>List of upcoming rides are below</p>
    </>
}

export default DashboardPage;