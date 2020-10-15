import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import googleIcon from '../../images/google.png'
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useEffect } from 'react';
const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

   
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);

    }

    const [admin,setAdmin] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

   

    const handleGoogleSignIn = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            
            var token = result.credential.accessToken;
            
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email: email }
            setLoggedInUser(signedInUser);

            if (admin.length > 0) {
                history.replace('/adminDashboard')

                
            }
            else {

                history.replace(from);

                alert('If you are an admin, please login again to see the admin panel.')
                
            }
            // console.log(signedInUser)
        
        }).catch(function (error) {
        
            var errorCode = error.code;
            var errorMessage = error.message;
            
            var email = error.email;
            
            var credential = error.credential;
            
        });
    }


    useEffect(() => {
        fetch('https://shielded-basin-83435.herokuapp.com/getAdmin?email='+loggedInUser.email)
        .then((response) => response.json())
        .then(data =>{
            console.log(data)
            setAdmin(data)
        })
    },[loggedInUser])



    return (
        <div>
        <img style={{margin:'0 auto',display: 'block'}} className = 'w-25 ' src={logo} alt=""/>
        <div style={{width:'570px',height:'457px',border:'2px solid #ABABAB'}} className=" container rounded text-center my-5">
            <h3 className="my-5">Login With</h3>
        <Button onClick={handleGoogleSignIn} variant="outline-secondary" className = "rounded-pill" > <img style={{width:'10%'}}  src= {googleIcon} alt=""/> Continue with Google</Button>
        <h5 className='mt-4'>Don't have any account? <Link to = "">Create Account</Link></h5>
        </div>

    </div>
    );
};

export default Login;