export default function Order({car, classImage}){

    return(
        <section className="div-flex">{/*div order*/}
            <div className="title-button-box">
                <h1>Model {car}</h1>
                <div>
                    <button className="btn-border-black" style={{marginBottom: '10px'}}>Order Now</button><br/>
                    <button className="btn-border-transparent">View Inventory</button>
                </div>
            </div>
            <div className={`order-image ${classImage}`}></div>
        </section>
    )
}