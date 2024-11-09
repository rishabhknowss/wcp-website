"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FloatingDockDemo } from "../../components/Navbar";
import ImageReact from "../../components/Images";
import Lenis from "lenis";
import { useEffect } from "react";
import Link from "next/link";

export default function Gallery() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time : number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen my-4 px-4 md:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl wcp my-4">Glimpse Of our work</h1>
      </div>
      <div className="flex flex-col items-center w-full">
        <Tabs defaultValue="Haldi" className="w-full">
          <div className="flex justify-center w-full mb-6">
            <TabsList className="flex flex-wrap justify-center font-curve">
              <TabsTrigger value="Haldi" className="text-sm md:text-base">Haldi</TabsTrigger>
              <TabsTrigger value="PreWedding" className="text-sm md:text-base">Pre-Wedding</TabsTrigger>
              <TabsTrigger value="Wedding" className="text-sm md:text-base">Wedding</TabsTrigger>
              <TabsTrigger value="Baby" className="text-sm md:text-base">Baby Shoot</TabsTrigger>
              <TabsTrigger value="Cinematography" className="text-sm md:text-base">Cinematography</TabsTrigger>
              <Link href='/book'>
                <TabsTrigger value="Book Us" className="text-sm md:text-base">Book Us</TabsTrigger>
              </Link>
            </TabsList>
          </div>
          
          <TabsContent value="Haldi" className="w-full flex justify-center">
            <ImageReact img1='/landing0.jpg' img2='landing1.jpg' img3='landing2.jpg' img4='wcp.jpg' img5='wed.jpg' img6='wed2.jpg'/>
          </TabsContent>
          <TabsContent value="PreWedding" className="w-full flex justify-center">
            <ImageReact />
          </TabsContent>
          <TabsContent value="Wedding" className="w-full flex justify-center">
            <ImageReact />
          </TabsContent>
          <TabsContent value="Baby" className="w-full flex justify-center">
            <ImageReact />
          </TabsContent>
          <TabsContent value="Cinematography" className="w-full flex justify-center">
            <ImageReact />
          </TabsContent>
        </Tabs>
      </div>
      <FloatingDockDemo />
    </div>
  );
}
