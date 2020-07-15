import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, info, img, price, inCart, title} = value.detailProduct;
                    return (
                        <div className='container py-5'>

                            {/* title start */}
                            <div className='row'>
                                <div className='col-10 mx-auto my-5 text-center text-blue'>
                                    {title}
                                </div>
                            </div>
                             {/* title end */}

                             {/* product info */}
                             <div className='row'>
                                 {/* product image */}
                                <div className='col-10 mx-auto col-md-6 my-3'>
                                    <img src={img} className='img-fluid' alt='product'/>
                                </div>
                                {/* product text */}
                                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                    <h2>model: {title}</h2>
                                    <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                        made by : <span className='text-uppercase'>{company}</span> 
                                    </h4>
                                    <h4 className='text-blue'>
                                        <strong>
                                            price : <span>$</span> {price} 
                                        </strong>
                                    </h4>
                                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                        some info about the product:
                                    </p>
                                    <p className='text-muted lead'>{info}</p>

                                    {/* buttons */}
                                    <div>
                                        <Link path to='/'>
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>

                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false} 
                                            onClick={() => {value.addToCart(id); value.openModal(id)}}
                                        >
                                            {inCart ? 'inCart' : 'add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                             </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
