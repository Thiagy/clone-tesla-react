export default function Interior({objectCar}){

    return(

        <section id="section-7" className="interior">
            <div className="interior-image div_image_column">
                <div className="box-text-autopilot">
                    <div className="text-autopilot">
                        <h1>15 inch</h1>
                        <p>A touchscreen display designed to improve over time</p>
                    </div>
                    <div className="text-autopilot">
                        <img src="images/pg-model-3/wi-fi-image.png" alt=""/>
                        <p>Over-the-air software updates introduce new features, functionality and performance</p>
                    </div>
                    <div className="text-autopilot">
                        <img src="images/pg-model-3/print-car-image.png" alt=""/>
                        <p>An expansive Glass Roof provides more headroom and UV protection</p>
                    </div>
                </div>
            </div>
            <div className="div_flex_text_button">
                <div className="div_flex_button">
                    <p>Interior</p>
                    <h1>Built Around the Driver</h1>
                    <div>
                        <div className="div-learn-more" style={{marginBottom: '10px'}}>
                            <button className="btn-learn-more">+</button>
                            <p>Learn More</p>
                        </div>
                        <button className="btn-border-black">Order Now</button>
                    </div>
                </div>
                <p className="div_flex_text">
                    The inside of {objectCar.name} is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.
                </p>
            </div>
        </section>
    )
}