
const FAQSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Here are some common questions about Microbial Fuel Cells (MFCs) and
          our clean energy solutions.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {/* FAQ Item 1 */}
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m1-5a4 4 0 10-8 0v1l1 1m12 0v-3m0 0a9 9 0 11-18 0m18 0v3"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                What are Microbial Fuel Cells?
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Microbial Fuel Cells (MFCs) are devices that convert organic
                waste into clean electricity using bacteria, offering a
                sustainable way to produce energy and treat wastewater
                simultaneously.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m1-5a4 4 0 10-8 0v1l1 1m12 0v-3m0 0a9 9 0 11-18 0m18 0v3"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                How do MFCs help the environment?
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                MFCs reduce organic waste, purify wastewater, and generate clean
                energy. They are an eco-friendly alternative to fossil fuels and
                traditional waste treatment methods.
              </p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m1-5a4 4 0 10-8 0v1l1 1m12 0v-3m0 0a9 9 0 11-18 0m18 0v3"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Can MFCs power homes or industries?
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Currently, MFCs are most effective for small-scale applications
                like powering sensors. Research is ongoing to scale their energy
                output for larger needs.
              </p>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m1-5a4 4 0 10-8 0v1l1 1m12 0v-3m0 0a9 9 0 11-18 0m18 0v3"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                What materials are required for MFCs?
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                MFCs typically require electrodes (anode and cathode), a
                membrane for proton transfer, and organic waste as fuel for the
                bacteria.
              </p>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m1-5a4 4 0 10-8 0v1l1 1m12 0v-3m0 0a9 9 0 11-18 0m18 0v3"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                How can I order MFCs?
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Visit our{" "}
                <a href="/order" className="text-blue-600 underline">
                  Order Page
                </a>{" "}
                to purchase MFCs. Fill out the form, and we’ll deliver your
                units to your specified address.
              </p>
            </div>
          </div>

          {/* FAQ Item 6 */}
          <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m1-5a4 4 0 10-8 0v1l1 1m12 0v-3m0 0a9 9 0 11-18 0m18 0v3"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                Can MFCs be used for wastewater treatment?
              </h1>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Yes, MFCs are highly effective in treating wastewater while
                generating energy, making them a dual-purpose solution for
                environmental challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
