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
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold text-[#94f27f] dark:text-white"
      >
        Medilink
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
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
      href: "/patient/preports",
      icon: <IconReportAnalytics className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Profile",
      href: "/patient/profile",
      icon: <IconSettings className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
    },
    {
      label: "Logout",
      href: "/",
      icon: <IconArrowLeft className="h-5 w-5 text-neutral-700 dark:text-neutral-200" />,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-64 h-[700px] border-r-4 border-green-900 bg-black dark:bg-neutral-800 rounded-2xl">
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-center gap-10 border-1 border-black rounded-[10px]">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <Logo />
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
