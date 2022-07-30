import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import contactImg from '../../images/01.png'
import { Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import google from "../../images/google-g-2015-logo-svgrepo-com.svg"
import Loading from '../Shared/Header/Loading.js/Loading';
const SignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('');
    const [displayName, setDisplayName] = useState('');
    const [confrimPassword,setConfrimPassword]=useState("")
    
   
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,loading,
        error] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile] = useUpdateProfile(auth);
      const [sendEmailVerification] = useSendEmailVerification(auth);
      console.log(user);
      const navigate=useNavigate()
      if(user){
        navigate('/')
      }
      if(error){
        toast(error?.message)
      }
      if(loading){
        return <Loading />
      }
    const handelName=(e)=>{
      setDisplayName(e.target.value)
    }
    const handelEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handelPass=(e)=>{
        setPassword(e.target.value)
    }
    const handeleConfrimPass=(e)=>{
      setConfrimPassword(e.target.value)
  }
  const handelGoogle=()=>{
    signInWithGoogle()
  }
   
    const handelRegister=async(e)=>{
        e.preventDefault()
        if(password!==confrimPassword){
          toast("Your Two Password don't match..Please try To Again")
          return
      }
      if(password.length<6){
          toast('Please type password at least 6 character')
      }
       await createUserWithEmailAndPassword
        (email,password)
      await  sendEmailVerification()
      toast('sent verification email')
        await updateProfile({displayName})
        toast("Updated profile")
        e.target.reset()
    }
    return (
        <div className='mt-5'>
          <div className="container mt-5">
            <div className="row shadow">
              <div className="col-md-8">
                <Fade left>
              <form className='pt-5 mx-auto w-75' onSubmit={handelRegister}>
          <div className="form-group">
    <label for="exampleInputEmail1">Your Name</label>
    <input type="text" onBlur={handelName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" required/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onBlur={handelEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onBlur={handelPass} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Confrim Password</label>
    <input onBlur={handeleConfrimPass} type="password" className="form-control" id="exampleInputPassword1" placeholder="Confrim Password" required/>
  </div>
  
  <p>Already Have An Acoount?. <Link className="text-decoration-none" to='/signIn'>Login</Link></p>
  <Button  className="w-100 mt-3" variant="primary" type="submit">
    Registration
  </Button>
  <ToastContainer />
  <div className='d-flex align-items-center'>
 <div style={{height:"1px"}} className="bg-primary w-50"></div>
  <p className="mt-2 px-2">Or</p>
  <div style={{height:"1px"}} className="bg-primary w-50"></div>
  <br />
  
 </div>
 <div className="w-50 mx-auto pt-3 me-5  pb-4">
  <button onClick={()=>handelGoogle()} className="btn btn-warning">Registration with <img  style={{width:"30px"}} src={google} alt="" /> </button>
  </div>
</form>
</Fade>
              </div>
              <div className="col-md-4 pt-5">
                <Fade right>
                <img className='img-fluid' src={contactImg} alt="" />
                </Fade>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SignUp;