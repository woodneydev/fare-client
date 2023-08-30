import "./LoginHero.scss";
import drivingConvertible from "../../../src/assets/videos/drivingConvertible.webm"
import hamburger from "../../assets/icons/hamburger.png"
function LoginHero() {

    return (
        <section className="hero">
            <div className="hero__nav">
                <h2 className="hero__header" >Fare!</h2>
                <img className="hero__img" src={hamburger} alt="hamburger menu" />
            </div>      
            
            <video className="hero__video" src={drivingConvertible} type="video/webm"  autoPlay="autoplay" loop muted>
            </video>
        </section>
    )
}

export default LoginHero;