import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>    
                    {
                        (value) => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="phone" className="card-img-top" />
                            </Link>
                            <button className="cart-btn" disabled={inCart ? true : false}
                             onClick={() => {value.addToCart(id);
                              value.openModal(id)}}>{inCart? (<p className="mb-0 text-capitalize" disabled>in cart</p>) : (<span className="lnr lnr-cart"></span>)}</button>
                             
                        </div>
                        )
                    }
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-bluemb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s;
}
.card-footer{
    background:transparent;
}
&:hover{
    .card-footer{
        background:rgba(247,247,247);
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    background:var(--lightBlue);
    border:0;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:3px 0 0 0;
    transform:translate(100%,100%);
    transition:all 1s;
}
.img-container:hover .cart-btn{
    transform:translate(0,0);
}
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`
