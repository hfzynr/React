import React, {Component, Fragment} from 'react';
import './Product.css'
// import logo from './../../img/4k-logo-svgrepo-com.svg'
import troley from './../../img/shopping-cart.png'

class Product extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="troley">
                        <img src={troley} alt=""/>
                        <div className="count">3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-obj7u0_7c60f729.jpeg?region=0%2C0%2C1200%2C513" alt="img-product"/>
                    </div>
                    <p className="product-title">Daging Kuda Berbagai macam Rasa</p>
                    <p className="product-price">Rp 410.000</p>
                    <div className="counter">
                        <button className="minus">-</button>
                        <input type="text" value={3} />
                        <button className="plus">+</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Product;