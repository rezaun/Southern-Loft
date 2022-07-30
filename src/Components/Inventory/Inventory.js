import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Header/Loading.js/Loading';
import Items from './Items';


const Inventory = () => {
    const [inventory,setInventory]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        fetch('https://gentle-temple-80074.herokuapp.com/inventory/')
        .then(res=>res.json())
        .then(data=>{
          setLoading(true)
          
          setInventory(data)})
    },[])
    const navigate=useNavigate()
    const manageItem=()=>{
        navigate('/manage')
    }
    return (
        <div>
            <h3 className='text-primary text-center pt-5 pb-3'>Our Items</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4  container-fluid">
        
           {
             loading?
             inventory.slice(0,6).map(item=><Items key={item._id}item={item}></Items>)
             :
             <Loading />
           }
               
          </div>
            <div className='w-75 mx-auto text-center m-5'>
            <button  onClick={manageItem}                                                                                             className='btn btn-info'>See All Items</button>
            </div>
  </div>
 
    );
};

export default Inventory;