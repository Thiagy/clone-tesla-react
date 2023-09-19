import React, { useEffect, useState } from 'react';
import Carsection from './Carsection';

// Importe todas as imagens em um array
import Model3 from './imgs/homepage/model-3.jfif';
import Modely from './imgs/homepage/model-y.jfif';
import Models from './imgs/homepage/model-s.jfif';
import Modelx from './imgs/homepage/model-x.jfif';
import Solarpanels from './imgs/homepage/solar-panels.jfif';
import Accessories from './imgs/homepage/accessories.jfif';

// Importe todas as imagens em um array
import Model3Mobile from './imgs/homepage/model-3-mobile.jfif';
import ModelyMobile from './imgs/homepage/model-y-mobile.jfif';
import ModelsMobile from './imgs/homepage/model-s-mobile.jfif';
import ModelxMobile from './imgs/homepage/model-x-mobile.jfif';
import SolarpanelsMobile from './imgs/homepage/solar-panels-mobile.webp';
import AccessoriesMobile from './imgs/homepage/accessories-mobile.webp';

const carImagesMobile = [Model3Mobile, ModelyMobile, ModelsMobile, ModelxMobile, SolarpanelsMobile, AccessoriesMobile];
const carImagesDesktop = [Model3, Modely, Models, Modelx, Solarpanels, Accessories];

export default function Main() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  //Função que aplica overflow= hidden pra pagina que usa barra de navegação
  function overFlowHidden(){
    const html= document.documentElement
    html.style.overflowY='scroll'
   
  }
  useEffect(()=>{
      overFlowHidden()
  })

  const carImagesToRender = isMobile ? carImagesMobile : carImagesDesktop;

  return (
    <>
      {carImagesToRender.map((img, index) => (
        <Carsection key={`section-${index + 1}`} id={`section-${index + 1}`} img={img} />
      ))}
    </>
  );
}
