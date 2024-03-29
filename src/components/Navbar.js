import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import {ButtonContainer} from './Button' 
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk
                */}
                <Link to="/"><img src={logo}/></Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Product</Link>
                        <Link to="/test" className="nav-link">Test</Link>
                        {/* <Link to="/testhooks" className="nav-link">Hooks</Link> */}
                        {/* <Link to="/testhooks2" className="nav-link">Hooks 2</Link> */}
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                    <span className="lnr lnr-cart"></span>my cart
                    </ButtonContainer>
                    </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite);
    font-size: 19px;
    text-transform: capitalize;
}
`
