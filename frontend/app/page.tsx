// import SignupForm from '@/components/registration'
// import MedilinkLanding from '@/components/landingpage'
import React from 'react'
import HomePage from '@/components/landingpage'
import { NavbarDemo } from '@/components/navbar'


// import MegaMenu from '@/components/mega-menu'
// import { Demo } from '@/components/demo'
// import { NavbarDemo } from '@/components/navbarmenu'
// import { Header1 } from '@/components/ui/header'
// import { Button } from '@/components/ui/button'
// import { Squares } from '@/components/ui/squares-background'

const page = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* <Header1/> */}
    <NavbarDemo/>
     {/* <div className="relative w-full "> */}
      {/* <NavbarDemo className="top-0 " />
      <div className="flex items-center justify-between px-4 py-4">
        <h1 className="text-3xl font-bold">Medilink</h1>

        <div className="flex gap-x-4">
          <Button size="lg">Login</Button>
            <Button className="border-gray-600" variant="outline" size="lg">
             Get started
              </Button>
        </div>
      </div>

      </div> */}
    <HomePage/>
    


    </div>    
  )
}

export default page
