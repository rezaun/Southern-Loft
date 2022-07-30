import React from 'react';
import about from "../../../images/abouts.jpg"
import Fade from 'react-reveal/Fade';
const About = () => {
    return (
        <div>
            <div className="container pt-5">
                <h3 className='text-primary text-center pt-5 pb-3'>About Us</h3>
                <div className="row">
                    <div className="col-md-6">
                    <Fade left>
                    <h6 className='text-info'>Welcome to Southern Loft!!</h6>
<p className='text-justify'>Southern Loft is a boutique home furnishings store offering furniture, décor, and design services in an inspiring atmosphere. We carry brands such as Norwalk, Palliser, Jonathan Louis, and many more!  Southern Loft is also the exclusive home of the New Caracole Boutique!
​
Southern Loft is located in the heart of Fayetteville, AR on North College.  Southern Loft offers a lovely and unexpected mix of home furnishings, from the transitional to the modern.

Southern Loft is Northwest Arkansas' full design boutique for all your home interior needs. The place where design is inspired and luxury is affordable.
Southern Loft hand picks the manufactures we work with to provide the highest quality furniture, lighting and décor at an exceptional value.</p>

</Fade>
                    </div>
                   
                    <div className="col-md-6">
                        <Fade right>
                    <img className='img-fluid' src={about} alt="" />
                    </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;