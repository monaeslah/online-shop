import React from 'react';

export default function RemoveButton(props) {
    return (
        <React.Fragment>
            <button
                onClick={() => props.removeFromCart(props.cartItem)
                }
            >remove from Cart </button>
        </React.Fragment>
    )
}
