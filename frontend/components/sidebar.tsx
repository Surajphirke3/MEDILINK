"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconReportAnalytics,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// export function SidebarDemo() {
//   const links = [
//     {
//       label: "Dashboard",
//       href: "/patient/dasboard",
//       icon: (
//         <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
    
//     {
//       label: "Appointments",
//       href: "/patient/appointment",
//       icon: (
//         <IconCalendarEvent className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Reports",
//       href: "#",
//       icon: (
//         <IconReportAnalytics className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
    
//     {
//       label: "Settings",
//       href: "#",
//       icon: (
//         <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Logout",
//       href: "#",
//       icon: (
//         <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//   ];
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className={cn(
//         "mx-auto flex w-full h-[685px] m-2 flex-1 flex-col overflow-hidden rounded-md border-4 border-green-900 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        
//       )}
//     >
//       <Sidebar open={open} setOpen={setOpen} animate={false}>
//         <SidebarBody className="justify-between gap-10">
//           <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
//             <>
//               <Logo />
//             </>
//             <div className="mt-8 flex flex-col gap-2">
//               {links.map((link, idx) => (
//                 <SidebarLink key={idx} link={link} />
//               ))}
//             </div>
//           </div>
//           <div>
//             <SidebarLink
//               link={{
//                 label: "Manu Arora",
//                 href: "#",
//                 icon: (
//                   <img
//                     src="https://assets.aceternity.com/manu.png"
//                     className="h-7 w-7 shrink-0 rounded-full"
//                     width={50}
//                     height={50}
//                     alt="Avatar"
//                   />
//                 ),
//               }}
//             />
//           </div>
//         </SidebarBody>
//       </Sidebar>
//       <Dashboard />
//     </div>
//   );
// }
export const Logo = () => {
  return (
   <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
       <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-[#94f27f] dark:text-white"
      >
        Medilink
      </motion.span>
    </Link>
  );
};
  
export const LogoIcon = () => {
  return (
   <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      {/* "M" Icon Box */}
      <div className="flex items-center justify-center h-7 w-7 rounded-md bg-black text-green-500 dark:bg-white dark:text-black font-bold text-xs">
        M
      </div>
    </Link>
  );
};

// // Dummy dashboard component with content
// export const Dashboard = () => {
//   return (
//     <div className="flex flex-1">
     
//     </div>
//   );
// };



// components/sidebar.tsx
export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "/patient/dashboard",
      icon: <IconBrandTabler className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Appointments",
      href: "/patient/appointment",
      icon: <IconCalendarEvent className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Reports",
      href: "/patient/reports",
      icon: <IconReportAnalytics className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "profile",
      href: "/patient/profile",
      icon: <IconSettings className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Logout",
      href: "/",
      icon: <IconArrowLeft className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
    },
  ];

  const [open, setOpen] = useState(true);

  return (
    <div className={cn(
        "mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen"
      )}>
         <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="justify-center gap-10 border-1 border-black rounded-[10px]">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto ">
            {open?<Logo /> : <LogoIcon/>}
            <hr className="my-3 border-t-2 border-black" />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
