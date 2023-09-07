import SignUpForm from "../../components/SignUpForm/SignUpForm";
import "./SignUpPage.scss";
import LoginHero from "../../components/LoginHero/LoginHero";

function SignUpPage() {

    return (
        <main className="site"> 
        <div className="site__animation">
            <LoginHero />
        </div> 
        <div className="site__form">
            <SignUpForm />
        </div>
        </main>
    )
}

export default SignUpPage;