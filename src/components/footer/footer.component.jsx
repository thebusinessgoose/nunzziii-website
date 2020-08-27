import React from 'react'
import './footer.styles.scss';
import {Link} from 'react-router-dom';
import businessGoose from '../../assets/business-goose-transparent.png';

const Footer = () => (
    <div className='footer'>
        <div className='options'>
            <Link className='option' to='/about'>
                About
            </Link>
            <Link className='option' to='/faq'>
                FAQ
            </Link>
        </div>
        <div className='copyright'>
            {/* <img className='copyright-logo' src={businessGoose} alt=''></img> */}
            <span className='copyright-text'>
                &copy; Business Goose Designs 2020
            </span>
        </div>
    </div>
)

export default Footer;