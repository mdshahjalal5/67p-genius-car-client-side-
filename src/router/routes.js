import { createBrowserRouter } from "react-router-dom";
import Mani from "../layout/Mani";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Carousel from '../pages/Home/Banner/cacousel'
import Checkout from "../pages/Checout/Checkout";
import Orders from "../pages/Orders/Orders";
import { context } from "../pages/Shared/Header/Header";
console.log(context, 'context');
export const router = createBrowserRouter([
    {
        path:'/', 
        element:<Mani></Mani>, 
        children:[
            {
                path: '/login', 
                element:<Login></Login>
            }, 
            {
                path:'/', 
                element:<Home></Home>
            },
            {
                path:'/signup', 
                element:<Signup></Signup>
            }, 
            {
                path:'/checkout/:id', 
                element:<Checkout></Checkout>,
                loader: async function named({params}){
                    const fech = fetch(`http://localhost:5500/services/${params.id}`)
                    // console.log(fech, 'fetch');
                    const res = await fech;
                    // console.log(res, 'res');
                    const data =await  res.json();
                    // console.log(data, 'dataa');

                    return data;
                }
            }
            ,{
                path:'/orders', 
                element:<Orders></Orders>, 
                loader:async function anonymous(){
                    const fech =await fetch('http://localhost:5500/orders')
                    const data = await fech.json();
                    // console.log(data);
                    // const res = await 
                    return data;
                }
            }
        ]
    },
    {
        path:'/checking', 
        element:<Carousel></Carousel>
    }
])


