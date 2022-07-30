import React from 'react';
import { useAuth, useAuthState } from 'react-firebase-hooks/auth';
import {useLocation,Navigate,} from "react-router-dom";
import auth from '../../firebase.init';
import Loading from '../Shared/Header/Loading.js/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
if(loading){
    return <Loading />
}
  if (!user) {
   
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }

    return  children;
};

export default RequireAuth;