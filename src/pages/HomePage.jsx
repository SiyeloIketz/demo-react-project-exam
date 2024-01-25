import React, { useState, useEffect } from "react";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import {
  faTreeCity,
  faLocationDot,
  faUsersLine,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import HeroCard from "@/components/HeroCard";
import ExploreCard from "@/components/ExploreCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HomePage = () => {
  const [testimonials, setTestimonials] = useState([])
  useEffect(()=>{
    const getTestimonials = async () => {
        const response = await fetch("http://localhost:3000/testimonials")
        setTestimonials(await response.json()) 
    }
    getTestimonials()
  },[])
  return (
    <>
      <section
        className="bg-[url('/img/hero-img.jpg')] h-screen w-full bg-right lg:bg-center bg-cover  pt-16"
        id="hero"
      >
        <div className="flex flex-col items-center justify-between h-full py-8 pt-16">
          <div className="text-center text-3xl text-white">
            <p className="font-bold">Driving towards a better future,</p>
            <p>efficiently and sustainably</p>
          </div>
          <button className="bg-cyan-400 px-8 py-2 text-white">
            Find out more
          </button>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-4 p-8">
        <HeroCard label="Social Commitment" icon={faHandshake} />
        <HeroCard label="Sustainable Communities" icon={faTreeCity} />
        <HeroCard label="Transport Operators" icon={faLocationDot} />
        <HeroCard label="Suppliers and Partners" icon={faUsersLine} />
        <HeroCard label="Corporates" icon={faTruck} />
      </section>
      <section className="mb-4">
        <div className="text-center text-lg md:text-2xl lg:text-3xl my-16">
          <p className="font-bold ">Lorem ipsum dolor sit</p>
          <p>consectetur sed do temporadipiscing elit</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:px-8 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </div>
      </section>
      <section>
        <p className="text-center text-2xl md:text-3xl mt-16 font-bold">
          Hear what our clients have to say
        </p>
        <div className="my-8"> 
            <Carousel opts={{ align: "start" }} className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="basis-1/2 ">
                        <div className="p-1">
                        <Card>
                            <CardContent className=" flex flex-col justify-between h-80 p-6">
                                <div className="flex justify-between ">
                                    <img src="/img/quotes.png" className="w-16 h-16 object-contain"/>
                                   <img className="rounded-full object-cover object-center " src={testimonial.avatar} alt={testimonial.name}/>
                                </div>
                                <div>
                                    {testimonial.testimony}
                                </div>
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p>{testimonial.position}</p>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
      </section>
    </>
  );
};

export default HomePage;
