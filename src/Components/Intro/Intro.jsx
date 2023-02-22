import React from 'react';
import './Intro.css'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';

// dark mood 
import { themeContext } from '../../Context';
import { useContext } from 'react';
// dark mood //

// Animation 
import { motion } from "framer-motion";
// Animation //

// Smooth scroll
import { Link } from 'react-scroll';

function Intro() {

    // dark mood
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    // dark mood //

    // Animation 
    const transition = { duration: 2, type: 'spring' }
    // Animation //
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={darkMode ? { color: 'white' } : { color: '' }}>Hey! I Am</span>
                    <span>Prathamesh Thakur</span>
                    <span style={darkMode ? { color: 'white' } : { color: '' }}>
                        Full Stack Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className='button i-button'>Hire me</button>
                </Link>
                <div className="i-icons">
                    <img src={Github} alt=""
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://github.com/prathamesh-webdesigner';
                        }} />
                    <img src={LinkedIn} alt=""
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://www.linkedin.com/in/prathamesh-thakur-web/'
                        }}
                    />
                    <img src={Instagram} alt=""
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://www.instagram.com/prathamesh_thakur15/'
                        }}
                    />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji}
                    alt="" />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "68%" }}
                    transition={transition}
                    className="floating-div"
                >
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ top: "18rem", left: "9rem" }}
                    whileInView={{ left: "1rem" }}
                    transition={transition}
                    style={{ top: '18rem', left: '1rem' }}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>

                {/* blur divs  */}
                <div className='blur' style={{ background: 'rgb(238 210 255)' }}></div> {/* purple blur  */}
                <div className='blur' style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div> {/* blue blur */}
            </div>
        </div >

    )
}

export default Intro

// 37:54 