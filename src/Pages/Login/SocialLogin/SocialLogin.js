import React from 'react';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    let errorElement;
    if(googleError || githubError){
        errorElement = <p className='text-danger'>Error: {googleError?.message} {githubError?.message}</p>
    }

    if(googleLoading || githubLoading){
        return <Loading></Loading>
    }

    if(googleUser || githubUser) {
        navigate(from, { replace: true });    
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