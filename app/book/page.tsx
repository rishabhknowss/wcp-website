"use client"
import { useEffect, useState } from 'react'
import { Instagram, Phone, Mail, MapPin, Camera, Aperture } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FloatingDockDemo } from '../../components/Navbar'
import Lenis from 'lenis'
import { IconBrandTelegram } from '@tabler/icons-react'

export default function BookUsNow() {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-6xl  mb-8 text-center tracking-tight">
          <span className="inline-block px-4 py-2 wcp">Book us now</span>
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 bg-slate-100 p-8 rounded-lg transform rotate-1 shadow-lg">
            <h2 className="text-4xl mb-6 underline decoration-wavy decoration-4 underline-offset-8 wcp">Get in Touch</h2>
            
            <div className="flex items-center space-x-4 text-lg">
              <Instagram className="w-8 h-8" />
              <a href="https://instagram.com/retrosnaps" className="hover:underline font-curve">@weddingclicks</a>
            </div>
            
            <div className="flex items-center space-x-4 text-lg">
              <Phone className="w-8 h-8" />
              <a href="tel:+1234567890" className="hover:underline font-curve">+1 (234) 567-890</a>
            </div>
            
            <div className="flex items-center space-x-4 text-lg">
              <Mail className="w-8 h-8" />
              <a href="mailto:snap@retrogenz.com" className="hover:underline font-curve">snap@retrogenz.com</a>
            </div>
            
            <div className="flex items-start space-x-4 text-lg font-curve">
              <MapPin className="w-8 h-8 mt-1" />
              <p>42 Vintage Avenue, Retro City, RC 90210, Nostalgia</p>
            </div>

            <div className="mt-12 flex justify-center">
              <Camera className="w-24 h-24 " /><div className='flex justify-center flex-col mx-2 wcp'>WCP</div>
            </div>
          </div>

        
          <div className="bg-[#FFFFE3] text-black p-8 rounded-lg shadow-lg transform -rotate-1">
            <h2 className="text-4xl font-thin mb-6 flex items-center wcp">
              <Aperture className="w-10 h-10 mr-2 " />
              Send an Enquiry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 font-curve">
              <div className=''>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white text-black border-2 border-white focus:border-slate-100 text-lg p-3"
                  placeholder='John Doe'
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white text-black border-2 border-white focus:border-slate-100 text-lg p-3"
                  placeholder='johndoe@gmail.com'
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white text-black border-2 border-white focus:border-slate-100 text-lg p-3"
                  rows={4}
                  placeholder='Type your message here...'
                />
              </div>
              <Button type="submit" className="w-full bg-black text-white hover:bg-slate-100 text-lg py-6 font-bold transition-transform transform hover:scale-105">
                Send Enquiry <IconBrandTelegram className="  ml-2" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-curve underline text-slate-400">We&apos;ll reach out to you within an hour</p>
        </div>
      </div>
      <FloatingDockDemo />
    </div>
  )
}