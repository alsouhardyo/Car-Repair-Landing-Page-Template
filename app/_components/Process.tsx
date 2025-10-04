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
        image: "https://plus.unsplash.com/premium_photo-1682089305164-68a837b50e31?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VydmljZSUyMGJvb2tpbmd8ZW58MHx8MHx8fDA%3D",
        stat: "24/7 Booking"
    },
    {
        id: 2,
        title: "At Your Doorstep",
        description:
            "Stay where you are! Our expert mechanics come to your location, fully equipped with professional tools and expertise.",
        icon: <HiHome className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1620838883342-ca19cf8448d6?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwbWVjaGFuaWMlMjBhdCUyMGRvb3JzdGVwfGVufDB8fDB8fHww",
        stat: "Mobile Service"
    },
    {
        id: 3,
        title: "Expert Care",
        description:
            "From routine maintenance to complex repairs, our certified technicians deliver top-notch service using premium equipment and parts.",
        icon: <FaWrench className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1569176330438-fa1ed1042542?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        stat: "Certified Techs"
    },
    {
        id: 4,
        title: "Ready to Roll",
        description:
            "Get back to your journey with confidence. Your vehicle is serviced, checked, and ready for the road ahead.",
        icon: <IoCarSportOutline className="w-6 h-6" />,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=auto&fit=crop",
        stat: "100% Satisfaction"
    },
];

const Process = () => {
    return (
        <section className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 box-padding overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-accent font-medium text-lg">
                    HOW MECHANO WORKS
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mt-4 font-slab text-gray-800">
                    Your Journey to Excellence
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                    Experience seamless auto care with our streamlined process
                </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent to-accent/30 hidden md:block"></div>

                {processSteps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        <div className="md:w-1/2 px-4">
                            <div
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out"
                            >
                                <div className="flex items-center mb-4">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-accent/10 p-4 rounded-full mr-4"
                                    >
                                        <span className="text-accent text-2xl">{step.icon}</span>
                                    </motion.div>
                                    <div className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                                        {step.id}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                            viewport={{ once: true }}
                            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg hidden md:block z-10"
                        ></motion.div>

                        <div className="md:w-1/2 px-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                                viewport={{ once: true }}
                                className="relative overflow-hidden rounded-2xl shadow-lg group"
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <motion.div
                                    className="absolute bottom-4 left-4 text-white"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
                                >
                                    <div className="bg-accent px-3 py-1 rounded-full text-sm font-medium">
                                        {step.stat}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
                {[
                    { number: "5000+", label: "Happy Customers" },
                    { number: "24/7", label: "Service Available" },
                    { number: "99%", label: "Success Rate" },
                    { number: "15min", label: "Average Response" }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                    >
                        <motion.div
                            className="text-3xl font-bold text-accent mb-2"
                            whileHover={{ scale: 1.1 }}
                        >
                            {stat.number}
                        </motion.div>
                        <div className="text-gray-600 font-medium">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
        </section>
    );
};

export default Process;
