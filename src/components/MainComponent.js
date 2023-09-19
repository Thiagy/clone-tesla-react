export default function MainComponent({object, classImageObject}){

    return(
        <section  id="section-1" className={`main-div ${classImageObject}`}>
            <div className="main-content">
                <div className="main-title-box">
                    <h1>{object.name}</h1>
                    <p href="">{object.title}</p>
                </div>
                <div className="car-profile-box">
                    <div className="car-profile">
                        <h2><img src={object.image} alt=""/>{object.attributes[0].title}</h2>
                        <p>{object.attributes[0].content}</p>
                    </div>
                    <div className="car-profile">
                        <h2>{object.attributes[1].title}</h2>
                        <p>{object.attributes[1].content}</p>
                    </div>
                    <div className="car-profile">
                        <h2>{object.attributes[2].title}</h2>
                        <p>{object.attributes[2].content}</p>
                    </div>
                    <div className="car-profile">
                        <h2>{object.attributes.length>3? object.attributes[3].title : ''}</h2>
                        <p>{object.attributes.length>3? object.attributes[3].content : ''}</p>
                    </div>
                    <button className="btn-border-white">Order Now</button>
                    <div className="bate-papo"></div>
                </div>
            </div>
        </section>
    )
}