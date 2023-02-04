import axios from 'axios';
import React, { useEffect, useState } from 'react';
const OrderRow = ({ order, handler }) => {
    const { handleDelete, handleModified} = handler; 
            // console.log(handleDelete, handleModified, 'handlie');
    
    const {name, email, phone, price, title, service, status } = order;
    // console.log(order._id, 'orderid');
    const [orderRow, setOrder] = useState({})
 useEffect(function(){
        fetch(`http://localhost:5500/services/${service}`)
        .then(res => res.json())
        .then(data => {
            setOrder(data)
            return 'anything'
           })
    },[])
 
    return<>
        <tr>
            <th onClick={() => handleDelete(order._id)}> <button>X</button> </th>
            <td className='fle <button>X</button>  items-center '>    
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={orderRow?.img} alt="ffasdfasdf" />
                    </div>
                </div>
                <div className='ml-3'>
                    {name} <br />{phone} 
                </div>
             </td>
            <td>{title} <br />${price} </td>
            <td>Blue</td>
            <td> <button onClick={() => handleModified(order._id)} > {status?status:'Pending'} </button> </td>
        </tr>
    </>

};

export default OrderRow;