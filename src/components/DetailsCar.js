export default function DetailsCar(){
    return(
        <>
            <div className="car-attributes car-attributes-1">
                    <div className="car-attributes-image-1 car-attributes-image"></div>
                    <div className="car-attributes-text">
                        <p>Stay Connected</p>
                        <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
                    </div>
                </div>
                <div className="car-attributes car-attributes-2">
                    <div className="car-attributes-text">
                        <p>Immersive Sound</p>
                        <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
                    </div>
                    <video className="car-attributes-video" src="./imgs/img-model-s/PIUCZZ_MS-Interior-Grid-2-Audio-Desktop_CLFX4X.mp4" loop autoPlay></video>
                </div>
                <div className="car-attributes car-attributes-3">
                    <div className="car-attributes-image-2 car-attributes-image"></div>
                    <div className="car-attributes-text">
                        <p>Room for Everything</p>
                        <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.</p>
                    </div>
                </div>
        </>
    )
}