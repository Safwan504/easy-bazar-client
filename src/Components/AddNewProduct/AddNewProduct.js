import React, { useState } from 'react';
import { useHistory } from 'react-router';
import SideBar from '../SideBar/SideBar';

const AddNewProduct = () => {
    const history =useHistory();

    const [newProduct, setNewProduct] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://salty-anchorage-61685.herokuapp.com/addNewProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                alert('New product added successfully');
                history.replace('/')
            })
    }

    const handleOnBlur = (e) => {
        const addedProduct = newProduct;
        addedProduct[e.target.name] = e.target.value;
        setNewProduct(addedProduct);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-8 mt-5">
                    <h3 className="text-secondary">Add New Product</h3>
                    <form onSubmit={handleSubmit}>
                        <input className="form-control" onBlur={handleOnBlur} type="text" name="name" placeholder="Product Name" required/><br />
                        <input className="form-control" onBlur={handleOnBlur} type="text" name="price" placeholder="Price" required/><br />
                        <input className="form-control" onBlur={handleOnBlur} type="text" name="description" placeholder="Description" required/><br />
                        <input className="form-control" onBlur={handleOnBlur} type="text" name="image" placeholder="Image URL" required/><br />
                        <button className = "btn btn-success btn-lg">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;