import React from 'react';

const Review = ({review}) => {
    const {name, image, feedback} = review;

    return (
        <div className='border border-2 border-dark rounded p-3'>
            <img style={{width:'100px', height:'100px'}} src={image} alt="" />
            <h3 className='mt-3'>{name}</h3>
            <p className='text-start'><small>{feedback}</small></p>
        </div>
    );
};

export default Review;
