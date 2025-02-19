import { motion } from "motion/react";
import Image from "next/image";
import { BsCalendar4 } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { FaWrench } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";

const processSteps = [
    {
        id: 1,
        title: "Schedule Your Service",
        description:
            "Book your car maintenance with just a few taps. Choose your preferred service type and time slot - it's that straightforward.",
        icon: <BsCalendar4 className="w-6 h-6" />,
    },
    {
        id: 2,
        title: "At Your Doorstep",
        description:
            "Stay where you are! Our expert mechanics come to your location, fully equipped with professional tools and expertise.",
        icon: <HiHome className="w-6 h-6" />,
    },
    {
        id: 3,
        title: "Expert Care",
        description:
            "From routine maintenance to complex repairs, our certified technicians deliver top-notch service using premium equipment and parts.",
        icon: <FaWrench className="w-6 h-6" />,
    },
    {
        id: 4,
        title: "Ready to Roll",
        description:
            "Get back to your journey with confidence. Your vehicle is serviced, checked, and ready for the road ahead.",
        icon: <IoCarSportOutline className="w-6 h-6" />,
    },
];

const Process = () => {
    return (
        <section className="w-full bg-gray-50 box-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative h-[400px] md:h-full"
                >
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1677009541327-5f7e23f81575?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3&dpr=2&w=400&h=800"
                        alt="Professional mechanic"
                        fill
                        sizes="(max-width: 768) 100vw, 50vw"
                        className="object-cover rounded-lg shadow-lg"
                    />
                </motion.div>

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <span className="text-accent font-medium">
                            HOW IT WORKS
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 font-slab">
                            Expert Auto Care: Your Journey to Peak Performance
                        </h2>
                    </motion.div>
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md btn-transition"
                        >
                            <span className="text-accent">{step.icon}</span>
                            <div>
                                <h3 className="text-xl font-bold mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
