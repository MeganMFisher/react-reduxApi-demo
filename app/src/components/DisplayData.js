import React, { Component } from 'react';
import { getProducts } from '../ducks/productsReducer'; //action creator in reducer.
import { connect } from 'react-redux'; //so we can connect the app to redux.

class DisplayData extends Component {

    render() {

        const products = this.props.products.map((product, i) => {
            return (
                <div key={i}>
                    <h1>{ product.title }</h1>
                    <img src={ product.image } alt='Product'/>
                    <h6>{ product.price }</h6>
                </div>
            )
        })

        return (
            <div>
                <h1>Store</h1>
                <button onClick={this.props.getProducts}>View Products</button>
                <div className='productsContainer'>
                    { products }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.products)
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps, {getProducts})(DisplayData); //binding getProducts to dispatch so you don't have to yourself. 