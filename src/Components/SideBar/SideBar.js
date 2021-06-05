import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="d-grid gap-2 mt-5 bg-secondary bg-gradient text-center p-5 rounded">
            <Link to="/allProductList"><button className="btn btn-dark btn-lg">All Products</button></Link>
            <Link to="/addNewProduct"><button className="btn btn-dark btn-lg">Add Product</button></Link>
        </div>
    );
};

export default SideBar;