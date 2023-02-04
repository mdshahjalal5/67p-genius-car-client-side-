import React, { useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../firebase/firebase.init';
const Checkout = () => {
   
    const { _id, service_id, title, img, price } = useLoaderData() 
    const {user} = useContext(AuthContext)
    const checkOutSubmitHandler = async function(e){
        e.preventDefault();
        const form = e.target; 
        let name, email, phone, message;
        name = `${form.firstname.value} ${form.lastname.value}`;
        email = form.email.value;
        phone = form.phone.value;
        message = form.message.value;
        const order = {
            name, 
            email,
            phone,
            title, 
            service:_id, 
            price, 
            message
        }
        // console.log(order, 'order');
        const fech =  fetch('http://localhost:5500/orders',{
            method:"POST", 
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(order) // body data type must match "Content-Type" header
        }
        )
        const res = await fech;
        console.log(res, 'res');
        const data = await res.json();
        console.log(data, 'daaataaa');
        if (data.acknowledged){
            toast('Order place successfully',{
                position:'top-center'
            })
        }
    }
    return (
        <div className='py-3 pb-6'>
                <h1 className='text-3xl'>{title} </h1>
                <h2 className='text-xl'> $ {price}</h2>
            <form onSubmit={checkOutSubmitHandler}>
                <div className="flex gap-x-4 gap-y-4 py-3" >
                    <div className='w-1/2'>
                        <input name='firstname' type="text" required placeholder="First Name" className="input input-bordered input-info w-full " />
                        <br />
                        <input name='phone' type="text" required placeholder="Your phone" className="mt-2 input input-bordered input-info w-full " />
                    </div> 
                    <div className='w-1/2'>
                        <input name='lastname' type="text" required placeholder="LastName" className="input input-bordered input-info w-full " />
                        <br />
                        <input name='email' type="text" readOnly required placeholder="Email" defaultValue={user?.email} className="mt-2 input input-bordered input-info w-full " />
                    </div>
                </div>
                <div className="form-control">

                    <textarea name='message' className="textarea h-24 border-gray-300" placeholder="Bio"></textarea>
                </div>
                <button type='submit' className=" mt-3 btn btn-outline btn-accent">Place your order</button>
       </form>
        </div>
    );
};

export default Checkout;