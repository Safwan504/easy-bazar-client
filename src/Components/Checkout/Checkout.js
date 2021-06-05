import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const Checkout = () => {

    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState([]);

    const user = JSON.parse(localStorage.getItem('user'));
    const [orderData, setOrderData] = useState({
        userName: user.name,
        email: user.email,
    });

    const handleCheckout = (e) => {
        fetch('https://salty-anchorage-61685.herokuapp.com/addOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your order is placed successfully');
                history.replace('/')
            })
    }

    useEffect(() => {
        fetch(`https://salty-anchorage-61685.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                const newOrderData = orderData;
                newOrderData.productName = data.name;
                newOrderData.productImage = data.image;
                newOrderData.price = data.price;
                setOrderData(newOrderData);
            })
    }, []);



    return (
        <div className="container">
            <h3 className="mt-5">Checkout</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>1</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleCheckout} className="btn btn-primary mt-3">Checkout Now</button>
        </div>
    );
};

export default Checkout;