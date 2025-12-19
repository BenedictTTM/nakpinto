'use client';

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus('error');
            return;
        }

        // Simulate subscription (replace with actual API call)
        setStatus('success');
        setEmail('');

        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        /* MOBILE-FIRST: Responsive vertical spacing */
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* MOBILE-FIRST: Mobile-optimized heading */}
                <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#5C4033] mb-3 sm:mb-4 px-4">
                    Join Our Exclusive List
                </h2>
                <p className="text-base sm:text-lg text-[#8B6F47] mb-6 sm:mb-8 px-4">
                    Be the first to know about new collections, special offers, and insider news
                </p>

                {/* MOBILE-FIRST: Stacked on mobile, side-by-side on larger screens */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        {/* MOBILE-FIRST: Full-width input on mobile with 48px height */}
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 px-5 sm:px-6 py-3.5 sm:py-4 border-2 border-[#5C4033] rounded-full focus:outline-none focus:ring-2 focus:ring-[#5C4033] focus:border-transparent text-[#5C4033] placeholder-[#8B6F47] min-h-[48px] text-sm sm:text-base"
                            required
                            aria-label="Email address"
                        />

                        {/* MOBILE-FIRST: Full-width button on mobile with 48px height */}
                        <button
                            type="submit"
                            className="bg-[#5C4033] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-[#5C4033] hover:ring-2 hover:ring-[#5C4033] transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap min-h-[48px] text-sm sm:text-base"
                            aria-label="Subscribe to newsletter"
                        >
                            Subscribe
                        </button>
                    </div>

                    {/* MOBILE-FIRST: Mobile-optimized status messages */}
                    {status === 'success' && (
                        <p className="mt-4 text-sm sm:text-base text-green-600 font-medium px-4" role="status">
                            Thank you for subscribing! Check your email for confirmation.
                        </p>
                    )}

                    {status === 'error' && (
                        <p className="mt-4 text-sm sm:text-base text-red-600 font-medium px-4" role="alert">
                            Please enter a valid email address.
                        </p>
                    )}
                </form>

                <p className="text-xs sm:text-sm text-[#8B6F47] mt-4 sm:mt-6 px-4">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
}
