// import { Card } from '@/components/ui/card'
'use client'
import { LoginForm } from '@/components/login'
// import { CardDemo } from '@/components/login'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen  p-4 text-black
   bg-[radial-gradient(at_50%_50%,rgba(255,255,0,0.3)_0px,transparent_60%),radial-gradient(at_60%_60%,rgba(51,255,0,0.3)_0px,transparent_60%),radial-gradient(at_40%_60%,rgba(255,128,0,0.17)_0px,transparent_50%)]'>          <LoginForm/>
    </div>
  )
}


export default page