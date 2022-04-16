import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div id='reviews' className='container-fluid'>
            <h2 className='text-bold my-4'>Client Feedback</h2>
            <div className='reviews-container'>
                {
                    reviews.map(review => <Review
                    key = {review.id}
                    review = {review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;