// components/Navbar.tsx

/**
 * Navigation bar for the library-next application.
 *
 * @packageDocumentation
 */

// External Modules ----------------------------------------------------------

import Image from "next/image";
import Link from "next/link";

// Internal Modules ----------------------------------------------------------

// Public Objects ------------------------------------------------------------

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <div className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">
                        <span><Image
                            alt="Books Image"
                            height={75}
                            src="/books.jpeg"
                            width={50}
                        /></span>
                        {/*<span>Library Next</span>*/}
                    </Link>
                </div>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-5 text-white text-2xl lg:text-2xl">
                    <Link href="/libraries" className="text-white/80 hover:text-white">
                        Libraries
                    </Link>
                    <Link href="/authors" className="text-white/80 hover:text-white">
                        Authors
                    </Link>
                    <Link href="/series" className="text-white/80 hover:text-white">
                        Series
                    </Link>
                    <Link href="/stories" className="text-white/80 hover:text-white">
                        Stories
                    </Link>
                    <Link href="/volumes" className="text-white/80 hover:text-white">
                        Volumes
                    </Link>
                </div>
            </div>
        </nav>
    )
}
