import "./Login.scss"

function Login({driver = false}) {

    const titleMessage = driver ? "Fare Driver!": "Fare!" ;

    return (
        <section className="login">
            <h1 className="login__title">Login To <span>{titleMessage}</span></h1>
            <form className="login__form">
                <input className="login__form-input login__form-input--email" type="email" name="email" required />
                <input className="login__form-input login__form-input--password" type="password" name="password" required />
            </form>
        </section>
    )
}

export default Login;