export default function BeyondLudicrous({objectCar, classImage}){

    return(
        <section>{/*div Beyond Ludicrous*/}
                <div className={`div_image_column ${classImage}`}>
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
                        <h4>Paid</h4>
                        <h1>Beyond Ludicrous</h1>
                        <div>
                            <button className="btn-border-black" style={{marginBottom: '10px'}}>Buy Now</button><br/>
                            <button className="btn-border-transparent">Custom Order</button>
                        </div>
                    </div>
                    <p className="div_flex_text">
                        {objectCar.name} Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all {objectCar.name} trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about {objectCar.name}.
                    </p>
                </div>
            </section>
    )
}