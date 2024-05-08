// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
const {user} = useContext(AuthContext)
const [booking,setBooking] = useState([])

const url = `http://localhost:5000/bookings?email=${user?.email}`
useEffect(()=>{
fetch(url)
.then(res => res.json())
.then(data => setBooking(data))

},[url])    ;
const handleDelete = id =>{
    const proceed = confirm('are you sure ?');
    if(proceed){
fetch(`http://localhost:5000/bookings/${id}`,{
    method:'DELETE'
})
.then(res => res.json())
.then(data => {console.log(data)
if(data.deletedCount>0){
alert('deleted successfully')
const remaining = booking.filter(bookings => bookings._id !== id)
setBooking(remaining)
}

    })

    }
}

const handleConform = id =>{
    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({status:'confirm'})
    })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount >0){
                //update
                const remaining = booking.filter(bookings=>bookings._id !== id);
                const update = booking.find(bookings => bookings._id === id );
                update.status = 'confirm'
                const newBooking = [update,...remaining];
                setBooking(newBooking)    
            }
        })
    
}


return (
    <div className="overflow-x-auto">
        {/* <h1 className="text-center text-5xl font-bold">Booking: {length}</h1> */}
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Image</th>
          <th>Serviec</th>
          <th>Date</th>
          <th>Price</th>
          <th>status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
       
    {
        booking.map(bookings =><BookingRow key={bookings._id} handleDelete={handleDelete}
            handleConform={handleConform}
            bookings={bookings}></ BookingRow>)
    }
       
      </tbody>
     
      
      
    </table>
  </div>
    );
};

export default Bookings;