import React from "react";
import './Footer.css'
import footer_logo from '../Assets/dallas_mavs_logo_big.png'
const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>MAVS STABLE</p>
            </div>
            <ul className="footer-links">
                <li>Emerging Tech</li>
                <li>Warehouse</li>
                {/* <li>Offices</li>
                <li>About</li>
                <li>Contact</li> */}
            </ul>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
