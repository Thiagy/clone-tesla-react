import React, {useState, useEffect} from 'react'
import MainComponent from './MainComponent';
import Specs from './Specs'

import './styles/Solarroof.css'

export default function Solarroof(){

    //Dados do solar roof
    const solar_roof = {
        name: "Solar Roof",
        title: "Schedule a Virtual Consultation",
        attributes:[
            {
                title: 'Beautiful',
                content: 'Solar'
            },
            {
                title: '25-Year',
                content: 'Warranty'
            },
            {
                title: '24/7',
                content: 'Outage'
            }
            
        ],
        image: "imgs/img-model-3/km-visor.png",
        overflow:'hidden'
    }

    const video_durability = 'videos/video-panel-roof/durability.webm'
    //Lista de vídeos de slide
    const videos = [
        {
        url: "videos/video-panel-roof/1.webm"
        },
        {
        url: "videos/video-panel-roof/2.webm"
        },
        {
        url: "videos/video-panel-roof/3.mp4"
        }
    ];
    
    //Função que aplica overflow= scroll pra pagina que usa barra de navegação
    function overFlowHidden(){
        const html= document.documentElement
        html.style.overflowY='scroll'
    }
    useEffect(()=>{
        overFlowHidden()
    })

    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
    //Função que permite navegar pelos videos manualmente
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
    

    return(
        <>
            <MainComponent object={solar_roof} classImageObject='div-main-image-solar-roof'/>{/*Solar Panels*/}
            <section className='div_flex' style={{flexDirection: 'column'}}>{/*div design*/}
                <div className="design-image div_image_column"></div>
                <div className="div_flex_text_button">
                    <div className="div_flex_button">
                        <p>Design</p>
                        <h1>Complement Your Home's Aesthetic</h1>
                        <div>
                            <button className="btn-border-black">Order Now</button>
                        </div>
                    </div>
                    <p className='div_flex_text'>
                        Install Solar Roof and power your home with a fully integrated solar and energy storage system. The glass solar tiles and steel roofing tiles look great up close and from the street, complementing your home's natural styling. Schedule a virtual consultation with an Energy Advisor to learn more.
                    </p>
                </div>
            </section>
            <section className="div_flex_reverse">{/*div Energy-Storage*/}
                <div className="div_flex_reverse_text_button">
                    <div className='div_flex_reverse_text'>
                        <h4>Energy Storage</h4>
                        <h1>Protection Against Outages</h1>
                        <p>
                            Powerwall is a compact home battery that is bundled with Solar Roof, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof so you can power your home anytime—at night or during an outage.
                        </p>
                    </div>
                    <div>
                        <button className="btn-order-now-flex" style={{marginBottom:'10px'}}>Order Now</button>
                        <button className="btn-second-flex">Learn More</button>
                    </div>
                </div>
                <div className="energy-storage-image div_flex_reverse_image"></div>
            </section>
            <section className="div_flex">{/*div Durability*/}
                <div className="div_flex_reverse_image">
                    <video src={video_durability} autoPlay loop></video>
                </div>
                <div className="div_flex_reverse_text_button">
                    <div className='div_flex_reverse_text'>
                        <h4>Durability</h4>
                        <h1>Take on the Elements</h1>
                        <p>
                            Solar Roof is comprised of both glass solar tiles and steel roofing tiles. Glass solar tiles produce energy, while architectural-grade steel tiles add longevity and corrosion resistance to your roof. Both are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof will continue to produce clean energy and protect your home for decades to come.
                        </p>
                    </div>
                    <div>
                        <button className="btn-border-black">Order Now</button>
                    </div>
                </div>
            </section>
            <section className='box-video-design-installation-power-on'>{/*div design installation power on*/}
                <div className='div_video_des_int_pow'>
                    <video src={videos[selectedVideoIndex].url} autoPlay loop></video>
                </div>
                <div className="box-navigation-manual">
                    <div className="nav-bar-video" style={{color: selectedVideoIndex===0? 'black':'#6d727a'}} onClick={() => navigation(1)}>
                        <div 
                            className="black-line" 
                            style={{backgroundColor: selectedVideoIndex===0? 'black':'#6d727a',
                                    height: selectedVideoIndex===0? '3px':'2px'}}></div>
                        <h2>Design</h2>
                        <p>Aerial imagery and 3D modeling determine your custom design</p>
                    </div>
                    <div className="nav-bar-video" style={{color: selectedVideoIndex===1? 'black':'#6d727a'}} onClick={() => navigation(2)}>
                        <div 
                            className="black-line" 
                            style={{backgroundColor: selectedVideoIndex===1? 'black':'#6d727a',
                                    height: selectedVideoIndex===1? '3px':'2px'}}></div>
                        <h2>Installation</h2>
                        <p>Our integrated design enables quick tile and Powerwall installation</p>
                    </div>
                    <div className="nav-bar-video" style={{color: selectedVideoIndex===2? 'black':'#6d727a'}} onClick={() => navigation(3)}>
                        <div 
                            className="black-line" 
                            style={{backgroundColor: selectedVideoIndex===2? 'black':'#6d727a',
                                    height: selectedVideoIndex===2? '3px':'2px'}}></div>
                        <h2>Power On</h2>
                        <p>Final cleanup is completed before system activation</p>
                    </div>
                </div>
            </section>
            <section className="div_flex_reverse">{/*div Efficiency*/}
                <div className="div_flex_reverse_text_button">
                    <div className='div_flex_reverse_text'>
                        <h4>Efficiency</h4>
                        <h1>Maximum Solar Production</h1>
                        <p>
                            Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Glass solar tiles and architectural-grade steel tiles, vent covers and ridge caps come together to form a roof that is both durable and powerful. With Tesla Solar Inverter, your fully integrated system is safe, reliable and outage ready. And built-in connectivity ensures Tesla Solar Inverter continues to improve with each over-the-air software update.
                        </p>
                    </div>
                    <div className='div_flex_button'>
                        <button className="btn-border-black">Order Now</button>
                    </div>
                </div>
                <div className="eficiency-image div_flex_reverse_image"></div>
            </section>
            <section className='div_flex' style={{flexDirection: 'column'}}>{/*div Control*/}
                <div className="control-image div_image_column"></div>
                <div className="div_flex_text_button">
                    <div className="div_flex_button">
                        <p>Control</p>
                        <h1>Monitor and Optimize</h1>
                        <div className='div_flex_button'>
                            <button className="btn-border-black">Order Now</button>
                        </div>
                    </div>
                    <p className='div_flex_text'>
                        With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.
                    </p>
                </div>
            </section>
            <section className="div_flex_reverse">{/*div Value*/}
                <div className="div_flex_reverse_text_button">
                    <div className='div_flex_reverse_text'>
                        <h4>Value</h4>
                        <h1>Pay Less for Electricity</h1>
                        <p>
                            Solar Roof helps pay for itself with the energy it produces. As a fully integrated system, Solar Roof can maximize your solar generation and help you take control of your monthly electricity bill.
                        </p>
                    </div>
                    <div className='div_flex_button'>
                        <button className="btn-border-black">Order Now</button>
                    </div>
                </div>
                <div className="value-image div_flex_reverse_image"></div>
            </section>
            <Specs objectCar={solar_roof} classImage='image-solar-roof'/>
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