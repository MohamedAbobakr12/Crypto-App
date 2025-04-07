"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative flex justify-center bg-black h-24">
            <nav className="flex items-center justify-around max-md:justify-between max-w-7xl w-full h-full max-md:mx-4">
                <Link href={"/"} className="self-start"><Image width={65} height={80} src={"/logo.svg"} alt={"logo img"} className="max-md:w-12" /></Link>

                <ul className="flex items-center gap-x-14 max-2xl:gap-x-10 max-xl:gap-x-8 max-lg:gap-x-6 text-lg max-lg:text-sm max-md:text-xs font-semibold max-md:hidden">
                    <li className="text-white hover:text-primary transition-colors duration-300"><Link href={"#home"}>Home</Link></li>
                    <li className="text-white hover:text-primary transition-colors duration-300"><Link href={"#pages"}>Pages</Link></li>
                    <li className="text-white hover:text-primary transition-colors duration-300"><Link href={"#tokens"}>Tokens</Link></li>
                    <li className="text-white hover:text-primary transition-colors duration-300"><Link href={"#pricing"}>Pricing</Link></li>
                    <li className="text-white hover:text-primary transition-colors duration-300"><Link href={"#blog"}>Blog</Link></li>
                    <li className="text-white hover:text-primary transition-colors duration-300"><Link href={"#contact"}>Contact Us</Link></li>
                </ul>

                <Link href={"/"} className="flex justify-center place-items-center w-36 max-lg:w-32 h-12 text-center lg:text-lg text-white hover:text-black font-medium hover:bg-primary transition-colors duration-300 border-[3px] border-primary rounded-4xl max-md:hidden">Get Started</Link>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white cursor-pointer">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 hover:text-primary transition-colors duration-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    {isMenuOpen ? (
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-24 left-0 w-full bg-black z-50 transition-all duration-1000 ${isMenuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col items-center gap-y-6 font-semibold ">
                    <li className="text-white hover:text-primary transition-colors duration-300">
                        <Link href={"#home"} onClick={toggleMenu}>Home</Link>
                    </li>
                    <li className="text-white hover:text-primary transition-colors duration-300">
                        <Link href={"#pages"} onClick={toggleMenu}>Pages</Link>
                    </li>
                    <li className="text-white hover:text-primary transition-colors duration-300">
                        <Link href={"#tokens"} onClick={toggleMenu}>Tokens</Link>
                    </li>
                    <li className="text-white hover:text-primary transition-colors duration-300">
                        <Link href={"#pricing"} onClick={toggleMenu}>Pricing</Link>
                    </li>
                    <li className="text-white hover:text-primary transition-colors duration-300">
                        <Link href={"#blog"} onClick={toggleMenu}>Blog</Link>
                    </li>
                    <li className="text-white hover:text-primary transition-colors duration-300">
                        <Link href={"#contact"} onClick={toggleMenu}>Contact Us</Link>
                    </li>
                    <Link href={"#"} className="flex justify-center place-items-center w-36 h-12 text-center text-white hover:text-black font-medium hover:bg-primary transition-all duration-300 border-[3px] border-primary rounded-4xl mb-6" onClick={toggleMenu}>
                        Get Started
                    </Link>
                </ul>
            </div>
            </nav>
        </header>
    )
}

export default Header