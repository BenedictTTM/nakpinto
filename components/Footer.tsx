import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        shop: [
            { name: 'New Arrivals', href: '#' },
            { name: "Women's Collection", href: '#' },
            { name: "Men's Collection", href: '#' },
            { name: 'Accessories', href: '#' },
            { name: 'Sale', href: '#' },
        ],
        about: [
            { name: 'Our Story', href: '#' },
            { name: 'Craftsmanship', href: '#' },
            { name: 'Sustainability', href: '#' },
            { name: 'Careers', href: '#' },
        ],
        support: [
            { name: 'Contact Us', href: '#' },
            { name: 'Shipping & Returns', href: '#' },
            { name: 'Size Guide', href: '#' },
            { name: 'FAQ', href: '#' },
            { name: 'Track Order', href: '#' },
        ],
    };

    return (
        <footer className="bg-[#5C4033] text-white">
            {/* MOBILE-FIRST: Responsive padding */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
                {/* MOBILE-FIRST: Vertical stacking on mobile, grid on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
                    {/* Brand Column - MOBILE-FIRST */}
                    <div className="text-center sm:text-left">
                        <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                            Nakpinto
                        </h3>
                        <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            Premium fashion and luxury goods crafted for the discerning. Timeless elegance meets modern sophistication.
                        </p>

                        {/* MOBILE-FIRST: Centered social icons on mobile */}
                        <div className="flex space-x-4 justify-center sm:justify-start">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#8B6F47] transition-colors p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                                aria-label="Visit our Facebook page"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#8B6F47] transition-colors p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                                aria-label="Visit our Instagram page"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#8B6F47] transition-colors p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                                aria-label="Visit our Twitter page"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#8B6F47] transition-colors p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
                                aria-label="Visit our Pinterest page"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0a12 12 0 00-4.37 23.17c-.1-.92-.19-2.33 0-3.33l1.45-6.15s-.37-.74-.37-1.84c0-1.72 1-3 2.24-3 1.06 0 1.57.79 1.57 1.74 0 1.06-.68 2.64-1 4.11-.29 1.21.61 2.2 1.8 2.2 2.16 0 3.83-2.28 3.83-5.57 0-2.91-2.09-4.95-5.08-4.95-3.46 0-5.49 2.6-5.49 5.28 0 1.05.4 2.17.9 2.78.1.12.11.22.08.34l-.33 1.36c-.05.22-.18.27-.42.16-1.52-.71-2.47-2.93-2.47-4.72 0-3.83 2.78-7.35 8.02-7.35 4.21 0 7.48 3 7.48 7 0 4.18-2.63 7.54-6.29 7.54-1.23 0-2.38-.64-2.78-1.39l-.76 2.9c-.27 1.05-1.01 2.37-1.5 3.17A12 12 0 1012 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* MOBILE-FIRST: Shop Links - centered on mobile */}
                    <div className="text-center sm:text-left">
                        <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Shop</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors text-sm sm:text-base inline-block py-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* MOBILE-FIRST: About Links - centered on mobile */}
                    <div className="text-center sm:text-left">
                        <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">About</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.about.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors text-sm sm:text-base inline-block py-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* MOBILE-FIRST: Support Links - centered on mobile */}
                    <div className="text-center sm:text-left">
                        <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Customer Care</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-white transition-colors text-sm sm:text-base inline-block py-1"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* MOBILE-FIRST: Bottom Bar - stacked on mobile */}
                <div className="border-t border-white/20 mt-10 sm:mt-12 pt-6 sm:pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/80 text-xs sm:text-sm text-center md:text-left">
                            © {currentYear} Nakpinto. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                            <Link href="#" className="text-white/80 hover:text-white transition-colors py-1">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white transition-colors py-1">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white transition-colors py-1">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
