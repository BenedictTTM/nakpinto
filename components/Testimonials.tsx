import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        quote: "The quality is absolutely exceptional. Every piece I've purchased has exceeded my expectations. Nakpinto has become my go-to for premium fashion.",
        name: "Sophia Anderson",
        title: "Fashion Curator",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop",
        rating: 5
    },
    {
        quote: "Impeccable craftsmanship and attention to detail. The leather goods collection is simply outstanding. Worth every penny.",
        name: "James Mitchell",
        title: "Art Director",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop",
        rating: 5
    },
    {
        quote: "Nakpinto understands timeless elegance. Their pieces are investment pieces that I know I'll cherish for years to come.",
        name: "Emma Thompson",
        title: "Style Consultant",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop",
        rating: 5
    },
];

export default function Testimonials() {
    return (
        /* MOBILE-FIRST: Responsive vertical spacing */
        <section className="py-16 sm:py-20 md:py-24 bg-[#FAFAFA]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* MOBILE-FIRST: Mobile-optimized headings */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5C4033] mb-3 sm:mb-4 px-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-base sm:text-lg text-[#8B6F47] max-w-2xl mx-auto px-4">
                        Join thousands of satisfied customers worldwide
                    </p>
                </div>

                {/* MOBILE-FIRST: Stacked on mobile, 3 columns on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            name={testimonial.name}
                            title={testimonial.title}
                            avatar={testimonial.avatar}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
