import type { Metadata } from "next";
import { DM_Sans, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "./context/index";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-dm-sans",
});

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
    title: "Mechano",
    description: "Your trusted partner for professional automotive care and maintenance. Offering on-site service, expert diagnostics, and preventive maintenance to keep your vehicle running smoothly. Schedule brake inspections, engine diagnostics, and battery checks with our certified technicians.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${dmSans.className} ${robotoSlab.className} min-h-screen scroll-smooth overflow-x-hide`}
        >
            <body cz-shortcut-listen="true" className="font-dm min-h-screen">
                <LoadingProvider>{children}</LoadingProvider>
            </body>
        </html>
    );
}
