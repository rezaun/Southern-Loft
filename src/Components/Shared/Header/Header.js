import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import profile from "../../../images/profile.png"
const Header = () => {
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="navbar fixed navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">Southern Loft</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link active" aria-current="page" to="/career">Career</Link>

              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
              </li>

              {
                user ? <>

                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/manage">ManageItem</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/additem">AddItem</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/myitem">MyItem</Link>
                  </li>

                  <button onClick={logout} className='btn btn-info me-2'>SignOut</button>
                  <h6><img style={{ width: "40px" }} src={profile} alt="" />  {user?.displayName}</h6>

                </>




                  :
                  <button className='btn btn-info me-2'><Link className='text-decoration-none text-white' to="/signin">SingIn</Link></button>
              }
            </ul>
            <button className='btn btn-primary'><Link className='text-decoration-none text-white' to="/signup">SignUp</Link></button>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;