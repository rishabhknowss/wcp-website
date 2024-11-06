"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FloatingDockDemo } from "../components/Navbar";
export default function Gallery() {
  return (
    <div>
      <div className="flex justify-center my-10 font-curve    ">
        <Tabs defaultValue="Haldi" >
          <TabsList>
            <TabsTrigger value="Haldi">Haldi</TabsTrigger>
            <TabsTrigger value="PreWedding">Pre-Wedding</TabsTrigger>
            <TabsTrigger value="Wedding">Wedding</TabsTrigger>
            <TabsTrigger value="Baby">Baby Shoot</TabsTrigger>
            <TabsTrigger value="Cinematography">Cinematography</TabsTrigger>
            <TabsTrigger value="Book Us">Book Us</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
      <FloatingDockDemo />
    </div>
  );
}
