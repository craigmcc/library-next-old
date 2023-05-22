// layout.tsx ----------------------------------------------------------------

/**
 * Global layout for the library-next application.
 *
 * @packageDocumentation
 */

// External Modules ----------------------------------------------------------

import { Inter } from 'next/font/google'

// Internal Modules ----------------------------------------------------------

import './globals.css'
//import Navbar0 from "@/app/components/Navbar0";
import Navbar from "@/app/components/Navbar";

// Private Objects -----------------------------------------------------------

const inter = Inter({ subsets: ['latin'] })

// Public Objects ------------------------------------------------------------

export const metadata = {
  title: 'Library Next App',
  description: 'Library App experiments with NextJS 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {/*<Navbar0/>*/}
          <Navbar/>
          {children}
      </body>
    </html>
  )
}
