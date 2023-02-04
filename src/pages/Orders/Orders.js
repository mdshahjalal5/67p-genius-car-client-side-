import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../firebase/firebase.init';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        async function anonymous() {
            const fech = await fetch(`http://localhost:5500/orders?email=${user?.email}`)
            const data = await fech.json();
            setOrders(data)
        }
        anonymous()
    },[user?.email])
   
    const handleDelete = async id =>{
        const agreed = window.confirm('Sure want to delete')
        if(agreed){
            const res = await fetch(`http://localhost:5500/orders/${id}`, {
                method: "DELETE"
            })
            const data = await res.json()
            if (data.deletedCount > 0){
                toast('Successfully deleted', {position:'top-center',autoClose:500});
                 const remaining =  orders.filter((order, i, a)=>{
                    return order._id !== id;
                })
                setOrders(remaining)
            }
        }
            
       

    }
    const handleModified = async id =>{
        console.log(id, 'id');
        const url = `http://localhost:5500/order/${id}`

        const res = await fetch(url, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: "Approved" })
        })
        console.log(res, 'response');
        const data = await res.json()
        console.log(data, 'data patch data');
        if (data.modifiedCount>0){
            const modified = orders.find(order => order._id === id);
            const others = orders.filter(order => order._id !== id);
            modified.status = 'Approved';
            setOrders([modified, others])
        }
        return null;
    }
    const handler = {
        handleDelete, 
        handleModified,
    }
    return (
        <div>
             All Orders {orders.length}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th> Color</th>
                            <th> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, i, a)=>{
                        return <OrderRow key={i} handler={handler} order={order}></OrderRow>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;