export default function Ranger({objectCar}){

    return(
        <section id="section-5" className="div_flex_reverse">
            <div className="div_flex_reverse_text_button">
                <div className="div_flex_reverse_text">
                    <h4>Range</h4>
                    <h1>Go Anywhere</h1>
                    <p>
                        {objectCar.name} is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you're on the road, it's easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 40,000 Superchargers worldwide, with six new locations opening every week. <u>Chat with a Tesla Advisor</u> to learn more about Model 3.
                    </p>
                </div>
                <div className="div_flex_button">
                    <div className="div-learn-more" style={{marginBottom: '10px'}}>
                        <a href="#" className="btn-learn-more">+</a>
                        <p>Learn More</p>
                    </div>
                    <button className="btn-border-black">Order Now</button>
                </div>
            </div>
            <div className="range-img div_flex_reverse_image" style={{position:'relative'}}>
                <div className="car-attributes-box" >
                    <div className="car-attribute">
                        <h2>{objectCar.attributes[0].title}</h2>
                        <p>{objectCar.attributes[0].content}</p>
                    </div>
                    <div className="car-attribute">
                        <h2>{objectCar.attributes[1].title}</h2>
                        <p>{objectCar.attributes[1].content}</p>
                    </div>
                    <div className="car-attribute">
                        <h2>{objectCar.attributes[1].title}</h2>
                        <p>{objectCar.attributes[1].content}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}