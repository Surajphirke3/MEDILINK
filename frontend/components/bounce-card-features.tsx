import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, HeartPulse, Stethoscope } from "lucide-react";
// import Link from "next/link";

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 ">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl text-white font-bold md:text-5xl">
          Why Medilink ?
          <br/>
          <span className="text-slate-500"> what do we provide </span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Learn more
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
            <BounceCard className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-2">
            <CalendarCheck className="h-9 w-9 text-indigo-600" />
            <CardTitle>Easy Appointments</CardTitle>
            
            </div>
            {/* <div className="py-2 text-sm">Book, reschedule, and manage appointments in real time.</div> */}
          <p className=" text-sm">Book, reschedule, and manage appointments in real time.</p>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <a className="block text-center font-sans text-5xl text-indigo-50" href="services/appointments">
            Read more
            </a>
            </div>
            </BounceCard>
            
        <BounceCard className="col-span-12 md:col-span-8">

          <div className="flex items-center gap-2">
            <HeartPulse className="h-10 w-10 text-indigo-600" />
            <CardTitle>Patients Dashboard</CardTitle>
          </div>
          <div className="absolute bottom-0 left-4 right-4 top-32  border-1 border-black translate-y-8 rounded-t-2xl bg-[#D7E9F8] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
             <a className="block text-center font-sans text-5xl text-black " href="services/patients-dashboard">
            Read more
            </a>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
           <div className="flex items-center gap-2">
            <Stethoscope className="h-10 w-10 text-indigo-600" />
            <CardTitle>Doctors Dashboard</CardTitle>
          </div>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#A3D9A5] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <a className="block text-center font-semibold text-emerald-50 " href="services/doctors-dashboard">
             Read more 
            </a>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>upload Reports</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-[#324B4B] p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-red-50">
              Read more
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-[#e9e9e9] p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};