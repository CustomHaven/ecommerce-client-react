import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ModalContainer } from './Styles';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Styles';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id='modal' className="p-5 col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>item added to the cart</h5>
                                        <img src={img} alt="product" className="img-fluid" />
                                        <h5 className='pt-2'>{title}</h5>
                                        <h5 className="text-muted">price : $ {price}</h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={closeModal}>
                                                continue shopping
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer cart onClick={() => closeModal()}>
                                                go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        )
    }
}

export default Modal