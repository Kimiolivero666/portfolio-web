import Link from 'next/link'
import React from 'react'
import MainMenu from './MainMenu'


const Sidebar = () => {
  return (
    <div className='fixed bg-negro w-[14vw] h-full border-r border-amarillo/30'>
        <section className='p-8 py-8 border-b border-amarillo/30'>
            <Link href={'/'} className='font-bold text-xl text-amarillo hover:text-blanco transition-colors duration-300'>Kimi Olivero</Link>
            <h3 className='text-sm font-light '>Desarrollador Web</h3>
        </section>
        <section>
          <MainMenu/>
        </section>
    </div>
  )
}

export default Sidebar