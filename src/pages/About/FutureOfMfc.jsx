import { motion } from "framer-motion";
import Creativity from "../../assets/images/Creativity.gif";


const FutureOfMFCs = () => {
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInFromLeft}
        >
          <h2 className="text-4xl font-bold text-[#29615a]">
            The Future of Microbial Fuel Cells
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Microbial Fuel Cells (MFCs) hold immense potential for revolutionizing
            the way we produce energy, treat wastewater, and achieve sustainability.
            Discover the exciting advancements that are shaping the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-lg text-gray-700 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInFromLeft}
          >
            <h3 className="text-2xl font-semibold text-[#29615a] mb-4">
              A Vision for Tomorrow
            </h3>
            <p>
              Researchers are pushing the boundaries of MFC technology, exploring
              new materials, improving efficiency, and scaling systems for industrial
              and urban applications. From powering small devices to large-scale
              wastewater treatment plants, the possibilities are endless.
            </p>
            <p className="mt-4">
              As global demand for clean energy and sustainable solutions grows,
              MFCs are emerging as a key player in addressing these challenges. The
              future is bright, with MFCs poised to lead the way toward a greener,
              more innovative world.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInFromRight}
          >
            <img
              src={Creativity}
              alt="Future of MFCs"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FutureOfMFCs;
