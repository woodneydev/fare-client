import "./LogoutPrompt.scss"

function LogoutPrompt({handleLogout}) {

    return (
        <div className="logout">
            <button onClick={handleLogout} type="button" className="logout__text">Logout</button>
        </div>
    )
}

export default LogoutPrompt;