import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Flash from 'react-reveal/Flash';
import Loading from '../../Shared/Header/Loading.js/Loading';
const Manageitems = () => {
    const [inventory,setinventory]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        fetch('https://gentle-temple-80074.herokuapp.com/inventory/')
        .then(res=>res.json())
        .then(data=>{
          setLoading(true)
          setinventory(data)})
    },[])
    const deleteHandel=(id)=>{
      const confrimDelete=window.confirm("Are You Sure Want To Delete This Item?")
      if(confrimDelete){
        const url=`https://gentle-temple-80074.herokuapp.com/inventory/${id}`
        fetch(url,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          const deletedItem=inventory.filter(item=>item._id!==id)
          setinventory(deletedItem)
        })
      }
      }
    
    return (
        <div className='container mt-5 pt-5'>
         
          
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {loading?
                    inventory.map(items=>
  <div key={items._id} className="col">
    <Flash>
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
    </Flash>
  </div>
  
  )
  :
  <Loading />
}
</div>

        </div>
    );
};

export default Manageitems;