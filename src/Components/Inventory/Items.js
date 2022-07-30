import React from 'react';
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
const Items = ({item}) => {
    const {name,img,description,quantity,price,SupplierName,_id}=item
    const navigate=useNavigate()
    const handelInventory=(_id)=>{
      navigate(`/inventory/${_id}`)
    }
    return (
        <div>
            <div  className="col p-3 shadow">
    <div className="card text-center">
        <Zoom right>
      <img src={img} className="img-fluid" alt="..."/>
      </Zoom>
      <div className="card-body">
        <h5 className="card-title">Name:{name}</h5>
        <h6 className="card-title">Price: {price}$</h6>
        <h6 className="card-title">Quantity: {quantity}</h6>
        <h6 className="card-title">SupplierName: {SupplierName}</h6>
        <p className="card-text">{description}</p>
        <button onClick={()=>handelInventory(_id)} className='btn btn-danger'>Updated</button>
      </div>
    </div>
  </div>
 
        </div>
    );
};

export default Items;