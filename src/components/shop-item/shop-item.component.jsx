import React from 'react';
import './shop-item.styles.scss';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

const ShopItem = ({item, addItem}) => {
    const { name, price, image } = item;

    return (
        <div className='shop-item'>
            <div className='image' style={{backgroundImage: `url(${image})`}}
            />
            <div className='shop-item-footer'>
                <span className='name'> {name}</span>
                <span className='price'> ${price}</span>
            </div>
            <div className='add-to-cart-btn' onClick={() => addItem(item)}>
                Add to Cart
            </div>
        </div>
)
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ShopItem);