"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    const currentRoute = usePathname();

    return (
        <nav className="bg-neutral-400 text-white fixed w-full shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo - Left Aligned */}
                <Link href="/" className="text-2xl text-brand font-bold">
                    SAM
                </Link>

                {/* Menu Options - Right Aligned */}
                <div className="flex space-x-6">
                    <Link href="/" className={"hover:text-brand " + (currentRoute === "/" ? "text-brand" : "text-white")}>
                        Home
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
