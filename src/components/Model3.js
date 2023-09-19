import React,{useState, useEffect} from 'react';
import MainComponent from './MainComponent';
import Safety from './Safety';
import Ranger from './Ranger';
import Navigation from './Navigation';
import AllWheelDrive from './AllWheelDrive';
import Interior from './Interior';
import Autopilot from './Autopilot';
import Specs from './Specs';
import Order from './Order';
import FooterCar from './FooterCar';
import './styles/Model3.css'

export default function Model3(){
    //Dados do carro
    const model_3 = {
        name: "Model 3",
        title: "Plaid",
        attributes:[
            {
                title: '3.1 S',
                content: '0-60 mph*'
            },
            {
                title: '358 mi',
                content: 'Range (EPA est.)'
            },
            {
                title: 'AWD',
                content: 'Dual Motor'
            }
        ],
        image: "imgs/img-model-3/km-visor.png",
        overflow:'hidden'
    }
    //Array de nomes como opção pra navegação
    const arrayOptionNav = ['MODEL 3', 'SAFETY', 'PERFORMANCE', 'ALL-WHEEL-DRIVE', 'RANGE', 'AUTOPILOT', 'INTERIOR', 'SPECS', 'ORDER']
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

    //Função que aplica overflow= hidden pra pagina que usa barra de navegação
    function overFlowHidden(){
        const html= document.documentElement
        html.style.overflow='hidden'
       
    }
    useEffect(()=>{

        if(!isMobile){
            overFlowHidden()
        }
    }, [isMobile])
    
  return (
    <>
        <MainComponent object={model_3} classImageObject='div-main-image-model-3'/>{/*Model 3*/}
        <Navigation arrayOptionNav={arrayOptionNav}/>
        <Safety/>
        <section id="section-3">{/*div Performace */}
            <div className="image-performance div_image_column" style={{position:'relative'}}>
                <div className="car-attributes-box">
                    <div className="car-attribute">
                        <h2><img src="images/pg-model-3/km-visor.png" alt=""/> 3.1 s</h2>
                        <p>Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds</p>
                    </div>
                    <div className="car-attribute">
                        <h2>162 mph</h2>
                        <p>Improved handling and aerodynamics allow for a top speed of 162 mph</p>
                    </div>
                    <div className="car-attribute">
                        <h2>AWD</h2>
                        <p>Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions</p>
                    </div>
                </div>
            </div>
            <div className="div_flex_text_button">
                <div className="div_flex_button">
                    <p>Performance</p>
                    <h1>Quickest Acceleration</h1>
                    <div>
                        <div className="div-learn-more" style={{marginBottom: '10px'}}>
                            <a href="#" className="btn-learn-more">+</a>
                            <p>Learn More</p>
                        </div>
                        <button className="btn-border-black">Order Now</button>
                    </div>
                </div>
                <p className="div_flex_text">
                    Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today.
                </p>
            </div>
        </section>
        <AllWheelDrive objectCar={model_3} btn_1='Order Now' btn_2='View Inventory'/>{/*div All wheell Drive*/}
        <Ranger objectCar={model_3}/>{/*div Ranger*/}
        <Autopilot objectCar={model_3}/>{/*div Autopilot*/}
        <Interior objectCar={model_3}/>{/*div interior*/}
        <Specs objectCar={model_3} classImage='image-car'/>{/*div specs*/}
        <section id="section-9">
            <Order car='3' classImage='order-image-model-3'/>{/*div Order 3*/}
            <FooterCar/>{/*Footer do carro*/}
        </section>
    </>
  )
}