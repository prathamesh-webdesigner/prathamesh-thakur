import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import profilePic1 from "../../img/karma.png";
import profilePic2 from "../../img/zobble.png";
import profilePic3 from "../../img/diquery.png";
import profilePic4 from "../../img/ttlifesciences.png";
import profilePic5 from "../../img/KreyaHR.webp";
import profilePic6 from "../../img/skillmine.png";

// slider 
import "swiper/css";
import "swiper/css/pagination";
// slider //

// dark mood 
import { themeContext } from '../../Context';
import { useContext } from 'react';
// dark mood //

const Testimonials = () => {

    // dark mood
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    // dark mood //

    const clients = [
        {
            img: profilePic1,
            review:
                "Working with Prathamesh was smooth and professional. He quickly understood our complex requirements and delivered a clean, user-friendly website that perfectly represents our HR and compliance services.",
        },
        {
            img: profilePic2,
            review:
                "Prathamesh has an excellent eye for design and detail. His work on our e-learning platform was creative, responsive, and technically solid — making the user experience seamless.",
        },
        {
            img: profilePic3,
            review:
                "We loved how Prathamesh translated our digital marketing ideas into a fast, modern, and interactive website. His ability to combine creativity with technical execution is impressive.",
        },
        {
            img: profilePic4,
            review:
                "Prathamesh delivered exactly what we needed for our international conference website. It was elegant, professional, and easy for our attendees to navigate — a great asset to our event.",
        },
        {
            img: profilePic2,
            review:
                "The website Prathamesh built for us is not only attractive but also optimized for performance. He ensured our recruiter services were showcased clearly, helping us connect better with clients.",
        },
        {
            img: profilePic5,
            review:
                "Prathamesh created a highly functional recruitment site for us with smooth navigation and a great design. His work has made job applications much simpler for candidates.",
        },
        {
            img: profilePic6,
            review:
                "Prathamesh impressed us with his ability to understand technical requirements and turn them into a polished website. His solutions are modern, scalable, and aligned with our IT consulting services.",
        },
    ];
    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

            </div>

            {/* Slider  */}
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span style={darkMode?{color:'white'}:{color:''}}>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Testimonials