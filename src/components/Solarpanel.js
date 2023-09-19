import React, {useState, useEffect} from 'react'
import MainComponent from './MainComponent';
import Navigation from './Navigation'
import Specs from './Specs';

import './styles/SolarPanel.css'

export default function Solarpanel(){

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

    //Dados do Painel
    const solar_panel = {
        name: "Solar for Existing Roofs",
        title: "Schedule a Virtual Consultation",
        attributes:[
            {
                title: 'Convert Sunligh',
                content: 'to Energy'
            },
            {
                title: 'Guaranteed Lowest',
                content: 'Price for Solar'
            },
            {
                title: 'Energy',
                content: 'Monitoring'
            }
            
        ],
        image: "imgs/img-model-3/km-visor.png",
        overflow:'hidden'
    }

    const arrayOptionNav = ['SOLAR PANEL', 'SAVING', 'DESIGN', 'POWER WALL', 'POWER ON', 'EFFICIENCY', 'EXPERIENCY', 'SPECS', 'ORDER']
    const [videoOnPower, setVideoOnPower]=useState('https://www.tesla.com/sites/default/files/solarpanels/power-on/solar-assessment-desktop.mp4')
   
    return(
        <>
            <MainComponent object={solar_panel} classImageObject='div-main-image-solar-panel'/>{/*Solar Panels*/}
            <Navigation arrayOptionNav={arrayOptionNav}/>
            <section id="section-2" className="div-flex">{/*Savings*/}
                <div className="div_flex_reverse_text_button">
                    <div className='div_flex_reverse_button'>
                        <h4>Savings</h4>
                        <h1>Electricity For Less</h1>
                        <p>
                            Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill. Schedule a virtual consultation with an Energy Advisor to learn more.
                        </p>
                    </div>
                    <div>
                        <button className="btn-order-now-flex">See Your Savings</button>
                    </div>
                </div>
                <div className="image-saving div_flex_reverse_image"></div>
            </section>
            <section id="section-3" className="div-flex">{/*Design*/}
                <div className="design-image div_flex_reverse_image"></div>
                <div className="div_flex_reverse_text_button">
                    <div className="div_flex_reverse_button">
                        <h4>Design</h4>
                        <h1>Sleek and Durable</h1>
                        <p>
                            Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. Schedule a virtual consultation with an Energy Advisor to learn more.
                        </p>
                    </div>
                    <div>
                        <div className="box-learn-more" style={{marginBottom: '10px'}}>
                            <a href="#" className="learn-button">+</a>
                            <p>Learn More</p>
                        </div>
                        <a href="#" ><button className="btn-border-black">Order Now</button></a>
                    </div>
                </div>
            </section>
            <section id="section-4">{/*Powerwall*/}
                <div className="powerwall-image div_image_column"></div>
                <div className="div_flex_text_button">
                    <div className="div_flex_button">
                        <p>Powerwall</p>
                        <h1>Home Battery Backup</h1>
                        <div>
                            <button className="btn-border-black" style={{marginBottom:'10px'}}>Order Now</button><br/>
                            <button className="btn-border-transparent">Learn More</button>
                        </div>
                    </div>
                    <p className="div_flex_text">
                        Your Powerwall can be bundled with solar, allowing you to generate clean energy and store it for use anytime—at night or during an outage.
                    </p>
                </div>
            </section>
            <section id="section-5" >{/*Power On*/}
                <div className="power-on div_image_column" style={{height: '415px'}}>
                    <video src={videoOnPower} autoPlay loop></video>
                </div>
                <div className="div_flex_text_button">
                    <div className="div_flex_button">
                        <p>Power On</p>
                        <h1>Order and Installation</h1>
                        <div className="div-button">
                            <button className="btn-border-black">Order Now</button>
                        </div>
                    </div>
                    <p className="div_flex_text">
                        From permitting to powering on, we'll take care of everything. After you order, we'll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. Chat with an Energy Advisor or request a call to learn more.
                    </p>
                </div> 
            </section>
            <section id="section-6" className="div-flex image-flex-column">{/*Efficiency*/}
                <div className="div_flex_reverse_text_button">
                    <div className='div_flex_reverse_button'>
                        <h4>Efficiency</h4>
                        <h1>Maximum Solar Production</h1>
                        <p>
                            Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable.
                        </p>
                    </div>
                    <div >
                        <button className="btn-border-black">Order Now</button>
                    </div>
                </div>
                <div className="image-efficiency div_flex_reverse_image"></div>
            </section>
            <section id="section-7">{/*Experience*/}
                <div className="experience div_image_column"></div>
                <div className="div_flex_text_button">
                    <div className="div_flex_button">
                        <p>Experience</p>
                        <h1>24/7 Monitoring</h1>
                        <div>
                            <button className="btn-border-black">Order Now</button>
                        </div>
                    </div>
                    <p className="div_flex_text">
                        Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence.
                    </p>
                </div>
            </section>
            < Specs objectCar={solar_panel} classImage='image-solar-panels'/>{/*div specs*/}
            <footer id="section-9" className='footer-solar-panel'>
                <div className="box-transform-your-solar-panels">
                    <h1>Transform Your Roof</h1>
                    <p>Order now or chat with an Energy Advisor for more information</p>
                    <button className="btn-footer-1 btn-footer">Order Now</button>
                    <button className="btn-footer-2 btn-footer">Chat with Energy Advisor</button>
                    <a href="#" style={{textDecoration: 'underline'}}>Get Updates</a>
                </div>
                <ul className="list-footer">
                    <li>
                        <a href="">Tesla © 2022</a>
                    </li>
                    <li>
                        <a href="">Privacy & Legal</a>
                    </li>
                    <li>
                        <a href="">Vehicle Recalls</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Engage</a>
                    </li>
                    <li>
                        <a href="">Locations</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}