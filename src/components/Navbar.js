import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ButtonContainer, NavWrapper } from './Styles';
import logo from '../logo.svg';


class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                { /* 
                    https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ms-5">
                        <Link to='/' className='nav-link'>
                            products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ms-auto'>
                    <ButtonContainer>
                        <i className="fas fa-cart-plus"></i>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

export default Navbar

