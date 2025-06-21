"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center border-black justify-center transition-all duration-300 ease-in-out">
      <Navbar className="top-2" />
     
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
   <div
  className={cn(
    "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-700 ease-out animate-fade-in-up",
    className
  )}
>

        
      <Menu setActive={setActive}>
       
        <div className="fixed top-10  inset-x-0 flex justify-center z-50">
          <div className="fixed top-0 inset-x-0 z-50 mx-auto flex items-center justify-between bg-white text-black px-6 py-2 h-14 md:my-2 md:rounded-full shadow-md md:shadow-sm backdrop-blur-lg w-[96%] max-w-[84rem]  border-black   md:bg-white/60 md:top-6 md:left-1/2 md:right-auto md:-translate-x-1/2">


    
    {/* Logo */}
    <div className="flex items-center space-x-2">
      
      <span className="text-3xl font-semibold text-[#94f27f] ">Medilink</span>
    </div>

    {/* Navigation Menu */}
    <div className="flex items-center space-x-8 text-16 font-medium">
      <Link href="/shop" className="hover:underline">Shop</Link>
      <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      <Link href="/customer-care" className="hover:underline">Customer Care</Link>
    </div>

    {/* Right Icons */}
    <div className="flex items-center space-x-4">
      <Link href="/login" className="text-sm px-4 py-2 rounded-full border-1 border-[#94f27f] hover:bg-[#B2BCBE]">Login</Link>
      <Link href="/signup" className="text-sm bg-[#94f27f] text-black px-4 py-2 rounded-full hover:bg-green-600">Get Started</Link>
    </div>
    </div>  
    
</div>

        
        
        
        
      </Menu>
    </div>
  );
}
