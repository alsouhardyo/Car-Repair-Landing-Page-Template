import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// Define the testimonial type
interface Testimonial {
    id: number;
    name: string;
    role: string;
    comment: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO, TechCorp",
        comment:
            "Working with this team has been an absolute pleasure. Their attention to detail and innovative solutions have truly transformed our business.",
        image: "https://picsum.photos/seed/p1/100",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Marketing Director",
        comment:
            "The level of professionalism and creativity they bring to the table is unmatched. Highly recommended for any business looking to grow.",
        image: "https://picsum.photos/seed/p2/100",
    },
    {
        id: 3,
        name: "Mike Johnson",
        role: "Product Manager",
        comment:
            "Outstanding service and exceptional results. They've exceeded our expectations in every way possible.",
        image: "https://picsum.photos/seed/p3/100",
    },
    {
        id: 4,
        name: "Sarah Williams",
        role: "Car Enthusiast",
        comment:
            "I've never experienced such exceptional car service before. The convenience of having them come to my location is a game-changer.",
        image: "https://picsum.photos/seed/p4/100",
    },
    {
        id: 5,
        name: "David Chen",
        role: "Fleet Manager",
        comment:
            "Managing a fleet of vehicles is no easy task, but their team makes it seamless. Their reliability and expertise are unmatched.",
        image: "https://picsum.photos/seed/p5/100",
    },
    {
        id: 6,
        name: "Emily Rodriguez",
        role: "Business Owner",
        comment:
            "From regular maintenance to emergency repairs, they've always delivered top-notch service. I couldn't be more satisfied with their work.",
        image: "https://picsum.photos/seed/p6/100",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-100 scroll-mt-14" id="testimonials">
            <div className="container mx-auto px-6 text-center">
                {/* Header */}
                <h3 className="text-xl font-semibold text-accent uppercase tracking-wide">
                    Testimonials
                </h3>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 font-slab">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                    We take pride in providing top-notch services to our
                    customers. Here's what some of them have to say about their
                    experience with us.
                </p>

                {/* Swiper Testimonials */}
                <div className="mt-12">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true} // Infinite Sliding Effect
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:scale-105 transition duration-300">
                                    {/* Profile Image & Name */}
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-900">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Comment */}
                                    <p className="text-gray-700 mt-4 text-md leading-relaxed">
                                        "{testimonial.comment}"
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
