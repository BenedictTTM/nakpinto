import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section
            id="home"
            /* MOBILE-FIRST: Full viewport on all screens, adjusted top padding */
            className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16 md:pt-20"
        >
            {/* Background Image - mobile optimized */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury fashion background"
                    fill
                    className="object-cover object-center opacity-10"
                    priority
                    sizes="100vw"
                />
            </div>

            {/* MOBILE-FIRST: Content with mobile-optimized spacing */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* MOBILE-FIRST: Smaller text on mobile, scales up on larger screens */}
                <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#5C4033] mb-4 sm:mb-6 leading-tight">
                    Discover Timeless Products
                </h1>

                {/* MOBILE-FIRST: Adjusted text size and spacing for mobile */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#8B6F47] mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                    Premium products crafted for the discerning
                </p>

                {/* MOBILE-FIRST: Touch-friendly button with 48px height minimum */}
                <Link
                    href="#products"
                    className="inline-block bg-[#5C4033] text-white px-8 sm:px-12 py-3.5 sm:py-4 text-base sm:text-lg font-semibold rounded-full hover:bg-white hover:text-[#5C4033] hover:ring-2 hover:ring-[#5C4033] transition-all duration-300 transform hover:scale-105 active:scale-95 min-h-[48px] flex items-center justify-center"
                >
                    Shop Now
                </Link>
            </div>

            {/* MOBILE-FIRST: Scroll Indicator - hidden on very small screens */}
            <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#5C4033]"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
        </section>
    );
}
