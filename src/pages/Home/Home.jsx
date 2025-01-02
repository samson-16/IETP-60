import { motion } from "framer-motion";
// import Objectives from "./Objective";
// import Benefits from "./Benefits";
import CallToAction from "./CallToAction";
import StickyNavbar from "../../components/Navbar";
import WhyChooseMFCs from "./Whychoose";
import OrderNow from "./Order";
import Footer from "../../components/Footer";
import FAQSection from "./FAQ";
import TypingAnimation from "./Typeanimation";



const Home = () => {
    return (
        <div className="w-full">
            <div className="sticky top-0 z-10 w-full">
                <StickyNavbar />
            </div>
            <div>
                <div className="relative h-screen bg-gradient-to-br from-blue-700 via-green-400 to-blue-300">
                    {/* Background */}
                    <div className="absolute inset-0 overflow-hidden"></div>

                    {/* Content */}
                    <div className="relative  flex flex-col items-center justify-center h-full text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-6xl font-extrabold text-white px-4"
                        >
                            Harnessing Wastewater for Clean Energy
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            className="text-lg md:text-xl text-gray-100 mt-4 max-w-2xl"
                        >
                            Transforming organic waste into renewable energy and purified water
                            through cutting-edge microbial fuel cell technology.
                        </motion.p>

                       <TypingAnimation/>
                        <div className="mt-16">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="mt-6 px-6 py-4 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-200"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section */}
            <div className="py-16 bg-gradient-to-r from-green-100 to-blue-50 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
                        What are Microbial Fuel Cells?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Microbial Fuel Cells (MFCs) represent a groundbreaking clean energy technology
                        that uses natural biological processes to generate electricity from organic waste.
                        These systems not only provide renewable energy but also purify wastewater,
                        offering a dual benefit for the environment and energy sectors.
                    </p>
                    <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                        By harnessing the power of microorganisms, MFCs create sustainable solutions
                        to global challenges, reducing pollution, conserving resources,
                        and paving the way for a greener future.
                    </p>
                    <div className="mt-8">
                        <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            {/* why */}



            <WhyChooseMFCs />

            {/* team section */}


            {/* <Objectives/> */}
            {/* <Benefits/> */}
            <OrderNow />
            <FAQSection />
            <CallToAction />

            <Footer />
        </div>

    );
};

export default Home;