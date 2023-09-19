export default function Specs({objectCar, classImage}){

    return(
        <section id="section-8" className="div-specs">{/*div specs*/}
            <div className="div_flex" style={{justifyContent:'space-around'}}>
                <div className={`div-image-specs ${classImage}`}></div>
                <div className="tables-specs">
                    <h1>{objectCar.name} Specs</h1>
                    <div className="div-description-specs">
                        <div className="table-specs">
                            <button className="btn-model-s-plaid">{objectCar.name} plaid</button>
                            <p>Range (EPA est.)</p>
                            <p className="spacing">396 mi</p>
                            <hr/>
                            <p>1/4 Mile</p>
                            <p className="spacing">9.23@155 mph trap speed</p>
                            <hr/>
                            <p>Peak Power</p>
                            <p className="spacing">1,020 hp</p>
                            <hr/>
                            <p>Wheels</p>
                            <p className="spacing">19" or 21"</p>
                        </div>
                        <div className="table-specs">
                            <button className="btn-model-s">{objectCar.name}</button>
                            <p>*Acceleration</p>
                            <p className="spacing">1.99 s 0-60 mph with rollout subtracted</p>
                            <hr/>
                            <p>†Top Speed</p>
                            <p className="spacing">200 mph when equipped with paid hardware upgrades</p>
                            <hr/>
                            <p>Drag Coefficient</p>
                            <p className="spacing">0.208 Cd</p>
                            <hr/>
                            <p>Powertrain</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-btn-specs">
                <button className="btn-border-white">Compare</button>
            </div>
        </section>
    )
}