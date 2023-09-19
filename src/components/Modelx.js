import React, {useEffect} from "react";
import MainComponent from './MainComponent';
import InterCarImage from "./InterCarImage";
import DetailsCar from "./DetailsCar";
import CarInteriorVideo from "./CarInteriorVideo";
import BeyondLudicrous from "./BeyondLudicrous";
import ElectricPowertrain from "./ElectricPowertrain";
import FreedomToTravel from "./FreedomToTravel";
import ExteriorCar from "./ExteriorCar";
import Safety from "./Safety";
import Autopilot from "./Autopilot";
import Ranger from "./Ranger";
import CarDemo from "./CarDemo";
import Specs from "./Specs";
import Order from "./Order";
import FooterCar from "./FooterCar";

import './styles/Modelx.css'

export default function Modelx(){

    //Dados do carro
    const model_x = {
        name: "Model X",
        title: "Plaid",
        attributes:[
            {
                title: '333 mi',
                content: 'Range (EPA est.)'
            },
            {
                title: '2.5 s',
                content: '0-60 mph*'
            },
            {
                title: '9.9 s',
                content: '1/4 Mile'
            },
            {
                title: '1,020 hp',
                content: 'Peak Power'
            }
            
        ],
        image: "imgs/img-model-3/km-visor.png",
        overflow:'scroll'
    }

    const car = {
        
        title: 'Model X'
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
            <MainComponent object={model_x} classImageObject='div-main-image-model-x'/>{/*Model X*/}
            <InterCarImage/>{/*Imagem do interior do carro*/}
            <section className="div-video-car-interior">{/*div video car interior*/}
                <CarInteriorVideo/>{/*div de videos sobre o interir do carro*/}
                <DetailsCar/>{/*div de imagens de detalhes do carro*/}
            </section>
            <BeyondLudicrous objectCar={model_x} classImage='beyond-ludicrous-image-model-x'/>{/*div Beyond Ludicrous*/}
            <ElectricPowertrain car={car}/>
            <ExteriorCar classImage='designed-for-efficiency-image-model-x'/>{/*div sobre o exterior do carro*/}
            <Ranger objectCar={model_x}/>{/*div Ranger*/}
            <FreedomToTravel/>{/*div freedom to travel*/}
            <Safety/>{/*div Safety*/}
            <Autopilot objectCar={model_x}/>{/*div autoplot*/}
            <CarDemo/>
            <Specs objectCar={model_x} classImage='image-car'/>{/*div specs*/}
            <Order car='X' classImage='order-image-model-x'/>{/*div Order X*/}
            <FooterCar/>{/*Footer do carro*/}
        </>
    )
}