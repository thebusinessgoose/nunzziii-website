import React from 'react'
import './header-bar.styles.scss';
import {Link} from 'react-router-dom';
import FollowMe from '../follow-me/follow-me.component';
import logo from '../../assets/nunzziii-logo.png';
import OnlineTraining from '../online-training/online-training.component';
import Services from '../services/services.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import {connect} from 'react-redux';

const HeaderBar = ({hidden}) => (
    <div className='header-bar'>
        <div className='options'>
            <Link className='logo-container' to='/'>
                <img src={logo} alt='logo' className='logo'></img>
            </Link>

            <Link className='option' to='/about'>
                About
            </Link>

            <OnlineTraining />

            <Services />

            <FollowMe />

            <CartIcon className='cart-icon'/>
            {
                hidden ? null: <CartDropdown />
            }

            {/* <a className='option' href="https://www.vipfitnessvancouver.com/">
                VIP Fitness
            </a> */}

        </div>
    </div>
)

const mapStateToProps = ({cart: { hidden }}) => ({
    hidden
})

export default connect(mapStateToProps)(HeaderBar);