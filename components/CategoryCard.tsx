import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
    name: string;
    image: string;
    href?: string;
}

export default function CategoryCard({ name, image, href = '#' }: CategoryCardProps) {
    return (
        /* MOBILE-FIRST: Full-width responsive card */
        <Link
            href={href}
            className="group relative overflow-hidden rounded-lg aspect-[4/5] block w-full"
        >
            {/* MOBILE-FIRST: Responsive image with proper sizing */}
            <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />

            {/* Mobile-optimized gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />

            {/* MOBILE-FIRST: Touch-friendly text sizing */}
            <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {name}
                </h3>
            </div>
        </Link>
    );
}
