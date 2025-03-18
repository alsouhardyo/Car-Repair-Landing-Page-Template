"use client";
import React, { useEffect } from "react";
import Header from "./_components/Header";
import HeroBanner from "./_components/HeroBanner";
import Loading from "./loading";
import About from "./_components/About";
import Services from "./_components/Services";
import Process from "./_components/Process";
import Testimonials from "./_components/Testimonials";
import ContactForm from "./_components/Contact";
import Footer from "./_components/Footer";
import { ToastContainer } from "react-toastify";
import { UseLoading } from "./context";

const page = () => {
    const { loading, setLoading } = UseLoading();
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [loading]);
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Header />
                    <HeroBanner />
                    <About />
                    <Services />
                    <Process />
                    <Testimonials />
                    <ContactForm />
                    <Footer />
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </>
            )}
        </>
    );
};

export default page;
