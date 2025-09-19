import React from 'react'
import './Portfolio.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
import WeatherApp from "../../img/weatherApp.png";
import Car from "../../img/animated-car.png";
import TicTacToe from "../../img/tic-tac-toe.png";
import Zadapaisa from "../../img/zadapaisa.png";
import Rocketry from "../../img/rocketry.png";
import Ttlifesciences from "../../img/TTLifesciences.webp";
import ClinicalNetwork from "../../img/Clinical-network-TT.webp";
import KreyaJobs from "../../img/KreyaHR.webp";
import 'swiper/css'

// dark mood 
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Portfolioimages from '../Portfolioimages/Portfolioimages';
// dark mood //


const Portfolio = () => {

    // dark mood
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    // dark mood //

    return (
        <div className="portfolio" id='Portfolio'>
            {/* heading */}
            <span style={darkMode ? { color: 'white' } : { color: '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* Slider  */}
            {/* <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <a href="https://prathamesh-webdesigner.github.io/weather-app/" rel='noreferrer' target={'_blank'}>
                        <img src={WeatherApp} alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
            </Swiper> */}

            {/* grid  */}
            <div className="grid-container">
                <div className="grid-item">
                    <Portfolioimages
                        portfolioImage={Ttlifesciences}
                        foliotitle={'TTlifesciences Main Website'}
                        foliopost={'Wordpress, Elementor, HTML, CSS, JavaScript'}
                        linkApp= {'https://ttlifesciences.com/'}
                    />
                </div>
                <div className="grid-item">
                    <Portfolioimages
                        portfolioImage={ClinicalNetwork}
                        foliotitle={'Clinical Network Conference Website'}
                        foliopost={'Wordpress, Elementor, HTML, CSS, JavaScript'}
                        linkApp= {'https://medicaldeviceclinicalnetwork.com/'}
                    />
                </div>
                <div className="grid-item">
                    <Portfolioimages
                        portfolioImage={KreyaJobs}
                        foliotitle={'Kreya Recruiter Website'}
                        foliopost={'PHP, MySQL, HTML, CSS, JavaScript, Bootstrap'}
                        linkApp= {'https://kreyajobs.com/'}
                    />
                </div>
                <div className="grid-item">
                    
                        <Portfolioimages 
                            portfolioImage={WeatherApp}
                            foliotitle={'Live Weather App'}
                            foliopost={'React js, API, HTML, CSS, JavaScript'}
                            linkApp={'https://prathamesh-webdesigner.github.io/weather-app'}
                        />
                </div>
                <div className="grid-item">
                    <Portfolioimages
                        portfolioImage={Car}
                        foliotitle={'Animated Car'}
                        foliopost={'HTML5, CSS3, JavaScript, PhotoShop'}
                        linkApp={'https://prathamesh-webdesigner.github.io/Animated-car/'}
                    />
                </div>
                <div className="grid-item">
                    <Portfolioimages
                        portfolioImage={TicTacToe}
                        foliotitle={'Tic Tac Toe Game'}
                        foliopost={'HTML5, CSS3, JavaScript'}
                        linkApp={'https://prathamesh-webdesigner.github.io/tic-tac-toe/'}
                    />
                </div>
                
                <div className="grid-item">
                    <Portfolioimages
                        portfolioImage={Zadapaisa}
                        foliotitle={'Zadapaisa Landing page'}
                        foliopost={'Bootstrap5, HTML5, CSS3, JavaScript, Animations'}
                        linkApp= {'https://prathamesh-webdesigner.github.io/jadaPaisa/'}
                    />
                </div>
                <div className="grid-item">
                    <Portfolioimages
                        portfolioImage={Rocketry}
                        foliotitle={'Rocketry film Pramotion'}
                        foliopost={'Bootstrap5, HTML5, CSS3, JavaScript, Animations'}
                        linkApp= {'https://prathamesh-webdesigner.github.io/rocketry/'}
                    />
                </div>
                

            </div>
        </div>
    )
}

export default Portfolio