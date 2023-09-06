import DashboardFooter from "../../components/DashboardFooter/DashboardFooter";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import NotAuthorizedPage from "../../pages/NotAuthorizedPage/NotAuthorizedPage";
import "./DashboardLayout.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"

function DashboardLayout({children}) {
    const [userDetails, setUserDetails] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [viewEdit, setViewEdit] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();

    const path = location.pathname;

    const getURL = "http://localhost:8080/accounts/current";
    const token = sessionStorage.getItem('fareAuth');

    // const handleFailedAuth = () => {
    //     setIsAuthorized(false);
    // }

    const handleLogout = () => {
		sessionStorage.removeItem("fareAuth");
		userDetails(null);
		isAuthorized(false);
        navigate("/");
	};

    const handleViewEdit = () => {
        setViewEdit(prev => !prev);
    }

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
                setIsAuthorized(false);
            })
    }, [token])

    const childrenWithProps = React.Children.map(children, (child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {userDetails, viewEdit, handleViewEdit})
        }
    }))

    if (!isAuthorized) return <NotAuthorizedPage />

    if (userDetails === null ) return <p>Loading...</p>

    return (
        <>
            <DashboardHeader user={userDetails} handleLogout={handleLogout} />
            {childrenWithProps}
            <DashboardFooter handleViewEdit={handleViewEdit} />
        </>
    )
}

export default DashboardLayout;