import Image from 'next/image';

interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    avatar: string;
    rating?: number;
}

export default function TestimonialCard({
    quote,
    name,
    title,
    avatar,
    rating = 5
}: TestimonialCardProps) {
    return (
        /* MOBILE-FIRST: Full-width mobile optimization */
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-[#5C4033] hover:shadow-xl transition-shadow duration-300 w-full">
            {/* MOBILE-FIRST: Responsive star sizing */}
            <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(rating)].map((_, i) => (
                    <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B6F47]"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>
                ))}
            </div>

            {/* MOBILE-FIRST: Mobile-optimized text size and line height */}
            <p className="text-[#5C4033] italic mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                "{quote}"
            </p>

            {/* MOBILE-FIRST: Responsive avatar and text */}
            <div className="flex items-center">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
                    <Image
                        src={avatar}
                        alt={`${name} avatar`}
                        fill
                        sizes="48px"
                        className="object-cover"
                    />
                </div>
                <div>
                    <p className="font-semibold text-[#5C4033] text-sm sm:text-base">{name}</p>
                    <p className="text-xs sm:text-sm text-[#8B6F47]">{title}</p>
                </div>
            </div>
        </div>
    );
}
