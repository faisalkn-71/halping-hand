import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
       <footer className='mt-4'>
           <p><small>copyright &copy; {year} reserved by <b>Faisal Karim</b></small></p>
       </footer>
    );
};

export default Footer;