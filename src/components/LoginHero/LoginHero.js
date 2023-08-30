import "./LoginHero.scss";
import drivingConvertible from "../../../src/assets/videos/drivingConvertible.mp4"

function LoginHero() {

    return (
        <section className="hero">      
            <h2 className="hero__header" >Fare!</h2>
            <video className="hero__video" src={drivingConvertible} type="video/mp4"  autoPlay="autoplay" loop muted>
            </video>
        </section>
    )
}

export default LoginHero;