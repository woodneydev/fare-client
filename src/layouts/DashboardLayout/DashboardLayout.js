import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import "./DashboardLayout.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function DashboardLayout({children}) {
    const [userDetails, setUserDetails] = useState(null)
    const [isAuthorized, setIsAuthorized] = useState(false)

    const getURL = "http://localhost:8080/accounts/current";
    const token = sessionStorage.getItem('fareAuth');

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
                setIsAuthorized(true)
                setUserDetails(response.data.data)
            })
            .catch(error => {
                setIsAuthorized(false)
            })
    }, [token])

    console.log(userDetails)

    if (!isAuthorized) return <p>Please login to view dashboard</p>

    if (userDetails === null ) return <p>Loading...</p>

    return (
        <>
            <DashboardHeader user={{}} />
            {children}
        </>
    )
}

export default DashboardLayout;