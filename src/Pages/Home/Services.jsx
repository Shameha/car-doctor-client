// import React from 'react';

import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    const [services,setService]= useState([]);
    useEffect(()=>{
    fetch('service.json')
    .then(res=>res.json())
    .then(data => setService(data))
    },[])
    return (
        <div className="mt-4">
            <div className="text-center">
            <h3 className="text-orange-500 text-xl font-bold">Services</h3>
            <h1 className="text-5xl">Our sevices</h1>
            <p>
            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            </div>         
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    services.map(servicer =><ServiceCard key={servicer._id} servicer={servicer}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;