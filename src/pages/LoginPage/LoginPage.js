import "./LoginPage.scss";
import LoginHero from "../../components/LoginHero/LoginHero";
import Login from "../../components/Login/Login";
import ActionButton from "../../components/ActionButton/ActionButton";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage({driver = false}) {
    
    const initialFormState = {email: "", password: ""}
    const [formData, setFormData] = useState(initialFormState);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();
    const token = sessionStorage.getItem('fareAuth');
    const pathAddOn = driver ? "driver/" : "";
    const getURL = "https://fare-app-b36c43511aea.herokuapp.com/accounts/current";

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
                setIsAuthorized(true);
                navigate(`/${pathAddOn}dashboard`);
            })
            .catch(error => {
                setIsAuthorized(false)
            })
    }, [token])
    
    const {LOGIN_RIDER_API_URL} = process.env;
    const handleFormChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const {email, password} = formData;
        const postObj = { data : {email, password} }
        
        axios.post("https://fare-app-b36c43511aea.herokuapp.com/accounts/login", postObj)
            .then(response => {
                sessionStorage.setItem("fareAuth", response.data.token);
                navigate(`/${pathAddOn}dashboard`)
            })
            .catch(error => {
                alert("Something went wrong, please try again later");
            })

    }

    return (
        <main className="site"> 
            <div className="site__animation">
                <LoginHero />
            </div> 
            <form className="site__form" onSubmit={handleFormSubmit}>
                <div className="site__form-organizer">
                    <Login formData={formData} handleFormChange={handleFormChange} driver={driver} />
                    <ActionButton innerText={"Login"} type={"submit"} />
                </div>
            </form>
        </main>

    )
}

export default LoginPage