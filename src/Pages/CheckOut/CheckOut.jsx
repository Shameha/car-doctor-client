// ?import React from 'react';

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import  { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const {title,_id,price,img}= service;
    const {user} = useContext(AuthContext);

    const handleBook = e=>{
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = user?.email;
      const bookings={
        customerName :name,
        email,date,img,
        service:title,
        service_id:_id,
        price:price
      }
     console.log(bookings);

     fetch('https://car-1ybq83y2b-shamehas-projects.vercel.app/bookings',{
      method:'POST',
      headers:{
'content-type': 'application/json'
      },
      body:JSON.stringify(bookings)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert('service book sucessfully')
      }
     })
    }
    return (
        <div>
      <h2 className="text-3xl text-center">Book service:{title}</h2>  
      
      <form onSubmit={handleBook} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input type="text" defaultValue={'$'+price}  className="input input-bordered" required />
        </div>
        </div>
        <div className="form-control mt-6">
     <input className="btn btn-primary btn-block" type="submit" value="Order conform" />
     
        </div>
      </form>
    </div>

    );
};

export default CheckOut;