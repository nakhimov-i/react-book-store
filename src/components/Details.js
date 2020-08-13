import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, author, info, img, price, inCart, title} = value.detailProduct;
                    return (
                        <div className='container py-5'>

                             {/* product info */}
                             <div className='row'>
                                 {/* product image */}
                                <div className='col-10 mx-auto col-md-6 my-3'>
                                    <img src={img} className='img-fluid' alt='product'/>
                                </div>
                                {/* product text */}
                                <div className='col-10 mx-auto col-md-6 my-3'>
                                    <h3 className='text-blue'>{title}</h3>
                                    <h3 className='mt-3 mb-2'>
                                        by <span>{author}</span> 
                                    </h3>
                                    <h4 className='text-blue mt-3'>
                                        <strong>
                                            Price : <span>$</span> {price} 
                                        </strong>
                                    </h4>
                                    <p className='font-weight-bold mt-3 mb-0'>
                                        Some info about the book:
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
