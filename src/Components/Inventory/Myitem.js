import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from "axios"
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Header/Loading.js/Loading';
const Myitem = () => {
    const [myItems,setItems]=useState([])
    const [loading,setLoading]=useState(false)
    const [user]=useAuthState(auth)
    const navigate=useNavigate()
    
    useEffect(()=>{
      
        const getmyItem = async () => {
          const email = user?.email;
          const url = `https://gentle-temple-80074.herokuapp.com/myitem?email=${email}`
          try {
              const { data } = await axios.get(url, {
                  headers: {
                      authorization: `Bearer ${localStorage.getItem('accessToken')}`
                  }
              });
              setLoading(true)
              setItems(data);
          } catch (error) {
              toast(error.message);
              
        // if (error.response.status === 401 || error.response.status === 403) {
        //           signOut(auth);
        //           navigate('/signin')
        //       }
          }
      }
      getmyItem();
    }, [user]);
    
    const deleteHandel=(id)=>{
        const confrimDelete=window.confirm("Are You Sure Want To Delete This Item?")
        if(confrimDelete){
          const url=`https://gentle-temple-80074.herokuapp.com/inventory/${id}`
          fetch(url,{
            method:"DELETE"
          })
          .then(res=>res.json())
          .then(data=>{
            const deletedItem=myItems.filter(item=>item._id!==id)
            setItems(deletedItem)
          })
        }
        }
      
      return (
          <div className='container mt-5 pt-5'>
           
            
              <div className="row row-cols-1 row-cols-md-3 g-4">
                  {loading?
                      myItems.map(items=>
    <div key={items._id} className="col">
     
      <div className="card">
      <img  src={items?.img} className="img-fluid rounded-start" alt="..." />
        <div className="card-body">
        <h5 className="card-title">Item Name:{items?.name}</h5>
          <h6 className="card-title">Price: {items?.price}$</h6>
          <h6 className="card-title">Quantity: {items?.quantity}</h6>
          <h6 className="card-title">SupplierName: {items?.SupplierName}</h6>
          <p className="card-text">Item Description:{items?.description}</p>
          <button className='btn btn-danger' onClick={()=>deleteHandel(items._id)}>Delete</button>
        </div>
      </div>
   
    </div>
    
    )
    :
    <Loading />
  }
  </div>
  
          </div>
      );
};

export default Myitem;