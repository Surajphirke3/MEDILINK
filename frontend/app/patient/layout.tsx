// app/patient/layout.tsx
"use client";

import { SidebarDemo } from "@/components/sidebar"; // Adjust path as needed
import React from "react";

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-[calc(100%-16px)] h-[710px] border-6 border-black rounded-2xl m-2">
      <SidebarDemo /> {/* Sidebar stays fixed */}
      <main className="">{children}</main> {/* Dynamic right content */}
    </div>
  );
}
