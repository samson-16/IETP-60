import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";

function Order() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    quantity: 1,
    message: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission
    console.log("Order submitted:", formData);
    setOrderPlaced(true);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Order Form Section */}
      <div className="py-16 px-6 lg:px-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-extrabold text-green-700">
            Place Your Order
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
            Secure your Microbial Fuel Cell (MFC) units today. Fill in your
            details, and we’ll handle the rest!
          </p>
        </motion.div>

        {!orderPlaced ? (
          <form
            onSubmit={handleSubmit}
            className="mt-10 bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
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
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-green-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
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
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-green-300"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Shipping Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-green-300"
                  placeholder="Enter your shipping address"
                  rows="3"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  min="1"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-green-300"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-green-300"
                  placeholder="Any special instructions?"
                  rows="3"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-md font-bold hover:bg-green-700 transition duration-200"
              >
                Submit Order
              </button>
            </motion.div>
          </form>
        ) : (
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-3xl font-bold text-green-700">
                Thank You for Your Order!
              </h3>
              <p className="mt-4 text-gray-700 text-lg">
                We have received your order and will process it soon. A
                confirmation email will be sent to{" "}
                <span className="font-bold text-green-600">
                  {formData.email}
                </span>
                .
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
