'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // MOBILE-FIRST: Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Shop', href: '#products' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* MOBILE-FIRST: Main navbar - always visible */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white/95 backdrop-blur-sm shadow-md'
                        : 'bg-white/50 backdrop-blur-sm'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* MOBILE-FIRST: h-16 base, h-20 on larger screens */}
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo - mobile optimized sizing */}
                        <Link
                            href="/"
                            className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#5C4033] tracking-wider hover:text-[#654321] transition-colors"
                        >
                            Nakpinto
                        </Link>

                        {/* Desktop Navigation - hidden on mobile */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[#5C4033] hover:text-[#654321] transition-colors duration-200 font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* MOBILE-FIRST: Cart and Menu buttons */}
                        <div className="flex items-center space-x-3 md:space-x-4">
                            {/* Cart Icon - mobile optimized tap target (min 48px) */}
                            <button
                                className="relative text-[#5C4033] hover:text-[#654321] transition-colors p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                                aria-label="Shopping Cart"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-[#5C4033] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                                    0
                                </span>
                            </button>

                            {/* MOBILE-FIRST: Hamburger menu button - minimum 48px tap target */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden text-[#5C4033] hover:text-[#654321] transition-colors p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={isMenuOpen}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    {isMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* MOBILE-FIRST: Full-screen mobile menu overlay */}
            <div
                className={`fixed inset-0 bg-white z-40 md:hidden transition-all duration-300 ${isMenuOpen
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'
                    }`}
            >
                {/* MOBILE-FIRST: Centered vertical navigation */}
                <div className="flex flex-col items-center justify-center h-full px-8">
                    <nav className="flex flex-col items-center space-y-8 w-full">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-[#5C4033] hover:text-[#654321] transition-all duration-200 font-medium text-2xl py-3 min-h-[48px] flex items-center ${isMenuOpen ? 'animate-in slide-in-from-bottom-4' : ''
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}
