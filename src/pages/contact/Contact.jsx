import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    setMessageSent(true);
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="py-16 px-6 lg:px-20">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold text-[#318078]">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us, and we’ll
            respond promptly!
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            {!messageSent ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your message here"
                    rows="5"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#318078] text-white py-3 rounded-md font-bold hover:bg-blue-700 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h3 className="text-3xl font-bold text-blue-700">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="mt-4 text-gray-700">
                    Your message has been sent. We’ll get back to you shortly.
                    For urgent matters, contact us directly.
                  </p>
                </motion.div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-[#318078]">Contact Info</h3>
            <div className="mt-6 space-y-4">
              <p className="text-gray-700">
                <strong>Address:</strong> Addis Ababa Science and technology University
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@mfcsolutions.com"
                  className="text-blue-600 hover:underline"
                >
                  info@mfcsolutions.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+1234567890"
                  className="text-blue-600 hover:underline"
                >
                  +251907365352
                </a>
              </p>
              <p className="text-gray-700">
                Office Hours: <strong>Mon-Sat, 9 AM - 5 PM</strong>
              </p>
              <p className="text-gray-700">
                We’re happy to help with any inquiries or support you need!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
