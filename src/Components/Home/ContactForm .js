import React from 'react';
import contact from "../../images/hs-contact-us-figure.png"
import Fade from 'react-reveal/Fade';
const ContactForm  = () => {
    return (
        <div className='container pt-5 pb-3'>
            <div className="row shadow">
                <h3 className='pt-5 text-primary text-center'>Contact Us</h3>
                <div className="col-md-6 pt-5">
                    <Fade left>
                <img className='img-fluid' src={contact} alt="" />
                </Fade>
                </div>
                <div className="col-md-6 pt-2">
                <Fade right>
                <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Your Delivery ID</label>
    <input type="number" class="form-control rounded" id="exampleInputPassword1"required />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Describe Your Issue</label>
  <textarea className='form-control rounded' name="" id="" cols="30" rows="10" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary mb-3">Submit</button>
</form>
</Fade>             
                </div>
            </div>
        </div>
    );
};

export default ContactForm ;