import "./AddNewRide.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import xMark from "../../assets/icons/xmark-solid.svg";

function AddNewRide({handleViewEdit, userDetails, handleUpdate}) {
    const initialFormState = {
        start_location: "",
        end_location: "",
        start_date: "",
        start_time: "",
        fare: ""
    };

    const [formData, setFormData] = useState(initialFormState);
    const navigate = useNavigate();
    const postURL = `http://localhost:8080/rides`;
    
    const handleFormChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    console.log(formData)
    const handleFormSubmit = (event) => {
        event.preventDefault();

        const { start_location, end_location, start_date, start_time, fare } = formData;
        
        const combinedDateTime = `${start_date} ${start_time}`;

        const postObj = { 
            data: {
                start_location,
                end_location,
                start_time: combinedDateTime,
                fare,
                rider_id: userDetails.id 
            }
        }
        console.log(postObj)
        axios.post(postURL, postObj)
            .then(response => {
                alert("Succesfully added new ride");
                navigate("/dashboard/rides");
                handleUpdate()
                handleViewEdit()

            })
            .catch(error => {
                alert("Something went wrong, please try again later");
                console.log(error)
            }) 
    }

    return (
        <div className="add-new-site">
            <div className="close">
                <img onClick={handleViewEdit} className="close__img" src={xMark} alt="x icon to exit out" />
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
                <div className="add-new__submit"><button className="add-new__submit-btn" type="submit">Add</button></div>
            </form>
        </div>
    )
}

export default AddNewRide;