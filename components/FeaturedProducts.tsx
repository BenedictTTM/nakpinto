import ProductCard from './ProductCard';

const products = [
    {
        name: 'Organic Coffee Beans',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1170&auto=format&fit=crop',
        category: 'Food & Beverages'
    },
    {
        name: 'Stainless Steel Cookware Set',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=1170&auto=format&fit=crop',
        category: 'Kitchenware'
    },
    {
        name: 'Premium Cotton Towel Set',
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1615799998603-7c6270a45196?q=80&w=1104&auto=format&fit=crop',
        category: 'Household Stuff'
    },
    {
        name: 'Natural Body Lotion',
        price: 32.50,
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1170&auto=format&fit=crop',
        category: 'Body Care'
    },
    {
        name: 'Kids Sneakers',
        price: 55.00,
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1364&auto=format&fit=crop',
        category: "Children's Shoes"
    },
    {
        name: 'Hydrating Face Serum',
        price: 68.00,
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1287&auto=format&fit=crop',
        category: 'Face Care'
    },
];

export default function FeaturedProducts() {
    return (
        /* MOBILE-FIRST: Increased vertical spacing for mobile scroll rhythm */
        <section id="products" className="py-16 sm:py-20 md:py-24 bg-[#FAFAFA]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* MOBILE-FIRST: Mobile-optimized heading sizes and spacing */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C4033] mb-3 sm:mb-4 px-4">
                        Featured Collection
                    </h2>
                    <p className="text-base sm:text-lg text-[#8B6F47] max-w-2xl mx-auto px-4">
                        Discover our carefully selected premium products
                    </p>
                </div>

                {/* MOBILE-FIRST: 1 column mobile, 2 tablet, 3 desktop - prevents horizontal scroll */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
