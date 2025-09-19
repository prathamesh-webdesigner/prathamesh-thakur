import React from 'react'
import './Works.css'
import Karma from "../../img/karma.png";
import Diquery from "../../img/ttlifesciences.png";
import Zobble from "../../img/zobble.png";
import Dfl from "../../img/dhanvarsha.png";
import Skillmine from "../../img/skillmine.png";

// dark mood 
import { themeContext } from '../../Context';
import { useContext } from 'react';
// dark mood //

// animation
import { motion } from 'framer-motion';

const Works = () => {
    // dark mood
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    // dark mood //
    return (
        <div className="works">
            {/* left side  */}
            <div className="awesome">
                <span style={darkMode ? { color: 'white' } : { color: '' }}>Works For All These</span>
                <span>Brands & Clients</span>
                <span style={darkMode ? { color: 'white' } : { color: '' }}>I’ve had the privilege of collaborating with some incredible companies that are driving innovation in their industries. These experiences have inspired me to think creatively, work alongside talented teams, and deliver impactful solutions tailored to the needs of their users.
                </span>
                <button className='button s-button'>Hire me </button>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right side  */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Karma} alt="" title='Karma Management Pvt Ltd' />
                    </div>
                    <div className="w-secCircle">
                        <img src={Diquery} alt="" title='TT Lifesciences' />
                    </div>
                    <div className="w-secCircle">
                        <img src={Zobble} alt="" title='Zobble Solutions' />
                    </div>
                    <div className="w-secCircle">
                        <img src={Dfl} alt="" title='Dhanvarsha Finvest' />
                    </div>
                    <div className="w-secCircle">
                        <img src={Skillmine} alt="" title='Skillmine Technology Consulting Pvt Ltd' />
                    </div>
                </motion.div>
                {/* background circles  */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works