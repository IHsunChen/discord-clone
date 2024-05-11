import { NavigationSidebar } from '@/components/navigation/navigation-sidebar'
import React, { ReactNode } from 'react'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className='h-100'>
      <div className='hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0'>
        <NavigationSidebar />
      </div>
      <main className='md:pl-[72px] h-screen'>
        {children}
      </main>
    </div>
  )
}

export default MainLayout
