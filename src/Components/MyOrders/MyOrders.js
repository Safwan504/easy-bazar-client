import React, { useEffect, useState } from 'react';
import MyOrderedItems from '../MyOrderedItems/MyOrderedItems';

const MyOrders = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [myOrders, setMyOrders] = useState([])
    useEffect(() => {
        fetch(`https://salty-anchorage-61685.herokuapp.com/order/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    myOrders.map(orders => <MyOrderedItems orders={orders} key={orders._id}></MyOrderedItems>)
                }
            </div>
        </div>

    );
};

export default MyOrders;