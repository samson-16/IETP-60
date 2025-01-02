import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ManThink from '../../assets/images/manThinkng.png'
import { FaWater, FaBatteryFull, FaGlobe, FaBook } from "react-icons/fa";
const TechnologyPage = () => {
  return (
     <div>
        <div>
            <Navbar/>
        </div>
        <div className="bg-gray-100 py-16">
      {/* Page Header */}
    {/* Explore Section */}
<div className="bg-gradient-to-r from-green-200 via-green-300 to-blue-200 py-20 relative overflow-hidden">
  {/* Decorative Background Overlay */}
  <div className="absolute inset-0 opacity-20">
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 400"
    >
      <circle cx="200" cy="200" r="300" fill="rgba(255, 255, 255, 0.3)" />
      <circle cx="600" cy="150" r="250" fill="rgba(255, 255, 255, 0.15)" />
    </svg>
  </div>
  
  <div className="relative text-center px-6">
    <motion.h1
      className="text-5xl font-extrabold text-gray-800"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Explore Microbial Fuel Cell (MFC) Technology
    </motion.h1>
    <motion.p
      className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      Dive into the fascinating world of Microbial Fuel Cells, where biology meets innovation to revolutionize energy production and waste management.
    </motion.p>
   
  </div>
</div>


      
      {/* Section 2: How MFCs Work */}
<div className="mt-16 bg-white py-12 px-6 lg:px-20">
  <motion.h2
    className="text-3xl font-bold text-[#318078] text-center"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    How Do Microbial Fuel Cells Work?
  </motion.h2>
  <motion.p
    className="mt-4 text-gray-600 text-lg leading-relaxed"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    Microbial Fuel Cells (MFCs) harness the metabolic activities of bacteria that break down organic compounds in the anode chamber. During this process, electrons are released and flow through an external circuit, generating electricity. At the same time, protons pass through a semi-permeable membrane to the cathode chamber, where they combine with oxygen to form water.
  </motion.p>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
    <motion.img
      src={ManThink}
      alt="MFC Diagram"
      className="rounded-lg shadow-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
    <motion.p
      className="text-[#318078] text-lg  font-bold leading-relaxed"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
    >
      This biological process generates electricity sustainably while treating wastewater effectively. By combining energy production with waste treatment, MFCs present a dual-purpose, eco-friendly solution that addresses environmental challenges such as energy scarcity and pollution.
    </motion.p>
  </div>
</div>


   {/* Section 3: Applications */}


{/* Section 3: Applications */}
<div className="mt-16 py-16 px-6 lg:px-24 bg-gray-50">
  <motion.h2
    className="text-4xl font-bold text-gray-800 text-center"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    Applications of Microbial Fuel Cells
  </motion.h2>
  <motion.p
    className="mt-4 text-gray-600 text-center text-lg max-w-2xl mx-auto"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    Discover the impactful ways Microbial Fuel Cells contribute to sustainability and innovation.
  </motion.p>
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    {[
      {
        icon: <FaWater className="text-5xl text-green-500" />,
        title: "Wastewater Treatment",
        detail:
          "Microbial Fuel Cells process wastewater, recovering energy while reducing pollutants. They provide a sustainable solution for waste management in urban and industrial settings.",
      },
      {
        icon: <FaBatteryFull className="text-5xl text-green-500" />,
        title: "Powering Devices",
        detail:
          "Perfect for powering small, remote sensors and devices. Their ability to operate in isolated areas makes them ideal for low-energy IoT solutions and environmental devices.",
      },
      {
        icon: <FaGlobe className="text-5xl text-green-500" />,
        title: "Environmental Monitoring",
        detail:
          "Used as biosensors, they monitor environmental conditions by generating electrical signals in response to specific contaminants in the surroundings.",
      },
      {
        icon: <FaBook className="text-5xl text-green-500" />,
        title: "Education & Research",
        detail:
          "Widely used in educational and research labs to teach renewable energy concepts, innovate sustainable technologies, and inspire the next generation of engineers.",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div>{item.icon}</div>
        <h3 className="mt-4 text-xl font-bold text-gray-800">{item.title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{item.detail}</p>
      </motion.div>
    ))}
  </div>
</div>



     {/* Section 4: Advantages */}
<div className="mt-16 bg-green-100 py-16 px-6 lg:px-24">
  <motion.h2
    className="text-4xl font-bold text-gray-800 text-center"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    Why Choose Microbial Fuel Cells?
  </motion.h2>
  <motion.p
    className="mt-4 text-gray-700 text-center text-lg max-w-2xl mx-auto"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    Unlock the potential of sustainable energy while contributing to waste management solutions.
  </motion.p>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      "Sustainable and renewable energy source.",
      "Reduces dependency on fossil fuels.",
      "Dual benefits of energy generation and waste management.",
      "Low operational costs and minimal maintenance.",
    ].map((advantage, index) => (
      <motion.div
        key={index}
        className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="h-10 w-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
          {index + 1}
        </div>
        <p className="text-gray-700 text-lg">{advantage}</p>
      </motion.div>
    ))}
  </div>
</div>

      <section className="mt-16 px-6 lg:px-20">
  <motion.div
    className="bg-white shadow-xl rounded-lg p-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 pb-2 inline-block">
      Challenges in MFC Technology
    </h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Challenge 1 */}
      <div className="flex items-start space-x-4">
        <div className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Low Power Output</h3>
          <p className="text-gray-600 mt-2">
            Current MFCs produce relatively low electricity compared to conventional power sources, limiting their applications to small-scale devices.
          </p>
        </div>
      </div>

      {/* Challenge 2 */}
      <div className="flex items-start space-x-4">
        <div className="bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 3v4.25M9.75 17v4.25m4.5-20.5v4.25m0 8.5v4.25"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">High Initial Costs</h3>
          <p className="text-gray-600 mt-2">
            The materials and setup required for efficient MFCs can be expensive, making it challenging for widespread adoption in low-income areas.
          </p>
        </div>
      </div>

      {/* Challenge 3 */}
      <div className="flex items-start space-x-4">
        <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 10h11m-9 4h9m2 4h1m-4-8h3m2-4h1"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Scaling Issues</h3>
          <p className="text-gray-600 mt-2">
            Scaling MFC systems for industrial or large-scale use remains a challenge due to complex engineering requirements and performance consistency.
          </p>
        </div>
      </div>

      {/* Challenge 4 */}
      <div className="flex items-start space-x-4">
        <div className="bg-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 20h10M9 8h6m-3-6v6"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Limited Bacterial Efficiency</h3>
          <p className="text-gray-600 mt-2">
            The efficiency of bacteria in converting organic matter to energy varies greatly, requiring further research to optimize and standardize performance.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
</section>

      {/* Call to Action */}
      <div className="mt-16 bg-green-500 text-white py-10 text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join the Green Energy Revolution!
        </motion.h2>
        <motion.p
          className="mt-4 text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore the endless possibilities of Microbial Fuel Cells. Order your
          MFCs today and be a part of the clean energy future.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Order Now
        </motion.button>
      </div>
    </div>
      <Footer/>
     </div>
  );
};

export default TechnologyPage;
