import "./DashboardRidesCard.scss";

function DashboardRidesCard({ride}) {

    return (
        <section>
            <div>
                <div>{"-->"}</div>
                <h2>Next Ride</h2>
            </div>
            <div>
                <h3>With {ride.driver}</h3>
            </div>
            <div>
                <p>From</p>
                <p>{ride.pick_up}</p>
                <hr />
                <p>To</p>
                <p>{ride.drop_off}</p>
            </div>
            <div>
                <button>edit</button>
                <button>cancel</button>
            </div>
        </section>
    )
}

export default DashboardRidesCard;