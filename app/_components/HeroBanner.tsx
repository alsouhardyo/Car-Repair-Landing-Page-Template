import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const HeroBanner = () => {
    return (
        <section
            id="home"
            className="box-padding flex flex-col items-center text-center scroll-mt-22 relative w-full"
        >
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-4 sm:mb-6 font-slab lg:leading-[1.2]">
                Your one-stop solution for auto maintenance
            </h1>

            {/* Subheading */}
            <p className="max-w-3xl mb-6 sm:mb-8 text-gray-700 text-base sm:text-lg">
                Certified experts providing high-quality auto repair and
                maintenance. Whether it's routine service or complex
                diagnostics, we ensure your vehicle stays in top condition.
            </p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-wrap justify-center gap-4 mb-10"
            >
                <a href="#" className="inline-block bg-accent text-white px-6 sm:px-8 py-3 rounded-lg btn-transition hover:bg-accent/90 cursor-pointer">
                    Book Now
                </a>
                <a href="#services" className="inline-block border-2 border-accent text-accent px-6 sm:px-8 py-3 rounded-lg btn-transition hover:bg-accent/15 cursor-pointer">
                    View Services
                </a>
            </motion.div>

            {/* Image Grid */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
            >
                {/* Image 1 */}
                <div className="relative w-full max-w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1664298121254-3f755ec249cd?w=500&auto=format&fit=crop&q=60"
                        alt="Mechanic inspecting a car"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>

                {/* Image 2 */}
                <div className="relative w-full max-w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl hidden lg:block mt-10">
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1682126117799-064f3f7a034e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMHJlcGFpciUyMGFuZCUyMGF1dG8lMjBtYWludGFpbmFuY2V8ZW58MHx8MHx8fDA%3D"
                        alt="Car engine maintenance"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>

                {/* Image 3 */}
                <div className="relative w-full max-w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-xl hidden md:block">
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1661543157602-4ff432c2a004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNhciUyMHJlcGFpciUyMGFuZCUyMGF1dG8lMjBtYWludGFpbmFuY2V8ZW58MHx8MHx8fDA%3D"
                        alt="Mechanic working under a car"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroBanner;
