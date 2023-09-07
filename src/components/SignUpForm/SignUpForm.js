import { useState } from "react";
import ActionButton from "../ActionButton/ActionButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.scss"

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
            data: {
                last_name,
                email,
                password,
                first_name,
            }
        }

        console.log("postobj is__", postObj)

        axios.post("http://localhost:8080/accounts", postObj)
            .then(response => {
                alert('Sign up was a succes!');
                navigate("/");
            })
            .catch(error => {
                alert("Something went wrong, please try again later");
                console.log(error)
            })
    }

    return (
        <form className="signup-form" onSubmit={handleFormSubmit}>
            <label className="signup-form__label signup-form__label--first-name">
                First Name
                <input className="signup-form__input signup-form__input--first-name" name="first_name" type="text" onChange={handleFormChange} value={formData.first_name} />
            </label>
            <label className="signup-form__label signup-form__label--last-name">
                Last Name
                <input className="signup-form__input signup-form__input--last-name" name="last_name" type="text" onChange={handleFormChange} value={formData.last_name} />
            </label>
            <label className="signup-form__label signup-form__label--email">
                Email
                <input className="signup-form__input signup-form__input--email" name="email" type="text" onChange={handleFormChange} value={formData.email} />
            </label>
            <label className="signup-form__label signup-form__label--password">
                Password
                <input className="signup-form__input signup-form__input--password" name="password" type="text" onChange={handleFormChange} value={formData.password} />
            </label>
            <ActionButton className="signup-form__action-button" innerText={"Sign Up"} />
        </form>
    )
}

export default SignUpForm;