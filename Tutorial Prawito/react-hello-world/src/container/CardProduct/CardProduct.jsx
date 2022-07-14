import React, {Component} from 'react';

class CardProduct extends Component {
    state = {
        order: 2,
        name : 'Daging Kuda Berbagai macam Rasa'
    }

    handleCounterChange = (value) => {
        this.props.onCounterChange(value);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1,
            name : 'Berubah !!!!!'
        }, ()=> {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
        if(this.state.order > 0 ) {
            this.setState({
                order: this.state.order - 1,
                name : 'Daging Kuda Berbagai macam Rasa'
        }, ()=> {
            this.handleCounterChange(this.state.order)
        })
        } else {
            alert('Minus tidak bisa lebih dari 0')
        }
    }

    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-obj7u0_7c60f729.jpeg?region=0%2C0%2C1200%2C513" alt="img-product"/>
                    </div>
                    <p className="product-title">{this.state.name}</p>
                    <p className="product-price">Rp 410.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct;