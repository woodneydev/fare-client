import "./HomePage.scss";
// import videobackground from "../../assets/videos/home-background.webm";
import videobackground from "../../assets/videos/redCarDriving.webm";
import hamburger from "../../assets/icons/hamburger.png";
import rightArrow from "../../assets/icons/arrow-right-solid.png";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/login");
    }

    return (
        <main>
            <video className="background" src={videobackground} type="video/webm" muted autoPlay loop>

            </video>
            <div className="all">
                <div>
                    
                    <section className="content">
                        <div className="content__box content__box--info">
                            <section className="headline">
                                <h1 className="headline__title">Rideshare That's Fair For the Rider and the Driver</h1>
                                <p className="headline__description">Discover never before seen rideshare features including: rider price filters, driver wage setting, calendar scheduling, and more.</p>
                            </section>
                        </div>

                        {/* <form className="content__box content__box--interact">
                            <div className="advance">
                                <p className="advance__text">Find a ride</p>
                                <button className="advance__button">{"-->"}</button>
                            </div>
                        </form> */}

                        <div onClick={handleHomeClick} className="content__box content__box--find">
                            <p className="content__box-search">Find a Ride</p>
                            <div className="content__box-arrow">
                                <img className="content__box-arrow-img" src={rightArrow} alt="arrow icon" />
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        
                    
        </main>
    )
}

export default HomePage;