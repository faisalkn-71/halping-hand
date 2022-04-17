import React from 'react';

const Blogs = () => {
    return (
        <div className=' container mt-3'>
            <h4>Difference between authorization and authentication?</h4>
            <p>In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person's or user's authorities are checked for accessing the resources. In authentication process, users or persons are verified. While in this process, users or persons are validated. Authentication is done before the authorization process. On the other hand authorization is done after the authentication process. Authentication needs usually user's login details. In authorization needs user's privilege or security levels.</p>
            <br />
            <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app. Moreover, Firebase is made with a developer in mind to solve all the issues they might face when making an app. Firebase, Backend-as-a-Service is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.</p>
            <p>Authentication is used by a server when the server needs to know exactly who is accessing their information or site. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            <br />
            <h4>What other services does firebase provide other than authentication</h4>
            <p>Firebase provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business. It is compatible with Web, iOS, Android, and OS X clients.There are many services which firebase provides other then authentication which are:
                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Function</li>
                    <li>Hosting</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
            </p>

        </div>
    );
};

export default Blogs;