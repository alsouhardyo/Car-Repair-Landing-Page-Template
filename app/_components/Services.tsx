import React from "react";
import Image from "next/image";
import { FaWrench } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { MdOutlineEngineering } from "react-icons/md";
import { RiSlowDownFill } from "react-icons/ri";
import { IoBatteryCharging } from "react-icons/io5";
import { motion } from "motion/react";

interface ServiceCard {
    title: string;
    description: string;
    icon: React.ReactNode | string;
    image: string;
    alt: string;
}

const serviceCards: ServiceCard[] = [
    {
        title: "Complete Brake Inspection",
        description:
            "Get peace of mind with our thorough brake system evaluation. We'll check for wear patterns, fluid levels, and overall performance to keep you safe on the road.",
        icon: <RiSlowDownFill className="w-8 h-8" />,
        image: "https://plus.unsplash.com/premium_photo-1674375348180-e9052271ca30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&dpr=2&width=800&height=400",
        alt: "Mechanic inspecting brake system",
    },
    {
        title: "Engine Optimization Service",
        description:
            "Maximize your vehicle's performance with our detailed engine service. We'll fine-tune your engine for optimal power delivery and improved fuel consumption.",
        icon: <MdOutlineEngineering className="w-8 h-8" />,
        image: "https://plus.unsplash.com/premium_photo-1661402130759-d302f40ad912?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF1dG8lMjBlbmdpbmUlMjBtYWludGFpbmVuY2V8ZW58MHx8MHx8fDA%3D&dpr=2&width=800&height=400",
        alt: "Engine maintenance in progress",
    },
    {
        title: "Battery Performance Check",
        description:
            "Prevent unexpected breakdowns with our comprehensive battery analysis. We test charging systems and battery health to ensure reliable starts every time.",
        icon: <IoBatteryCharging className="w-8 h-8" />,
        image: "https://plus.unsplash.com/premium_photo-1661963977187-511e3d1af4d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyJTIwQmF0dGVyeSUyMFBlcmZvcm1hbmNlJTIwY2hlY2t8ZW58MHx8MHx8fDA%3D&dpr=2&width=800&height=400",
        alt: "Battery testing procedure",
    },
];

const Services = () => {
    return (
        <section className="box-padding scroll-mt-14" id="services">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="mb-12 md:flex md:justify-between md:items-center gap-8"
            >
                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-accent">
                            <FaWrench className="w-6 h-6" />
                        </span>
                        <h2 className="text-lg font-semibold">
                            Premium Services
                        </h2>
                    </div>
                    <h1 className="text-4xl font-bold font-slab leading-12">
                        Expert Auto Care with{" "}
                        <span className="text-accent">Professional</span> Touch
                    </h1>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-600 max-w-2xl">
                        Keep your vehicle performing at its best with our
                        comprehensive maintenance services. From routine
                        check-ups to major repairs, our certified technicians
                        deliver excellence in every service.
                    </p>
                </div>
            </motion.div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center">
                {serviceCards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg hover:shadow-lg hover:scale-105 duration-500 ease-in-out overflow-hidden border border-zinc-200"
                    >
                        <div className="relative h-48">
                            <Image
                                src={card.image}
                                alt={card.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div>{card.icon}</div>
                                <h3 className="font-semibold text-xl">
                                    {card.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                {card.description}
                            </p>
                            <motion.a
                                href="#about"
                                whileHover={{ x: 10 }}
                                className="text-accent font-semibold flex items-center gap-2 hover:gap-3 duration-200 ease-in-out cursor-pointer"
                            >
                                LEARN MORE
                                <HiArrowRight className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
