import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';

function Cart(props) {

    console.log("ff", props.cart)
    return (
        <React.Fragment>

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
                        props.item && props.item.map(item => <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button
                                    onClick={() => props.addToCart(item)}
                                >
                                    +
                        </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => props.removeFromCart(item)}
                                >
                                    -
                        </button>
                            </td>
                            <td>
                                <button onClick={() => props.removeAllFromCart(item)}

                                >

                                    reset all
                            </button>
                            </td>
                        </tr>)

                    }
                </tbody>
            </table>
        </React.Fragment>
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
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

