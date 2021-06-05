import React from 'react';
import { useHistory } from 'react-router';

const AdminProductList = (props) => {
    const history = useHistory();
    const product = props.product;
    const { name, price, _id } = product;

    const handleDelete = () => {
        fetch(`https://salty-anchorage-61685.herokuapp.com/deleteProduct/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
            alert("Product Deleted Successfully")
            history.replace('/home')
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td><button onClick={handleDelete} className="btn btn-danger">Delete</button></td>
        </tr>
    );
};

export default AdminProductList;