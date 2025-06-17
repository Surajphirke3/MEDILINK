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

export default function HomePage() {
  return (
    <main className="min-h-screen w-full ">
      {/* Hero */}
      <section className="bg-white dark:bg-black py-20 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-caprasimo   mb-6">
              MediLink: Your Gateway to Smarter Healthcare Management
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Book appointments, manage patient profiles, and digitize medical records — all in one platform, built for doctors and patients.
            </p>
            <div className="flex gap-4">
              <Link href="/login">
                <Button size="lg">Get Started</Button>
              </Link>
              <Button className="border-gray-600" variant="outline" size="lg">Explore Features</Button>
            </div>
          </div>
          <div className="relative w-full h-[400px]">
            <Image
              src="/medic.jpg"
              alt="Medical"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 dark:bg-zinc-900 py-20 px-4 md:px-20">
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
      <section className="bg-white dark:bg-black py-20 px-4 md:px-20">
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
