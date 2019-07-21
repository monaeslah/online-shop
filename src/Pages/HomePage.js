import React from 'react'

import Productlisting from '../Features/products-listing'

import data from '../data/products.json'


export default function Homepage(props) {
    return (
        <div>
            <h2>HomePage</h2>
            <Productlisting products={data.products} />

        </div>
    );
}