import "./EditRide.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import leftArrow from "../../assets/icons/arrow-left-solid.svg";
import extractTime from "../../assets/utilities/extractTime";
import extractDate from "../../assets/utilities/extractDate";

function EditRide() {

    const {ride_id} = useParams();

    const initialFormState = {
        start_location: "",
        end_location: "",
        start_date: "",
        start_time: "",
        fare: ""
    };

    const [formData, setFormData] = useState(initialFormState);
    const navigate = useNavigate();
    const getURL = `https://fare-app-b36c43511aea.herokuapp.com/rides/specific/${ride_id}`;
    const putURL = `https://fare-app-b36c43511aea.herokuapp.com/rides/specific/${ride_id}`;
    const deleteURL = `https://fare-app-b36c43511aea.herokuapp.com/rides/specific/${ride_id}`;

    useEffect(() => {
        axios.get(getURL)
            .then(response => {
                const ride = response.data.data;
                const start_time = extractTime(response.data.data.start_time)
                const start_date = extractDate(response.data.data.start_time)
               
                const formUpdate = {
                    ...ride,
                    start_time,
                    start_date
                }

                setFormData(formUpdate)
            })
            .catch(error => {
                alert("Something went wrong, please try again")
            })
    }, [])
    
    const handleFormChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const { start_location, end_location, start_date, start_time, fare } = formData;
        
        const combinedDateTime = `${start_date} ${start_time}`;

        console.log(formData)

        const putObj = { 
            data: {
                id: ride_id,
                start_location,
                end_location,
                start_time: combinedDateTime,
                fare,
            }
        }
        axios.put(putURL, putObj)
            .then(response => {
                alert("Succesfully edited the ride");
                navigate("/dashboard/rides");
            })
            .catch(error => {
                alert("Something went wrong, please try again later");
                console.log("----------------------+++++++++----------------------")
                console.log(error)
            }) 
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    const handleCancelClick = () => {
        if (window.confirm("Are you sure you want to delete this ride?")) {
            axios.delete(deleteURL)
                .then(response => {
                    alert("Successfully deleted")
                    navigate("/dashboard/rides")
                })
                .catch(error => {
                    alert("Something went wrong, please try again later")
                })
        } else {
            
        }
    }

    return (
        <div className="add-new-site">
            <div className="close">
                <img onClick={handleBackButton} className="close__img" src={leftArrow} alt="x icon to exit out" />
            </div>
            <form className="add-new" onSubmit={handleFormSubmit}>
                <label className="add-new__label" >
                    <span className="add-new__label-title" >From</span>
                    <input className="add-new__label-input" onChange={handleFormChange} name="start_location" type="text" placeholder="Pick-up address" value={formData.start_location} required />
                </label>
                <label className="add-new__label" >
                    <span className="add-new__label-title" >To</span>
                    <input className="add-new__label-input" onChange={handleFormChange} name="end_location" type="text" placeholder="drop-off address" value={formData.end_location} required />
                </label>

                <label className="add-new__label" >
                    <span className="add-new__label-title" >Date</span>
                    <input className="add-new__label-input" onChange={handleFormChange} name="start_date" type="date" value={formData.start_date} required />
                </label>

                <label className="add-new__label" >
                    <span className="add-new__label-title" >Time</span>
                    <input className="add-new__label-input" onChange={handleFormChange} name="start_time" type="time" value={formData.start_time} required />
                </label>
                <label className="add-new__label" >
                    <span className="add-new__label-title" >Fare</span>
                    <input className="add-new__label-input add-new__label-input--fare" onChange={handleFormChange} name="fare" type="number" step="0.01" min="0" placeholder="$0.00" value={formData.fare} required />
                </label>
                <div className="add-new__submit">
                    <button className="add-new__submit-btn" type="submit">Edit</button>
                    <button onClick={handleCancelClick}  className="add-new__submit-btn" type="button">Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditRide;