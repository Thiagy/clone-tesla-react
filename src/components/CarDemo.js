import React, { useState, useEffect } from "react";

export default function CarDemo(){

    //Lista de url de videos de demostração
    const videos = [

        {
          url: "./videos/video-model-s/demo-1.mp4"
        },
        {
          url: "./videos/video-model-s/demo-2.mp4"
        },
        {
          url: "./videos/video-model-s/demo-3.mp4"
        },
        {
          url: "./videos/video-model-s/demo-4.mp4"
        }

    ];
    //Seletor do indice do array 'videos'
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

    function navigation(num) {
        setSelectedVideoIndex(num - 1);
      }
    
      useEffect(() => {
        // Inicia o intervalo para trocar automaticamente os vídeos a cada 5 segundos
        const intervalId = setInterval(() =>{

          const nextIndex = (selectedVideoIndex + 1) % videos.length;
          setSelectedVideoIndex(nextIndex);

        }, 5000);
    
        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
      }, [selectedVideoIndex, videos.length]);

  return(

    <section className="div-electric-powertrain">{/*div features*/}
        <div className="electric-powertrain-text">
            <h1>Features</h1>
            <p>Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:</p>
        </div>
        <div id="div_video_demo">
            <video src={videos[selectedVideoIndex].url} id="video_demo" autoPlay loop ></video>
        </div>
        <div className="box-slide">
            <div className="box-slide-text-features" style={{color:selectedVideoIndex===0? 'black':'gray'}} onClick={() => navigation(1)}>
                <div className="darkness-line-video" style={{backgroundColor:selectedVideoIndex===0? 'black':'gray'}}></div>
                <h3>Navigate on Autopilot</h3>
                <p>Active guidance from on-ramp to off-ramp</p>
            </div>
            <div className="box-slide-text-features" style={{color:selectedVideoIndex===1? 'black':'gray'}} onClick={() => navigation(2)}>
                <div className="darkness-line-video" style={{backgroundColor:selectedVideoIndex===1? 'black':'gray'}}></div>
                <h3>Auto Lane Change</h3>
                <p>Automatically change lanes while driving on the highwa</p>
            </div>
            <div className="box-slide-text-features" style={{color:selectedVideoIndex===2? 'black':'gray'}} onClick={() => navigation(3)}>
                <div className="darkness-line-video" style={{backgroundColor:selectedVideoIndex===2? 'black':'gray'}}></div>
                <h3>Summon</h3>
                <p>Automatically retrieve your car</p>
            </div>
            <div className="box-slide-text-features" style={{color:selectedVideoIndex===3? 'black':'gray'}} onClick={() => navigation(4)}>
                <div className="darkness-line-video" style={{backgroundColor:selectedVideoIndex===3? 'black':'gray'}}></div>
                <h3>Autopark</h3>
                <p>Parallel and perpendicular parking with a single touch</p>
            </div>
        </div>
    </section>
  );
}
