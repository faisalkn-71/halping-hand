import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='container w-50 mx-atuo mt-5'>
            <h2 className='text-primary text-center mb-3'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" name='name' placeholder="Your name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={() => setAgree(!agree)}
                        className={agree ? 'text-primary' : 'text-danger'}
                        type="checkbox"
                        label="Accept Helping Hand Terms and Condition" />
                </Form.Group>
                <Button
                    disabled={!agree}
                    variant="primary"
                    type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-3'>Already have an account? <span onClick={navigateLogin} style={{ cursor: 'pointer' }} className='text-primary'>Please Login</span></p>
        </div>
    );
};

export default Register;