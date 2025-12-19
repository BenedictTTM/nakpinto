import Image from 'next/image';

interface ProductCardProps {
    name: string;
    price: number;
    image: string;
    category?: string;
}

export default function ProductCard({ name, price, image, category }: ProductCardProps) {
    return (
        /* MOBILE-FIRST: Full-width base, optimized for touch */
        <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full">
            {/* MOBILE-FIRST: Responsive image container with fixed aspect ratio */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#FAFAFA]">
                <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {category && (
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-[#5C4033] rounded-full">
                        {category}
                    </span>
                )}
            </div>

            {/* MOBILE-FIRST: Mobile-optimized padding and text sizes */}
            <div className="p-4 sm:p-6">
                <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-semibold text-[#5C4033] mb-2 line-clamp-2">
                    {name}
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-[#654321] mb-3 sm:mb-4">
                    ${price.toFixed(2)}
                </p>

                {/* MOBILE-FIRST: Touch-friendly button with 48px minimum height */}
                <button
                    className="w-full bg-[#5C4033] text-white py-3 sm:py-3.5 rounded-full font-semibold hover:bg-white hover:text-[#5C4033] hover:ring-2 hover:ring-[#5C4033] transition-all duration-300 active:scale-95 min-h-[48px] text-sm sm:text-base"
                    aria-label={`Add ${name} to cart`}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
