import React, {useState, useRef, useEffect} from 'react'
import MainComponent from './MainComponent';
import Safety from './Safety';
import Ranger from './Ranger';
import Interior from './Interior';
import Autopilot from './Autopilot';
import AllWheelDrive from './AllWheelDrive';
import Specs from './Specs';
import Order from './Order';
import FooterCar from './FooterCar';
import './styles/Modely.css'


export default function Modely(){

    //Dados do carro
    const model_y = {
        name: "Model Y",
        title: "Schedule a Demo Drive",
        attributes:[
            {
                title: '76 cu ft',
                content: 'Cargo Space'
            },
            {
                title: '330 mi',
                content: 'Range (EPA est.)'
            },
            {
                title: 'AWD',
                content: 'Dual Motor'
            }
            
        ],
        image: "imgs/img-model-3/km-visor.png",
        overflow:'scroll'
    }

    //Lista de vídeos 
  const videos = [
    {
      url: "imgs/img-model-y/utility-1.jfif",
    },
    {
        url: "imgs/img-model-y/utility-2.jfif",
    }
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
            <MainComponent object={model_y} classImageObject='div-main-image-model-y'/>{/*Model Y*/}
            <Safety/>{/*div Safety*/}
            <AllWheelDrive objectCar={model_y} btn_1='Buy Now' btn_2='Order Now'/>{/*div All wheell Drive*/}
            <Ranger objectCar={model_y}/>{/*div Ranger*/}
            <Autopilot objectCar={model_y}/>{/*div autopilot*/}
            <Interior objectCar={model_y}/>
            <Specs objectCar={model_y} classImage='image-car'/>{/*div specs*/}
            <Order car='Y' classImage='order-image-model-y'/>{/*div Order Y*/}
            <FooterCar/>{/*Footer do carro*/}
        </>
    )
}