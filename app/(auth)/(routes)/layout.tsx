import React, { ReactNode } from 'react'

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-full items-center justify-center'>
      {children}
    </div>
  )
}

export default AuthLayout
