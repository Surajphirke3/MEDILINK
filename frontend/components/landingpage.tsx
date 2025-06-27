"use client"
import React from "react"
import Link from "next/link"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { Button } from "@/components/ui/button"
// import { Stethoscope, CalendarClock, UserHeart, FolderOpen } from "lucide-react"
import {
  Stethoscope,
  CalendarClock,
  FolderOpen,
  HeartPulse
} from "lucide-react"
import { ContainerTextFlip } from "./ui/container-text-flip"
import { BouncyCardsFeatures } from "./bounce-card-features"
import { TestimonialsSectionDemo } from "./testomonial"
import { Marque } from "./marquee"

// import Testimonials from "./testmonial"

export default function HomePage() {
  return (
    <main >
      

      {/* Hero */}
   <section className="bg-[radial-gradient(at_53%_78%,rgba(255,255,0,0.3)_0px,transparent_50%),radial-gradient(at_71%_91%,rgba(51,255,0,0.3)_0px,transparent_50%),radial-gradient(at_31%_91%,rgba(255,128,0,0.17)_0px,transparent_50%)] dark:bg-black py-[120px] px-4 md:px-20 rounded-t-[28px]">
 <div className="max-w-8xl mx-auto  items-center gap-10 ">
 
          <div className="text-center ">

             <div className="mb-4 inline-block rounded-full bg-white border border-gray-200 px-4 py-1 text-sm font-medium text-gray-700 shadow-sm">
      🎉 Trusted by 500+ healthcare professionals
    </div>
       
            <h1 className="text-[72px] md:text-[72px] font-bold  mb-6">
                Medilink your all in one
                 <br />


            <ContainerTextFlip
                  words={["smarter", "modern", "digital", "secure"]} />

                 Healthcare
                  
                  platform
            </h1>
            <p className="mt-6 font-semibold text-lg text-gray-600 dark:text-gray-300">
      MediLink keeps your clinical notes, schedules, and updates in one place — <br className="hidden md:block" />
      clean, connected, and accessible anytime.
       <Dialog>
                    <DialogTrigger>Open</DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
    </p>
            
          
             
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/signup">
                <Button className="bg-[#94f27f] rounded-full text-black hover:bg-black hover:text-white">Get Started</Button>
              </Link>
            </div>
           <div className="relative flex items-center mt-12 justify-between w-full max-w-screen-xl mx-auto px-6 py-12 h-[500px]">
  {/* Animation */}
  <div className="w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] h-[500px]">
    <DotLottieReact
      src="https://lottie.host/68b0fde8-8924-4e55-ad65-aa5660ce6e91/z5Rg7ScGWQ.lottie"
      loop
      autoplay
    />
  </div>

  {/* Text */}
  <div className="text-right text-gray-800 dark:text-gray-200">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
      Virtual Healthcare <br />
      <span className="text-green-600">platform</span>
    </h1>
  </div>
</div>
            
          </div>
          {/* <div className="relative ">
            <Image
              src="/medic.jpg"
              alt="Medical"
              width={800}
              height={400}
             
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div> */}
        </div>
      </section>

      {/* Marque */}
    <section className=" text-2xl font-bold text-center text-gray-800 dark:text-white my-10">
      Build With
      <Marque/>
    </section>
      {/* Features */}
     
      <section className="  m-2">
        <div >
           <BouncyCardsFeatures/>
        </div>
      </section>


      {/* <section className="bg-gray-100 dark:bg-zinc-900 py-20 px-4 md:px-20 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Why Choose MediLink?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature icon={CalendarClock} title="Easy Appointments" description="Book, reschedule, and manage appointments in real time." />
            <Feature icon={HeartPulse} title="Patient Profiles" description="Access medical history, prescriptions, and reports instantly." />
            <Feature icon={FolderOpen} title="Digital Reports" description="Upload, store, and view medical files securely." />
            <Feature icon={Stethoscope} title="Doctor Dashboard" description="Real-time overview of patients, schedules, and updates." />
          </div>
        </div>
      </section> */}

      {/* About */}
      
      {/* <section className="bg-gradient-to-l from-[#E8F8D7] to-[#D7E9F8] dark:bg-black py-20 px-4 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">What is MediLink?</h2>
          <p className="text-lg text-muted-foreground">
            MediLink is a full-stack medical appointment and health record platform designed for seamless communication between doctors and patients. With real-time data, secure access, and a clean interface, it transforms how healthcare is managed.
          </p>
        </div>
      </section> */}
    {/* Testimonials */}
    <section className=" m-2 ">
      <div className=" ">
      <TestimonialsSectionDemo/>
      </div>
    </section>

   

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-zinc-950 py-10 text-center text-sm text-muted-foreground">
        © 2025 MediLink. All rights reserved.
      </footer>
    </main>
  )
}

// ✅ Reusable Feature Component
function Feature({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-md transition">
      <Icon className="w-10 h-10 mb-4 text-primary" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
