import React from 'react';
import { Link } from 'react-router-dom';

const ServicesItems = (props) => {
    // console.log(props, 'props');
    const service = props.children[1]
    const {_id, service_id, title, img } = service;
    
    return (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title} </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button onClick={function named(){
                        
                    } } className="btn btn-primary">Checkout</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default ServicesItems;