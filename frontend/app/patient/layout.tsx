"use client";

import { SidebarDemo } from "@/components/sidebar"; // adjust path
import React from "react";

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden m-2 border-6 rounded-[20px] border-black">
      {/* Sidebar - fixed width */}
      <div className=" m-1  ">
        <SidebarDemo />
      </div>

      {/* Main Content - scrollable */}
      <main className="flex-1 overflow-y-scroll scrollbar-hide  m-1 border-4 border-black rounded-xl bg-white dark:bg-neutral-900 p-6 ">
        {children}
      </main>
    </div>
  );
}
