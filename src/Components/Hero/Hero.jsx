import React from "react";
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/dirk_hero_img.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <div>
                    <div className="hero-hand-icon">
                        <p>See</p>
                    </div>
                    <p>Inventory</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Inventory</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero
