"use client"
import Link from "next/link";
import React, { useState } from "react"


const Navbar = () => {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick)
    }

    return (
        <>
            
            <header className="navbar-fixed sticky top-0 backdrop-blur-sm bg-white justify-between font-bold lg:text-2xl">
                {/* <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-0"> */}
                    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex">
                                <a href="/" className="text-black">
                                    MSFP
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                <Link href="../#Home" className="text-black hover:bg-secondary hover:text-white rounded-lg p-2">
                                    Home
                                    </Link>
                                {/* <a href="/" className="text-black hover:bg-light hover:text-white rounded-lg p-2">
                                    Home
                                </a> */}
                                <Link href="../#Projects" className="text-black hover:bg-secondary hover:text-white rounded-lg p-2">
                                    Projects
                                </Link>
                                <a href="../#About" className="text-black hover:bg-secondary hover:text-white rounded-lg p-2">
                                    About
                                </a>
                               
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-between p-2 rounded-md text-black
                            md:text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black
                            transition duration-1000 ease-in-out"
                                onClick={toggleNavbar}>
                                {isClick ? (
                                    <svg className="h-6 w-6 transition duration-300 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor" >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6 transition duration-300 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </section>
                {isClick && (
                    <div className="md:hidden transition duration-1000 ease-in-out">
                        <div className="px-4 pt-2 pb-3 items-center space-y-1 sm:px-3 transition duration-1000 ease-in-out">
                            <a href="../#Home" className="text-black block hover:bg-secondary hover:text-white rounded-lg p-2">
                                Home
                            </a>
                            <a href="../#Projects" className="text-black block hover:bg-secondary hover:text-white rounded-lg p-2">
                                Projects
                            </a>
                            <a href="../#About" className="text-black block hover:bg-secondary hover:text-white rounded-lg p-2">
                                About
                            </a>
                            
                        </div>
                    </div>
                )}
            </header>
         
        </>
    )
}

export default Navbar