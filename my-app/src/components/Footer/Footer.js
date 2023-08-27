import React from 'react';
import "./Footer.css";
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <Element className='footer'>
            <footer className="footer-container">
                <h5>ANNA'S SHOP</h5>
                <p className="info-footer"><FontAwesomeIcon icon={faLocationArrow} className="iconFooter" />227 Nguyễn Văn Cừ P4 Q5 TP.HCM</p>
                <p className="info-footer"><FontAwesomeIcon icon={faPhone} className="iconFooter" />0932.345.345 </p>
                <p className="info-footer"><FontAwesomeIcon icon={faEnvelope} className="iconFooter" />support@annas.com</p>
            </footer>
        </Element>

    );
}

export default Footer;
