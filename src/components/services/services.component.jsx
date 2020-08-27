import React from 'react';
import './services.styles.scss';
import {Link} from 'react-router-dom';

const Services = () => (
    <div class="services-dropdown">
        <div class="dropbtn">Other Services</div>
        <div class="dropdown-content">
            <Link className='dropdown-item' to='life-coaching'>Life Coaching</Link>
            <Link className='dropdown-item' to='motivational-speaking'>Motivational Speaking</Link>
            <a className='dropdown-item' href="https://www.vipfitnessvancouver.com/">
                VIP Fitness
            </a>
        </div>
    </div>
);

export default Services;