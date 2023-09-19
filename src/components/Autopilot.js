export default function Autopilot({objectCar}){
    return(
        <section id="section-6" className="autopilot">{/*AutoPilot*/}
            <div className="autopilot-image div_image_column">
                <div className="box-text-autopilot">
                    <div className="text-autopilot">
                        <h1>360°</h1>
                        <p className="text-autopilot-block">Rear, side and forward-facing cameras provide maximum visibility</p>
                        <p className="text-autopilot-none">Degress of visibility</p>
                    </div>
                    <div className="text-autopilot">
                        <h1>250 m</h1>
                        <p className="text-autopilot-block">Powerful visual processing at up to 250 meters of range</p>
                        <p className="text-autopilot-none">of Powerful Visual Processing</p>
                    </div>
                    <div className="text-autopilot">
                        <img src="images/pg-model-s/camera-image.png" alt=""/>
                        <p className="text-autopilot-block">Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking</p>
                        <p className="text-autopilot-none">Tesla Vision</p>
                    </div>
                </div>
            </div>
            <div className="div_flex_text_button">
                <div className="div_flex_button">
                    <p>Autopilot</p>
                    <h1>Future of Driving</h1>
                    <div>
                        <div className="div-learn-more" style={{marginBottom: '10px'}}>
                            <a href="#" className="btn-learn-more">+</a>
                            <p>Learn More</p>
                        </div>
                        <button className="btn-border-black">Order Now</button>
                    </div>
                </div>
                <p className="div_flex_text">
                    Autopilot's advanced safety and convenience features are designed to assist you with the most burdensome parts of driving. Chat with a Tesla Advisor to learn more about {objectCar.name} or schedule a demo drive today.
                </p>
            </div>
        </section>
    )
}