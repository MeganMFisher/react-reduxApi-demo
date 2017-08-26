import React, { Component } from 'react';
import { getProducts } from '../ducks/productsReducer'; //action creator in reducer.
import { connect } from 'react-redux'; //so we can connect the app to redux.

class DisplayData extends Component {


    render() {

        const products = this.props.products.map((product, i) => {
            return (
                <div className='product' key={i}>
                    <h4>{ product.title }</h4>
                    <img src={ product.image } alt='Product'/>
                    <h6>${ product.price }.00</h6>
                </div>
            )
        })

        return (
            <div>
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
        // products: state.products.products
        products: state.products
    }
}

export default connect(mapStateToProps, {getProducts})(DisplayData); //binding getProducts to dispatch so you don't have to yourself. 