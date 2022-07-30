import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Header from '../Shared/Header/Header';
const Additem = () => {
  const [user]=useAuthState(auth)
  
      
    const handelNewitem=(e)=>{

 e.preventDefault()  
 const email=e.target.email.value
 const name=e.target.name.value;
 const price=e.target.price.value;
 const quantity=parseInt(e.target.quantity.value);
 const img=e.target.img.value;
 const SupplierName=e.target.SupplierName.value;
 const description=e.target.description.value
 const newItem={name,price,quantity,img,description,SupplierName,email}

    fetch(`https://gentle-temple-80074.herokuapp.com/inventory`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
    }
    const handelAdd=()=>{
      alert("item-added")
    }
    return (
        <div>
           
             <section class="w-100 h-100">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Added New Item</p>

                <form onSubmit={handelNewitem} class="mx-1 mx-md-4">

                <div class="d-flex flex-row align-items-center mb-4">
                   
                   <div class="form-outline flex-fill mb-0">
              
                    <input type="email" name="email" value={user?.email} id="" className='form-control' readOnly />
                    
                   </div>
                 </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                   
                    <div class="form-outline flex-fill mb-0">
               
                     <input type="text" name="name" id="" className='form-control' placeholder='Product Name' required/>
                     
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    
                    <div class="flex-fill mb-0">
                    
                    <input type="text" name="price" id="" className='form-control' placeholder='Product.price' required/>
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                   
                    <div class="form-outline flex-fill mb-0">
                   
                    <input type="number" name="quantity" id="" className='form-control'  placeholder='Product.quantity' required/>
                     
                      
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                   
                    <div class="form-outline flex-fill mb-0">
                   
                    <input type="text" name="img" id="" className='form-control' placeholder='Product.img' required/>
                     
                      
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                   
                    <div class="form-outline flex-fill mb-0">
                   
                    <input type="text" name="SupplierName" id="" className='form-control'placeholder='Product.SupplierName' required/>
                     
                      
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                   
                    <div class="form-outline flex-fill mb-0">
                   
                   <textarea name="description" id="" cols="30" rows="10" className='form-control' placeholder='Description'  required></textarea>
                     
                      
                    </div>
                  </div>
                 

                 

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                   <input onClick={handelAdd}   type="submit" className="btn btn-info p-3"  value='Add NewItem'/>
                  </div>

                </form>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Additem;