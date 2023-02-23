import React, { useRef, useState } from 'react';
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
// import Resume from './Prathamesh-Thakur-UI-Developer.pdf'

// dark mood 
import { themeContext } from '../../Context';
import { useContext } from 'react';
// dark mood //

// animation 
import { motion } from 'framer-motion'

// Email js resume req 
import emailjs from '@emailjs/browser';

const Services = () => {

    const [sendcv, setSendcv] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h5tup3k', 'template_iqhox7t', form.current, 'EXBiAYjECItMq9eNO')
            .then((result) => {
                setSendcv(true)
                setShow(false)
            }, (error) => {
                setSendcv(false)
            });
    };

    // dark mood
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    // dark mood //
    // Animation 
    const transition = { duration: 1, type: 'spring' }
    // Animation //

    const [show, setShow] = useState(false)

    return (
        <div className="services" id='Services'>
            {/* left side  */}
            <div className="awesome">
                <span style={darkMode ? { color: 'white' } : { color: '' }}>My Awesome</span>
                <span>Services</span>
                <span style={darkMode ? { color: 'white' } : { color: '' }}>As a frontend developer, I offer a range of services to help businesses create engaging and user-friendly web experiences. Whether you need a new website or want to improve the performance of an existing one, I have the skills and expertise to help you achieve your goals.</span>
                <button className='button s-button' onClick={() => setShow(true)}>Download CV</button>
                {
                    show && <div className="cvDownload">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="email" name="user_email" required placeholder='Enter Your Email' />
                            <input type="submit" className='button resume-button' value="Send" />
                        </form>
                        <i>Enter Your Email To Receive CV</i>
                        <br />

                    </div>
                }
                {
                    sendcv && <span style={{ color: 'green', marginTop:'1rem' }}>Sent CV on your Email. <br /> Please check your Email.</span>
                }

                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>

            {/* right side  */}
            <div className="cards">
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Front-End'}
                        detail={'Html, Css, JavaScript, Bootstrap, React Js'}
                    />
                </motion.div>
                {/* second card  */}
                <motion.div
                    initial={{ left: "-11rem", top: "14rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    style={{ left: '-4rem', top: '12rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Back-End'}
                        detail={'Python, Django, Php, phpMyAdmin, MySQL'}
                    />
                </motion.div>
                {/* 3rd card  */}
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    style={{ left: '12rem', top: '19rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'Design'}
                        detail={'Photoshop, CorelDraw, Illustrator, Figma, Adobe xd'}
                    />
                </motion.div>

                <div className="blur s-blur2" style={{ background: 'var(--purple)' }}>

                </div>
            </div>
        </div>
    )
}

export default Services