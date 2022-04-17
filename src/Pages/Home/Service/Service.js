import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Service = ({ service }) => {
    const { name, price, description, picture } = service;
    
    return (

        <div className='App border border-2 border-dark rounded p-3'>
            <img style={{ height: '250px' }} className='w-100 rounded' src={picture} alt="" />
            <h3 className='mt-2'>{name}</h3>
            <p className='text-start'><small>{description}</small></p>
            <p>Price: {price}</p>
            <Link className='btn btn-primary w-50' to='/checkOut'>
                Book Now
            </Link>
        </div>


    );
};

export default Service;