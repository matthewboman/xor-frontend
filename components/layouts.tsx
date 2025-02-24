import type { Metadata } from "next"
import Footer from './footer'
import Navbar from "./navbar"
import styles from '../styles/layout.module.scss'

export const metadata: Metadata = {
  title: "XOR",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="antialiased relative w-full h-screen overflow-hidden font-sans">
      <video autoPlay muted loop playsInline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover -z-10">
        <source src="background.mp4" type="video/mp4"></source>
      </video>
      <Navbar />
      <div className="overflow-y-auto h-full text-white pb-[10vh]">
        { children }
      </div>
      <Footer />
    </div>
  )
}
