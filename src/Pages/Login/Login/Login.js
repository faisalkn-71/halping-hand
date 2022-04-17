import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();
    const navigateRegister = () => {
        navigate('/register');
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if (user) {
        navigate('/home')
    }

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)

    }

    const handleResetPassword = async (event) => {
        const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email adress.')
        }
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorElement}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-3'><span onClick={handleResetPassword} style={{ cursor: 'pointer' }} className='text-primary'>Forget Password?</span></p>
            <p className='mt-3'>New to Helping Hand? <span onClick={navigateRegister} style={{ cursor: 'pointer' }} className='text-primary'>Please Register</span></p>
            <ToastContainer />

        </div>
    );
};

export default Login;