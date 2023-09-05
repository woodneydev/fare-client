import "./AddNewRide.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNewRide() {
    const initialFormState = {
        start_location: "",
        end_location: "",
        start_date: "",
        end_time: "",
        fare: ""

    }

    const [formData, setFormData] = useState(initialFormState);
    const navigate = useNavigate();
    const postURL = "";
    
    const handleFormChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const combinedDateTime = `${start_date} ${end_time}`;

        const { start_location, end_location, start_date, end_time } = formData;

        const postObj = {
            start_location,
            end_location,
            start_time: combinedDateTime
        }

        axios.post(postURL, postObj)
            .then(response => {
                alert("Succesfully added new ride");
                navigate("/");
            })
            .catch(error => {
                alert("Something went wrong, please try again later");
            }) 
    }

    return (
        <form className="add-new" onChange={handleFormSubmit}>
            <label className="add-new__label" >
                <span className="add-new__label-title" >From</span>
                <input className="add-new__label-input" onChange={handleFormChange} name="start_location" type="text" value={formData.start_location} />
            </label>
            <label className="add-new__label" >
                <span className="add-new__label-title" >To</span>
                <input className="add-new__label-input" onChange={handleFormChange} name="end_location" type="text" value={formData.end_location} />
            </label>

            <label className="add-new__label" >
                <span className="add-new__label-title" >Date</span>
                <input className="add-new__label-input" onChange={handleFormChange} name="start_date" type="date" value={formData.start_date} />
            </label>

            <label className="add-new__label" >
                <span className="add-new__label-title" >Time</span>
                <input className="add-new__label-input" onChange={handleFormChange} name="start_time" type="time" value={formData.start_time} />
            </label>
            <label className="add-new__label" >
                <span className="add-new__label-title" >Fare</span>
                <input className="add-new__label-input" onChange={handleFormChange} name="start_time" type="time" value={formData.start_time} />
            </label>
        </form>
    )
}

export default AddNewRide;