"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    const currentRoute = usePathname();

    return (
        <nav className="flex bg-neutral-800 text-white fixed w-full h-24 shadow-lg z-[900]">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo - Left Aligned */}
                <Link href="/" className="flex gap-3 items-center text-2xl text-brand font-bold bungee-regular">
                    <img className='max-h-8 max-w-8' src="sam_logo.png" alt="" />
                    SAM
                </Link>

                {/* Menu Options - Right Aligned */}
                <div hidden className="flex gap-x-3 ">
                    <Link href="/" className={"hover:text-brand " + (currentRoute === "/" ? "text-brand" : "text-white")}>
                        Home
                    </Link>
                    <Link href="/unsolved" className={"hover:text-brand " + (currentRoute === "/unsolved" ? "text-brand" : "text-white")}>
                        Unsolved
                    </Link>
                    <Link href="/solved" className={"hover:text-brand " + (currentRoute === "/solved" ? "text-brand" : "text-white")}>
                        Solved
                    </Link>
                    <Link href="/partners" className={"hover:text-brand " + (currentRoute === "/partners" ? "text-brand" : "text-white")}>
                        Partners
                    </Link>
                </div>
            </div>
        </nav>
    );
}
