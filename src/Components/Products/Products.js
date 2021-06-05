import React, { useEffect, useState } from 'react';
// import fakeData from '../../fakeData/fakeData.json'
import PorductCard from '../ProductCard/PorductCard';

const Products = () => {

    const [productData, setProductData] = useState([]);
    useEffect (() => {
        fetch('https://salty-anchorage-61685.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProductData(data))
    }, [])
    // const addAllProduct = () => {
        // fetch('https://salty-anchorage-61685.herokuapp.com/addProducts', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(fakeData)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
    // }

    return (
        <div className="row">
            {/* <button onClick={addAllProduct}>Add All</button> */}
            {
                productData.map(product => <PorductCard product={product} key={product._id}></PorductCard>)
            }
        </div>
    );
};

export default Products;