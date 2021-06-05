import React from 'react';
import { useHistory } from 'react-router';

const MyOrderedItems = (props) => {
    const orders = props.orders;
    const { productName, productImage, price, _id } = orders;
    const history = useHistory();

    const handleCancel = () => {
        fetch(`https://salty-anchorage-61685.herokuapp.com/deleteOrder/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
            alert("Order cancelled")
            history.replace('/home')
    }
    return (
        <div className="col-md-4 mb-5 text-center">
            <div className="shadow m-3 p-3 rounded h-100">
                <img width="200px" src={productImage} alt="" />
                <h4>{productName}</h4>
                <div className="d-flex justify-content-between p-3">
                    <h3 className="mt-3"> Price: <span className="text-success">{price}</span></h3>
                    <button onClick={handleCancel} className="btn btn-danger mt-3">Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default MyOrderedItems;