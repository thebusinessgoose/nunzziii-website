import React from 'react';
import './motivational-speaking-page.styles.scss';
import motivationalSpeakingImage from '../../assets/Nunzziii25.JPG';

const MotivationalSpeaking = () => (
    <div className='page'>
        <h2 className='page-heading'>
            Motivational Speaking
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
            <img className='motivational-speaking-image' src={motivationalSpeakingImage} alt='img'></img>
        </div>
    </div>
)

export default MotivationalSpeaking;