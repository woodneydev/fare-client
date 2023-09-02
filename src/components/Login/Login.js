import "./Login.scss"

function Login({formData, handleFormChange, driver = false}) {

    const {email, password} = formData;

    const driverDescription = "Welcome to fare. Sign in to use Fare Driver";
    const riderDescription = "Welcome to fare. Sign in to use Fare Rider"

    const titleMessage = driver ? "Fare Driver!": "Fare!" ;
    const descriptionMessage = driver ? driverDescription : riderDescription;

    return (
        <section className="login">
            <h1 className="login__title">Login To <span className="login__title-acsent">{titleMessage}</span></h1>
            <div className="login__form">
                <p className="login__form-message">{descriptionMessage}</p>
                <input className="login__form-input login__form-input--email" onChange={handleFormChange} value={email} type="email" name="email" placeholder="Enter your email address" required />
                <input className="login__form-input login__form-input--password" onChange={handleFormChange} value={password} type="password" name="password" placeholder="Enter your password" required />
            </div>
        </section>
    )
}

export default Login;