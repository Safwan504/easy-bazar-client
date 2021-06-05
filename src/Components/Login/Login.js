import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import image from '../../images/google.png';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from: {pathname: "/"}};
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                const {displayName, email, photoURL} = user;
                const loggedInUser = {name: displayName, email: email, img: photoURL};
                console.log(loggedInUser);
                localStorage.setItem('user', JSON.stringify(loggedInUser));
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <div className="text-center m-5 p-5">
            <button onClick={handleGoogleSignIn} className="btn btn-light shadow p-3">
                <img width='20px' src={image} alt="" /> Sign in with google
            </button>
        </div>
    );
};

export default Login;