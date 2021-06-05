import React from 'react';
import { Link } from 'react-router-dom';

const PorductCard = (props) => {
    const {_id, name, image, price, description} = props.product;

    return (
        <div className='col-md-4 mt-3'>
            <div className="rounded m-3 shadow text-center h-100">
                <img width='250px' src={image} alt=""/>
                <h4 className="p-2">{name}</h4>
                <h3>{price}</h3>
                <Link to={`/checkout/${_id}`}><button className="btn btn-success">Buy now</button></Link>
            </div>
        </div>
    );
};

export default PorductCard;