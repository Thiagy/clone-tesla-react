export default function FreedomToTravel(){

    return(
        <section className="div-electric-powertrain">{/*div freedom to travel*/}
                <div className="electric-powertrain-text">
                    <h1>Freedom to Travel</h1>
                    <p>Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.</p>
                </div>
                <div className="freedom-to-travel-image"></div>
                <div className="box-slide">
                    <div className="slide-map">
                        <div className="darkness-line"></div>
                        <p>San Francisco to Los Angeles</p>
                        <h2>383 miles</h2>
                    </div>
                    <div className="slide-map">
                        <div className="darkness-line"></div>
                        <p>Berkeley to Lake Tahoe</p>
                        <h2>178 miles</h2>
                    </div>
                    <div className="slide-map">
                        <div className="darkness-line"></div>
                        <p>Manhattan to Boston</p>
                        <h2>211 miles</h2>
                    </div>
                    <div className="slide-map">
                        <div className="darkness-line"></div>
                        <p>Fort Lauderdale to Orlando</p>
                        <h2>195 miles</h2>
                    </div>
                </div>
                <div className="div-button" style={{padding: '5vh'}}>
                    <button className="btn-border-black">Learn More</button>
                </div>
            </section>
    )
}