import Header from "../../components/Header/Header";
import "./NotAuthorizedPage.scss"

function NotAuthorizedPage() {

    return (
        <>
            <Header />
            <p className="auth-text">Please Login to view dashboard</p>
        </>
    )
}

export default NotAuthorizedPage;