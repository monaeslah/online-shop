import React from 'react';
import { connect } from 'react-redux'

function Cart(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.cart.map(item => <tr>
                        <th>{ item.name }</th>
                        <th>{ item.quantity }</th>
                        <th>
                            <button
                                onClick={() => props.addToCart(item)}
                            >
                                +
                        </button>
                        </th>
                        <th>
                            <button
                                onClick={() => props.removeFromCart(item)}
                            >
                                -
                        </button>
                        </th>
                        <th>
                            <button onClick={() => props.removeallFromCart(item)}

                            >

                                reset all
                            </button>
                        </th>
                    </tr>)

                }
            </tbody>
        </table>
    )
}
function mapStateToProps(state) {
    return {
        state: state.cart,
    }
}
function mapDispatchToProps(dispatch) {
    return {

        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })

        },

        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        },
        removeallFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

