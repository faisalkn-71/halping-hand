import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';



const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigateRegister = () => {
        navigate('/register');
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)

    }

    
    return (
        <div className='container w-50 mx-atuo mt-5'>
            <h2 className='text-primary text-center mb-3'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                
                {errorElement}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
               
            <p className='mt-3'>New to Helping Hand? <span onClick={navigateRegister} style={{ cursor: 'pointer' }} className='text-primary'>Please Register</span></p>
            
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;