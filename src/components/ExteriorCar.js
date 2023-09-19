export default function ExteriorCar({classImage}){
    return(
        <section className="div-video-car-interior">{/*div Designed for Efficiency*/}
                <div className={`div_image_column ${classImage}`}></div>
                <div className="div_flex_text_button">
                    <div  className="div_flex_button">
                        <p>Exterior</p>
                        <h1>Designed for Efficiency</h1>
                        <div>
                            <button className="btn-border-white" style={{marginBottom:'10px'}}>Order Now</button><br/>
                            <button className="btn-custom-order-designed-for-Efficiency">Custom Order</button>
                        </div>
                    </div>
                    <p className="div_flex_text">
                        With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.
                    </p>
                </div>
                <div className="car-attributes car-attributes-4">
                    <div className="car-attributes-text">
                        <p>Relentless Performance</p>
                        <p>Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>
                    </div>
                    <div className="car-attributes-image-4 car-attributes-image"></div>
                </div>
                <div className="car-attributes car-attributes-5">
                    <div className="car-attributes-image-5 car-attributes-image"></div>
                    <div className="car-attributes-text">
                        <p>Optimized Aerodynamics</p>
                        <p>Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</p>
                    </div>
                </div>
                <div className="car-attributes car-attributes-6">
                    <div className="car-attributes-text">
                        <p>Refined Styling</p>
                        <p>An iconic silhouette meets refreshed, elegant proportions.</p>
                    </div>
                    <div className="car-attributes-image-6 car-attributes-image"></div>
                </div>
            </section>
    )
}