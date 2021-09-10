import React from 'react';
import CartItem  from './CartItem';

function CartList(props) {
    const {cart} = props.value;
    // console.log(cart)
    return (
        <div className='container-fluid'>
            {cart.map(item => 
                <CartItem 
                    key={item.id}
                    item={item}
                    value={props.value}
                />
            )}
            <CartItem />
        </div>
    )
}

export default CartList
