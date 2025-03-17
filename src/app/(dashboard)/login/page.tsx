import { AuthBackground } from '@/components/dashboard/auth-background'
import { AuthMobileBackground } from '@/components/dashboard/auth-mobile-backgrounf'
import Login from '@/components/dashboard/login'
import React from 'react'

export default function Auth() {
  return (
    <div className='my-[20px]'>
      <Login/>
      <AuthBackground />
      <AuthMobileBackground/>
    </div>
  )
}
