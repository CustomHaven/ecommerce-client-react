import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

function CartTotals({value, history}) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 d-flex flex-column align-items-end mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <button 
                                className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                                type='button'
                                onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal : <strong className='oswald'><span style={{color: 'var(--mainYellow)'}}>$</span>{cartSubTotal}</strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax : <strong className='oswald'><span style={{color: 'var(--mainYellow)'}}>$</span>{cartTax}</strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                                total : <strong className='oswald'><span style={{color: 'var(--mainYellow)'}}>$</span>{cartTotal}</strong>
                            </span>
                        </h5>
                        <PayPalButton 
                            total={cartTotal}
                            clearCart={clearCart}
                            history={history}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartTotals
