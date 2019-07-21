import React from 'react'
import { connect } from 'react-redux'
import ProductListItem from './product-list-item'
import { dispatch } from 'rxjs/internal/observable/pairs';
import {cartItemWithQuantity } from '../carts'
function ProductsListing(props) {
    return (
        <div className="product-listing">
            {
                props.products.map(product =>
                    <ProductListItem
                     product={product} 
                    cart={cartItemWithQuantity(props.cart)}
                     addToCart={props.addToCart}
                     />)
            }
        </div>
    )
}
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapDispatchToProps(dispstch) {
    return {
        addToCart: (item) => {
            dispstch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListing)