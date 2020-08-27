import React from 'react';
import './life-coaching-page.styles.scss';
import lifeCoachingImage from '../../assets/Nunzziii18.JPG';

const LifeCoaching = () => (
    <div className='page'>
        <h2 className='page-heading'>
            Life Coaching
        </h2>
        <div className='page-body'>
            <p className='page-description'>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.
            </p>
            <img className='life-coaching-image' src={lifeCoachingImage} alt='img'></img>
        </div>
    </div>
)

export default LifeCoaching;