// import React from 'react';
import image from "../../assets/about_us/person.jpg"
import image1 from "../../assets/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
    <img src={image} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={image1} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
    </div>
    <div className="lg:w-1/2 space-y-6 p-4">
        <h3 className="text-orange-500 font-bold">About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <button className="btn btn-warning bg-orange-600">Get More Info</button>
    </div>
  </div>
</div>  
    );
};

export default About;