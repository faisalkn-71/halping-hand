import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ height: '90vh' }}
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='bg-black bg-opacity-25'>
                        <h3>Committed with Client</h3>
                        <p>In the juditial section it's hard to find a trustable hand. That's why I am here. I am committed with my client.</p>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '90vh' }}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='bg-black bg-opacity-25'>
                        <h3>Help to Find Justice</h3>
                        <p>I am here to help you to find the justice in your case in juditial section.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};
export default Banner;