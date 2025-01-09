"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    const currentRoute = usePathname();

    return (
        <nav className="flex items-center justify-center bg-neutral-800 text-white w-full h-24 shadow-lg z-[900]">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo - Left Aligned */}
                <Link href="/" className="flex gap-3 items-center text-2xl text-brand font-bold bungee-regular">
                    <img className='max-h-8 max-w-8' src="sam_logo.png" alt="" />
                    SAM
                </Link>
                <Link href="/dashboard"
                    className="flex justify-center items-center w-fit bg-brand text-neutral-100 hover:bg-neutral-100 hover:text-brand font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
                    Dashboard
                </Link>
            </div>
        </nav>
    );
}
