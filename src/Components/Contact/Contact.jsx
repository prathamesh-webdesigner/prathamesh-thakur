import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

// dark mood 
import { themeContext } from '../../Context';
import { useContext } from 'react';
// dark mood //


const Contact = () => {

    // dark mood
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    // dark mood //

    // contact form submission 
    const form = useRef();

    // showing email success or error msg 
    const [done, setDone] = useState(false)
    // showing email success or error msg //

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h5tup3k', 'template_89dqzyq', form.current, 'EXBiAYjECItMq9eNO')
            .then((result) => {
                console.log(result.text);
                // showing email success or error msg 
                setDone(true)
                // showing email success or error msg //
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact-form" id="Contact">
            {/* left side copy and paste from work section */}
            <div className="w-left">
                <div className="awesome">
                    {/* darkMode */}
                    <span style={darkMode?{color:'white'}:{color:''}}>Get in Touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Message" />
                    <input type="submit" value="Send" className="button" />
                    <span style={{ color: 'green', fontWeight: 'bold', fontSize: '1.5rem' }}>{done && "Thanks for Contacting me"}</span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact