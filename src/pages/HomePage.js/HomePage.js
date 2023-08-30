import "./HomePage.scss";
import videobackground from "../../assets/videos/home-background.webm";
import hamburger from "../../assets/icons/hamburger.png";

function HomePage() {

    return (
        <main>
            <video className="background" src={videobackground} type="video/webm" muted autoPlay loop>

            </video>

            <section className="content">

                <div className="content__box content__box--nav">
                    <nav className="nav">
                        <div className="nav__section nav__section--start">
                          <h2 className="nav__start-title">Fare</h2>  
                        </div>
                        
                        <ul className="nav__section nav__section--mid">
                            <li className="nav__section-item">Home</li>
                            <li className="nav__section-item">Driver</li>
                            <li className="nav__section-item">Rider</li>
                            <li className="nav__section-item">About Us</li>
                        </ul>

                        <ul className="nav__section nav__section--end">
                            <li className="nav__section-item">Login</li>
                            <li className="nav__section-item">Register</li>
                        </ul>
                        <img className="nav__img" src={hamburger} alt="hamburger menu" />
                    </nav>
                </div>

                <div className="content__box content__box--info">
                    <section className="headline">
                        <h1 className="headline__title">Rideshare That's Fair For the Rider and the Driver</h1>
                        <p className="headline__description">Discover never seen before rideshare features including: rider price filters, driver wage setting, calendar scheduling, and more.</p>
                    </section>
                </div>

                <form className="content__box content__box--interact">
                    <label className="advance">
                        <p className="advance__text">Find a ride</p>
                        <button className="advance__button">{"-->"}</button>
                    </label>
                </form>

            </section>
        
                    
        </main>
    )
}

export default HomePage;