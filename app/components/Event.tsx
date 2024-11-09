"use client"
import { useEffect, useState } from "react";
import { VideoPage } from "./Video";
import Link from "next/link";



export const EventPage = () => {
  const [title, setTitle] = useState("beautiful");
  const titles = ["beautiful", "aesthetic", "stunning"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      setTitle(titles[index]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen">
      <div className="flex justify-center mt-8 sm:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 lg:gap-28">
          <Link href={'/book'}><button className="border p-2 sm:p-3 px-8 sm:px-16 bg-black text-white wcp rounded-xl text-lg sm:text-xl" >
            Book Us Now
          </button></Link>
          
          <Link href={'/gallery'} ><button className="border p-2 sm:p-3 px-8 sm:px-16 bg-slate-200 text-lg sm:text-xl wcp rounded-xl">
            View More
          </button></Link>
        </div>
      </div>
      
      <div className="wcp flex justify-center my-8 sm:my-12 text-3xl sm:text-4xl lg:text-6xl text-center px-4">
        Make your Album
        <span className="text-red-400 ml-2 sm:ml-3">{title}</span>
      </div>

      <div className="flex justify-center px-4">
        <VideoPage />
      </div>
    </div>
  );
};
