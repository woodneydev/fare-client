import "./LoginHero.scss";
import drivingConvertible from "../../../src/assets/videos/drivingConvertible.webm"
import hamburger from "../../assets/icons/hamburger.png"
function LoginHero() {

    return (
        <section className="hero">            
            <video className="hero__video" src={drivingConvertible} type="video/webm"  autoPlay="autoplay" loop muted>
            </video>
        </section>
    )
}

export default LoginHero;