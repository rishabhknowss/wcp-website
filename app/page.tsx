"use client"
import { useEffect } from "react";
import  {Hero}  from "../components/Hero";
import Lenis from "lenis";
import { FloatingDockDemo } from "../components/Navbar";
import { EventPage } from "../components/Event";
import { Testimonials } from "../components/Testimonials";


export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      
      <Hero />
      <FloatingDockDemo />
      <EventPage />
      <Testimonials />
 
       </div>
  );
}


