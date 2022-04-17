import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    if(error || error1){
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if(user || user1) {
        navigate('/home')
    }
    return (
        <div>

            <div className='row'>
                <div className='col'><hr></hr></div>
                <div className='col-auto'>
                    <p>or</p>
                </div>
                <div className='col'><hr></hr></div>
            </div>

            {errorElement}

            <button
            className='App btn btn-primary w-50 d-block my-3 mx-auto'
            onClick={() => signInWithGoogle()}
            >
                <img src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
            <button
            className='App btn btn-primary w-50 d-block my-3 mx-auto'
            onClick={() => signInWithGithub()}
            >
                <img src={github} alt="" />
                <span className='px-2'>Github Sign In</span>
            </button>
        </div>
    );
};

export default SocialLogin;