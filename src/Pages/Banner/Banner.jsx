// import React from 'react';
import image from "../../assets/1.jpg"
import image1 from "../../assets/2.jpg"
import image2 from "../../assets/3.jpg"
import image3 from "../../assets/4.jpg"
import image4 from "../../assets/5.jpg"
import image5 from "../../assets/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image} className="w-full rounded-xl" />
          <div className="absolute flex items-center rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-0 bottom-0 gap-5">
        <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
            </h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-2">
            <button className="btn btn-primary">Discover more</button>
            <button className="btn btn-outline btn-error">Leates project</button>

            </div>
        </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>



        <div id="slide2" className="carousel-item relative w-full">
          <img src={image1} className="w-full" />
          <div className="absolute flex items-center rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-0 bottom-0 gap-5">
        <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
            </h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-2">
            <button className="btn btn-primary">Discover more</button>
            <button className="btn btn-outline btn-error">Leates project</button>

            </div>
        </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 




        <div id="slide3" className="carousel-item relative w-full">
          <img src={image2} className="w-full" />
          <div className="absolute flex items-center rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-0 bottom-0 gap-5">
        <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
            </h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-2">
            <button className="btn btn-primary">Discover more</button>
            <button className="btn btn-outline btn-error">Leates project</button>

            </div>
        </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 


        <div id="slide4" className="carousel-item relative w-full">
          <img src={image3} className="w-full" />
          <div className="absolute flex items-center rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-0 bottom-0 gap-5">
        <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
            </h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-2">
            <button className="btn btn-primary">Discover more</button>
            <button className="btn btn-outline btn-error">Leates project</button>

            </div>
        </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>



        <div id="slide5" className="carousel-item relative w-full">
          <img src={image4} className="w-full" />
          <div className="absolute flex items-center h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-0 bottom-0 gap-5">
        <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
            </h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-2">
            <button className="btn btn-primary">Discover more</button>
            <button className="btn btn-outline btn-error">Leates project</button>

            </div>
        </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>


        <div id="slide6" className="carousel-item relative w-full">
          <img src={image5} className="w-full" />
          <div className="absolute flex items-center h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-0 bottom-0 gap-5">
        <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
            Affordable Price For Car Servicing
            </h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-2">
            <button className="btn btn-primary">Discover more</button>
            <button className="btn btn-outline btn-error">Leates project</button>

            </div>
        </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;