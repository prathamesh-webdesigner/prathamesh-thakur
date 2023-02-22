import React from 'react';
import './Portfolioimages.css';

function Portfolioimages({ portfolioImage, foliotitle, foliopost, linkApp }) {
    return (
        <>
            <a href={linkApp} target='_blank'>
                <div className="box">
                    <img src={portfolioImage} alt="" />
                    <div className="box-content">
                        <div className="content">
                            <h3 className="title">{foliotitle}</h3>
                            <h6 className="post">{foliopost}</h6>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Portfolioimages