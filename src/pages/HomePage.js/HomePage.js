import "./HomePage.scss";
import videobackground from "../../assets/videos/home-background.webm";

function HomePage() {

    return (
        <main>
            <video className="background" src={videobackground} type="video/webm" muted autoPlay loop>

            </video>

            <section className="content">

                <div className="content__box content__box--nav">
                    <h2>title</h2>
                </div>

                <div className="content__box content__box--info">
                    <h2>title</h2>
                </div>

                <div className="content__box content__box--interact">
                    <div className="advance">
                        <p className="advance__text">Find a ride</p>
                        <button className="advance__button">{"-->"}</button>
                    </div>
                </div>

            </section>
        
                    
        </main>
    )
}

export default HomePage;