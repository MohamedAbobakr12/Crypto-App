import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Members from "./sections/Members";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";


export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <Members />
            <Testimonials />
            <Pricing />
            <Footer />
        </>
    );
}
