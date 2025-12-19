import CategoryCard from './CategoryCard';

const categories = [
    {
        name: 'Food & Beverages',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1074&auto=format&fit=crop',
    },
    {
        name: 'Kitchenware',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1168&auto=format&fit=crop',
    },
    {
        name: 'Household Stuff',
        image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1170&auto=format&fit=crop',
    },
    {
        name: 'Body Care',
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1112&auto=format&fit=crop',
    },
    {
        name: "Children's Shoes",
        image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1170&auto=format&fit=crop',
    },
    {
        name: 'Face Care',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1074&auto=format&fit=crop',
    },
];

export default function Categories() {
    return (
        /* MOBILE-FIRST: Increased vertical spacing */
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* MOBILE-FIRST: Mobile-optimized heading and spacing */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C4033] mb-3 sm:mb-4 px-4">
                        Shop by Category
                    </h2>
                    <p className="text-base sm:text-lg text-[#8B6F47] max-w-2xl mx-auto px-4">
                        Explore our carefully curated collections
                    </p>
                </div>

                {/* MOBILE-FIRST: 1 column mobile, 2 tablet, 3 desktop - no horizontal scroll */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            name={category.name}
                            image={category.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
