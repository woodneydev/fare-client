import axios from "axios";
import { useState, useEffect } from "react";

function DashboardPage() {
    const [userDetails, setUserDetails] = useState(null)
    const [isAuthorized, setIsAuthorized] = useState(false)

    const getURL = "http://localhost:8080/accounts/current";
    const token = sessionStorage.getItem('fareAuth');
    console.log("the token is:", token)

    useEffect(() => {

        if (!token) {
            setIsAuthorized(false);
        }

        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    
        axios.get(getURL, headers)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
                
            })
    }, [token])

    if (!isAuthorized) return <p>Please login to view dashboard</p>

    if (userDetails === null ) return <p>Loading...</p>

    return <>
        <h1>Welcome Rider</h1>

        <p>List of upcoming rides are below</p>
    </>
}

export default DashboardPage;