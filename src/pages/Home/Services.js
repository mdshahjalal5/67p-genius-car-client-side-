import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServicesItems from './ServicesItems';

const Services = () => {
    const [services, setServices ] = useState([])
    useEffect( function  named (){
        const loader = async ()=>{
            const res = await fetch('http://localhost:5500/services')
            // console.log(res, 'res');
            const data = await res.json();
            // console.log(data, 'data');
            setServices(data);
        }
        loader();
    }, [])
    let data ;

    // const loader = async () => {
    //     const services = await axios.get('services.json')
    //     console.log(services, 'services');
    //     setServices(services.data)
    //     data = services.data;
    // }
     data = services;
    //  console.log(services, 'services state');
    //  console.log(data, 'data');
    //  const sendDb = (service) =>{
    //     console.log(service, 'service');
    //          fetch(`http://localhost:5500/services/${service.service_id}`, {

    //          method: "POST",

    //          body: JSON.stringify(service),

    //          headers: {
    //              "Content-type": "application/json; charset=UTF-8"
    //          }
    //      })

    //          .then(response => response.json())

    //          .then(json => console.log(json));
    //         //  checking 
    //     //  fetch(`http://localhost:5500/services/${service.service_id}`, {
    //     //     method:"POST", 
    //     //     headers:''
    //     //  })
    //     //  axios.post(`http://localhost:5500/services/${service.service_id}`, {
    //     //     service,
    //     //  })
    // //  }

    //     }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            {data.map(function named(e, i, a){
                // console.log(e, 'e');
                return <ServicesItems key={i}> {e} </ServicesItems>
            })}
        </div>
    );
}


export default Services;