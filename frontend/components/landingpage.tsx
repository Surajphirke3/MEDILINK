"use client"

import Link from "next/link"
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

export default function HomePage() {
  return (
    <main className="min-h-screen w-full  ">
      {/* Hero */}
      <section className="bg-[#B2BCBE]  dark:bg-black py-30 px-4 md:px-20 rounded-[36]  m-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl    mb-6">
                 MediLink: Your Gateway to  
            
              your
            <ContainerTextFlip 
                  words={["smarter", "modern","digital","secure" ]} />
               
                 Healthcare
                  
                  platform
            </h1>
            
          
             
            <div className="">
              <Link href="/signup">
                <Button className="bg-black rounded-full">Get Started</Button>
              </Link>
            </div>
            
          </div>
          <div className="relative ">
            <Image
              src="/medic.jpg"
              alt="Medical"
              width={800}
              height={400}
             
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
     
      <section className="bg-[#122023]  dark:bg-black  px-4 md:px-20 rounded-[36]  m-2">
        <div >
           <BouncyCardsFeatures/>
        </div>
      </section>


      <section className="bg-gray-100 dark:bg-zinc-900 py-20 px-4 md:px-20 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Why Choose MediLink?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature icon={CalendarClock} title="Easy Appointments" description="Book, reschedule, and manage appointments in real time." />
            <Feature icon={HeartPulse} title="Patient Profiles" description="Access medical history, prescriptions, and reports instantly." />
            <Feature icon={FolderOpen} title="Digital Reports" description="Upload, store, and view medical files securely." />
            <Feature icon={Stethoscope} title="Doctor Dashboard" description="Real-time overview of patients, schedules, and updates." />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gradient-to-b linear-gradient(135deg, #E8F8D7, #D7E9F8) dark:bg-black py-20 px-4 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">What is MediLink?</h2>
          <p className="text-lg text-muted-foreground">
            MediLink is a full-stack medical appointment and health record platform designed for seamless communication between doctors and patients. With real-time data, secure access, and a clean interface, it transforms how healthcare is managed.
          </p>
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
