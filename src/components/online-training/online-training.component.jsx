import React from 'react';
import './online-training.styles.scss';
import {Link} from 'react-router-dom';


const OnlineTraining = () => (
        <div class="online-training-dropdown">
            <div class="dropbtn">
                Online Training
                <div className='arrow'>&#8964;</div>
            </div>
            
            <div class="dropdown-content">
                <Link className='dropdown-item' to="/training-programs">
                    Training Programs
                </Link>
                <Link className='dropdown-item' to="/transformations">
                    Transformations
                </Link>
            </div>
        </div>
)

export default OnlineTraining;