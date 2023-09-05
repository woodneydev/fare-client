import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpForm() {

    const initialFormState = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState(initialFormState);
    const navigate = useNavigate()
    const postURL = ""

    const handleFormChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const {first_name, last_name, email, password} = formData

        const postObj = {
            first_name,
            last_name,
            email,
            password
        }

        axios.post("http://localhost:8080/accounts", postObj)
            .then(response => {
                alert('Sign up was a succes!');
                navigate("/");
            })
            .catch(error => {
                alert("Something went wrong, please try again later");
            })
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input name="first_name" type="text" onChange={handleFormChange} value={formData.first_name} />
            <input name="last_name" type="text" onChange={handleFormChange} value={formData.last_name} />
            <input name="email" type="text" onChange={handleFormChange} value={formData.email} />
            <input name="password" type="text" onChange={handleFormChange} value={formData.password} />
            <ActionButton innerText={"Sign Up"} />
        </form>
    )
}

export default SignUpForm;