import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
       <footer className='App mt-5 bg-black p-3 text-white'>
           <p><small>copyright &copy; {year} reserved by <b>Faisal Karim</b></small></p>
       </footer>
    );
};

export default Footer;