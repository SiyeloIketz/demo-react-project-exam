import Accordion from "@/components/Accordion";
import React, { useState ,useEffect } from "react";
const BoardOfDirectors = () => {
    const [directors, setDirectors] = useState([])
    useEffect (()=>{
        const getDirectors = async () => {
            const response = await fetch(`http://localhost:3000/directors`)
            setDirectors(await response.json())
        }
        getDirectors()
    },[])
  return (
    <>
      <section
        className="bg-[url('/img/hero-img.jpg')] h-96 bg-center bg-cover pt-16"
        id="hero"
      >
        <div className="flex w-full h-full  bg-slate-600/50 md:bg-gradient-to-r from-cyan-300 from-15% via-white/85 via-35% to-50% ">
          <div className="flex flex-col justify-center  text-white md:text-black w-1/2">
            <p className="pl-24">Our Journey</p>
            <p className="font-bold text-3xl pl-24 ">Lorem</p>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-16 flex flex-col  max-w-5xl mx-auto p-8 ">
          <p className="text-2xl font-bold -right">Board of Directors</p>
          {directors.map((director, index) => (
                <Accordion name={director.name} avatar={director.avatar} position={director.position} review={director.review}  key={index}/>
                ))}
          
        </div>
      </section>
    </>
  );
};

export default BoardOfDirectors;
