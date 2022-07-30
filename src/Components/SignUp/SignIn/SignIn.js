import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle,useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Loading from "../../Shared/Header/Loading.js/Loading"
import loginImg from '../../../images/mobile-login-concept-illustration_114360-135.webp'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';
import auth from '../../../firebase.init';
import google from "./../../../images/google-g-2015-logo-svgrepo-com.svg"
import useToken from '..//../../Hooks/useToken'
import {useLocation,Navigate,} from "react-router-dom";
const SignIn = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
      console.log(user);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
        const navigate=useNavigate()
      
       const location = useLocation();
      
    
        
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
}


      if(error){
        toast(error?.message)
      }
    const handelEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handelPass=(e)=>{
        setPassword(e.target.value)
    }
    const handelGoogle=()=>{
      signInWithGoogle()
    }
   
    const handelLogin=async(e)=>{
        e.preventDefault()
       await signInWithEmailAndPassword(email,password)
       const { data } = await axios.post('https://gentle-temple-80074.herokuapp.com/token', { email });
       localStorage.setItem('accessToken', data.accessToken);
       navigate(from, { replace: true });
      
    }
    const handelResetPassword=async()=>{
 
      await sendPasswordResetEmail(email);
      toast('Sent email');
     }
    return (
        <div className='mt-5'>
         <div className="container shadow pt-5">
           <div className="row mt-2">
             <div className="col-md-8">
             <form className='pt-5 mx-auto w-75' onSubmit={handelLogin}>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onBlur={handelEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onBlur={handelPass} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <p className="pt-2 fw-bold">Are You New Mahira Furniture Warehouse?Plaase....<Link className='text-decoration-none text-danger fw-bolder' to="/signUp">Registration</Link> </p>
  <h6>Forgot Your Password?<Button onClick={handelResetPassword} className="fs-6" variant="btn btn-link">Reset</Button></h6>
  

  <Button  className="w-100 mt-3" variant="primary" type="submit">
    Login
  </Button>
  <ToastContainer />
  <div className='d-flex align-items-center'>
 <div style={{height:"1px"}} className="bg-primary w-50"></div>
  <p className="mt-2 px-2">Or</p>
  <div style={{height:"1px"}} className="bg-primary w-50"></div>
  <br />
  
 </div>
 <div className="w-50 mx-auto pt-3 me-5  pb-4">
  <button onClick={()=>handelGoogle()} className="btn btn-warning">SignIn with <img  style={{width:"30px"}} src={google} alt="" /> </button>
  </div>
 
</form>
             </div>
             <div className="col-md-4">
               <img className='img-fluid' src={loginImg} alt="" />
             </div>
           </div>
         </div>
        </div>
    );
};

export default SignIn;