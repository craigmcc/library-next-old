// components/Navbar.tsx

/**
 * Navigation bar for the library-next application.  (Second crack)
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
        <nav
            className="relative flex w-full flex-wrap items-center justify-between bg-indigo-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4 mb-3">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <div>
                    <Link href="/" className="my-1 mr-2 flex items-center text-neutral-900">
                        <Image
                            alt="Books Image"
                            height={75}
                            src="/books.jpeg"
                            width={50}
                        />
                        <span className="ml-2 font-medium dark:text-neutral-200">Library Next</span>
                    </Link>
                </div>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-5 font-medium text-white">
                    <Link href="/libraries" className="text-gray-500 hover:text-indigo-400 active:text-indigo-800">
                        Libraries
                    </Link>
                    <Link href="/authors" className="text-gray-500 hover:text-indigo-400 active:text-indigo-800">
                        Authors
                    </Link>
                    <Link href="/series" className="text-gray-500 hover:text-indigo-400 active:text-indigo-800">
                        Series
                    </Link>
                    <Link href="/stories" className="text-gray-500 hover:text-indigo-400 active:text-indigo-800">
                        Stories
                    </Link>
                    <Link href="/volumes" className="text-gray-500 hover:text-indigo-400 active:text-indigo-800">
                        Volumes
                    </Link>
                </div>
            </div>
        </nav>
    )
}
