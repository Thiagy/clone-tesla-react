import React, {useEffect} from "react";
import MainComponent from "./MainComponent";
import InterCarImage from "./InterCarImage";
import BeyondLudicrous from "./BeyondLudicrous";
import CarInteriorVideo from "./CarInteriorVideo";
import ElectricPowertrain from "./ElectricPowertrain";
import FreedomToTravel from "./FreedomToTravel";
import ExteriorCar from "./ExteriorCar";
import DetailsCar from "./DetailsCar";
import Ranger from './Ranger';
import CarDemo from "./CarDemo";
import Safety from "./Safety"
import Autopilot from "./Autopilot";
import Specs from "./Specs";
import Order from "./Order";
import FooterCar from "./FooterCar";

import './styles/Models.css'

export default function Model3(){

    //Dados do carro
    const model_s = {
        name: "Model S",
        title: "Plaid",
        attributes:[
            {
                title: '396 mi',
                content: 'Range (EPA est.)'
            },
            {
                title: '1.99 S',
                content: '0-60 mph*'
            },
            {
                title: '200 mph',
                content: 'Top Speed†'
            },
            {
                title: '1,020 hp',
                content: 'Peak Power'
            }
        ],
        image: "",
        overflow:'scroll'
    }
    const car = {
        title: 'Model S'
    }
    //Função que aplica overflow= hidden pra pagina que usa barra de navegação
  function overFlowHidden(){
    const html= document.documentElement
    html.style.overflowY='scroll'
   
    }
    useEffect(()=>{
        overFlowHidden()
    })
    
    return(
        <>
            <MainComponent object={model_s} classImageObject='div-main-image-model-s'/>{/*model S*/}
            <InterCarImage/>
            <section className="div-video-car-interior">{/*div video car interior*/}
                <CarInteriorVideo/>
                <DetailsCar/>
            </section>
            <BeyondLudicrous objectCar={model_s} classImage='beyond-ludicrous-image-model-s'/>{/*div Beyond Ludicrous*/}
            <ElectricPowertrain car={car}/>
            <ExteriorCar classImage='designed-for-efficiency-image-model-s'/>
            <Ranger objectCar={model_s}/>{/*div Ranger*/}
            <FreedomToTravel/>{/*div freedom to travel*/}
            <Safety/>{/*div Safety*/}
            <Autopilot objectCar={model_s}/>{/*div autopilot*/}
            <CarDemo/>
            <Specs objectCar={model_s} classImage='image-car'/>{/*div specs*/}
            <Order car='S' classImage='order-image-model-s'/>{/*div Order S*/}
            <FooterCar/>{/*Footer do carro*/}
        </>
    )
}