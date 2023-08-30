import "./LoginPage.scss";
import LoginHero from "../../components/LoginHero/LoginHero";
import Login from "../../components/Login/Login";
import ActionButton from "../../components/ActionButton/ActionButton";

function LoginPage() {

    return (
        <main className="site">  
            <LoginHero />
            <Login />
            <ActionButton innerText={"Login"} />
        </main>

    )
}

export default LoginPage