import React, { useState, useEffect } from 'react';

export default function ElectricPowertrain({ car }){
  
  const [changesImage, setChangesImage] = useState(true);

  //Aqui as imagens do motor do carro são alternadas
  useEffect(() => {

    const intervalId = setInterval(() => {

      setChangesImage((prevChangesImage) => !prevChangesImage);

    }, 5000);

    return () => clearInterval(intervalId);

  }, []);

  return (
    <section className="div-electric-powertrain">
      <div className="electric-powertrain-text">
        <h1>Electric Powertrain</h1>
        <p>
          {car.title} platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.
        </p>
      </div>
      
      <div id="interior-car-image">
        <img src={changesImage ? 'interior-motor-1.jfif' : 'interior-motor-2.jfif'} alt={changesImage ? 'interior-motor-1.jfif' : 'interior-motor-2.jfif'} />
      </div>
      
      <div className="box-slide">
        <div className="slide-electric-powertrain" style={{color: changesImage ? 'black' : 'gray'}}>
          <div className="darkness-line" style={{backgroundColor: changesImage ? 'black' : 'gray'}}></div>
          <h2 style={{ fontSize: `clamp(12px, 5vw, 25px)` }}>{car.title}</h2>
          <p style={{ fontSize: `clamp(12px, 5vw, 25px)` }}>Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.</p>
          <div className="box-car-profile-electric-powertrain">
            <div className="car-profile-electric-powertrain">
              <h2>3.1 s</h2>
              <p>0-60 mph</p>
            </div>
            <div className="car-profile-electric-powertrain">
              <h2>405 mi</h2>
              <p>Range (EPA est.)</p>
            </div>
            <div className="car-profile-electric-powertrain">
              <h2>670 hp</h2>
              <p>Peak Power</p>
            </div>
          </div>
        </div>
        <div className="slide-electric-powertrain" style={{color: changesImage ? 'gray' : 'black'}}>
          <div className="darkness-line" style={{backgroundColor: changesImage ? 'gray' : 'black'}}></div>
          <h2 style={{ fontSize: `clamp(12px, 5vw, 25px)` }}>Model S Plaid</h2>
          <p style={{ fontSize: `clamp(12px, 5vw, 25px)` }}>Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.</p>
          <div className="box-car-profile-electric-powertrain">
            <div className="car-profile-electric-powertrain">
              <h2>1.99 s*</h2>
              <p>0-60 mph</p>
            </div>
            <div className="car-profile-electric-powertrain">
              <h2>396 mi</h2>
              <p>Range (EPA est.)</p>
            </div>
            <div className="car-profile-electric-powertrain">
              <h2>1,020 hp</h2>
              <p>Peak Power</p>
            </div>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center' }}>* With rollout subtracted</p>
    </section>
  );
}
