import React, { useState, useEffect } from "react";

export default function CarInteriorVideo(){
  
  //Lista de vídeos 
  const videos = [
    {
      title: "Cinematic Experience",
      content:
        "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
      url: "videos/video-model-s/1.mp4",
    },
    {
      title: "Yoke Steering",
      content:
        "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.",
      url: "videos/video-model-s/2.mp4",
    },
    {
      title: "Perfect Environment Redesigned Second Row",
      content:
        "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.",
      url: "videos/video-model-s/3.mp4",
    },
    {
      title: "Console-Grade Gaming",
      content:
        "Up to 10 teraflops of processing power unlock in-car gaming on-par with today's newest consoles. Play from any seat with wireless controller and headset compatibility.",
      url: "videos/video-model-s/4.mp4",
    },
    {
      title: "Console-Grade Gaming",
      content:
        "Up to 10 teraflops of processing power unlock in-car gaming on-par with today's newest consoles. Play from any seat with wireless controller and headset compatibility.",
      url: "videos/video-model-s/5.mp4",
    },
  ];

  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  function navigation(num) {
    setSelectedVideoIndex(num - 1);
  }

  useEffect(() => {
    // Inicia o intervalo para trocar automaticamente os vídeos a cada 5 segundos
    const intervalId = setInterval(() => {
      const nextIndex = (selectedVideoIndex + 1) % videos.length;
      setSelectedVideoIndex(nextIndex);
    }, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [selectedVideoIndex, videos.length]);

  return (
    <>
      <div id="div_video_display_car">
        <video id="display-car" src={videos[selectedVideoIndex].url} autoPlay loop ></video>
      </div>
      <div className="box-navigation">
        <div className="navigation">
          {videos.map((video, index) => (
            <label key={index} htmlFor={`option-${index + 1}`} className={`option ${selectedVideoIndex === index ? "selected" : ""}`} style={{ backgroundColor: selectedVideoIndex === index ? "white" : "gray"}} onClick={() => navigation(index + 1)} ></label>
          ))}
          <div style={{ display: "none" }}>
              {videos.map((_, index) => (
                <input key={index} type="radio" name="input-navigation-manual" id={`option-${index + 1}`} />
              ))}
          </div>
        </div>
        <div className="box-text-navigation">
          <h4>{videos[selectedVideoIndex].title}</h4>
          <p>{videos[selectedVideoIndex].content}</p>
        </div>
      </div>
    </>
  );
}
