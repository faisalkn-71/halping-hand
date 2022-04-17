import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger mt-2'>Error: {error?.message}</p>
            </div>;
    }

    if(loading || sending){
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)

    }

    const navigateRegister = () => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast("Please Enter your E-mail Address")
        }

    }

    return (
        <div className='container w-50 mt-3 mx-auto'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {errorElement}

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <p className='mt-3'><span onClick={resetPassword} style={{ cursor: 'pointer' }} className='text-primary'>Forget Password?</span></p>

                <p className='mt-3'>New to Helping Hand? <span onClick={navigateRegister} style={{ cursor: 'pointer' }} className='text-primary'>Please Register</span></p>
            </Form>

            <SocialLogin></SocialLogin>
            <ToastContainer />

        </div>
    );
};

export default Login;