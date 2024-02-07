import { cn } from '@/libs/utils';
import Link from 'next/link'
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

const MainMenu = () => {

    const routes = [
        {
            label: 'Inicio',
            icons: IoHomeOutline,
            href: '/',
        },
        {
            label: 'Sobre mi',
            icons: GoPerson,
            href: '/Sobre mi',
        },
        {
            label: 'Trabajos',
            icons: MdOutlineWorkOutline,
            href: '/Trabajos',
        },
        {
            label: 'Contacto',
            icons: IoMailOutline,
            href: '/Contacto',
        },
    ]


    return (
        <ul>
            <li>
                {routes.map((route) => (
                    <Link
                    key={route.href}
                    href={route.href}
                    className={cn('flex items-center gap-4 py-5 px-8 border-b border-amarillo/30 hover:text-amarillo transition-colors duration-300 hover:bg-gray-500/5')}>
                        <route.icons className='size={18}' />
                        {route.label}
                    </Link>
                ))}




            </li>
        </ul>
    )
}

export default MainMenu