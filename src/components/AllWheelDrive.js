export default function AllWheelDrive({objectCar, btn_1, btn_2}){

    return(
        <section id="section-4" className="div-all-wheel-drive">{/*div All-Wheel Drive */}
            <div className="image-all-wheel-drive div_image_column" style={{position:'relative'}}>
                <div className="car-attributes-box">
                    <div className="car-attribute">
                        <h2>{objectCar.attributes[0].title}</h2>
                        <p>{objectCar.attributes[0].content}</p>
                    </div>
                    <div className="car-attribute">
                    <h2>{objectCar.attributes[1].title}</h2>
                        <p>{objectCar.attributes[1].content}</p>
                    </div>
                    <div className="car-attribute">
                        <h2>{objectCar.attributes[2].title}</h2>
                        <p>{objectCar.attributes[2].content}</p>
                    </div>
                </div>
            </div>
            <div className="div_flex_text_button">
                <div className="div_flex_button">
                    <p>All-Wheel Drive</p>
                    <h1>Dual Motor</h1>
                    <div >
                        <button className="btn-border-black" style={{marginBottom: '10px'}}>{btn_1}</button><br/>
                        <button className="btn-border-transparent">{btn_2}</button>
                    </div>
                </div>
                <p className="div_flex_text">
                    Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.
                </p>
            </div>
        </section>
    )
}