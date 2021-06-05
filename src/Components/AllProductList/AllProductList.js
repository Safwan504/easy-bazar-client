import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminProductList from '../AdminProductList/AdminProductList';
import SideBar from '../SideBar/SideBar';

const AllProductList = () => {
    const [productData, setProductData] = useState([]);
    useEffect (() => {
        fetch('https://salty-anchorage-61685.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProductData(data))
    }, [])


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-8">
                    <table className="table caption-top table-hover mt-5">
                        <caption><h3>All Products</h3></caption>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productData.map(product => <AdminProductList product={product} key={product._id}></AdminProductList>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default AllProductList;