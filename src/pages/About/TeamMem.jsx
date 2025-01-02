

// Team Members Data
const teamMembers = [
  { name: "Mesud Ahmed", department: "Software", id: "ETS1054/14" },
  { name: "Samson Demessie", department: "Software", id: "ETS1410/14" },
  { name: "Beza Yakob", department: "Electrical and Computer", id: "ETS0331/14" },
  { name: "Tedros Haymanot", department: "Electrical and Computer", id: "ETS1527/14" },
  { name: "Abigail Mekonnen", department: "Electromechanical", id: "ETS0085/14" },
  { name: "Sisay Aziz", department: "Electromechanical", id: "ETS1485/14" },
  { name: "Aymen Abdulkerim", department: "Architecture", id: "ETS0235/14" },
  { name: "Dagmawit Aschenaki", department: "Civil", id: "ETS0434/14" },
  { name: "Hiyawzuer Markose", department: "Mechanical", id: "ETS0581/14" },
  { name: "Nathaniel Asheber", department: "Chemical", id: "ETS1213/14" },
];

const TeamSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Our Executive Team
        </h1>
        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Meet the talented individuals behind our innovative Microbial Fuel Cells project.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-[#29615a] rounded-xl"
            >
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={`https://via.placeholder.com/150?text=${member.name.split(" ")[0]}`}
                alt={`${member.name}'s Avatar`}
              />
              <h1 className="mt-4 text-xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                {member.name}
              </h1>
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                {member.department}
              </p>
              <p className="text-sm text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                {member.id}
              </p>
              <div className="flex mt-3 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-7 14v-7h-3v7h3zm7-3.111V12h-3v6.889c0 .662.672 1.111 1.5 1.111S16 19.662 16 19.111z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22.162 5.656c-.769.372-1.6.625-2.474.738a4.136 4.136 0 0 0 1.813-2.29c-.832.49-1.754.847-2.731 1.037A4.139 4.139 0 0 0 16.13 4a4.139 4.139 0 0 0-4.137 4.139c0 .326.036.645.108.953-3.438-.173-6.49-1.818-8.528-4.317a4.17 4.17 0 0 0-.56 2.083c0 1.437.733 2.708 1.84 3.452a4.07 4.07 0 0 1-1.872-.519v.05a4.138 4.138 0 0 0 3.324 4.048 4.089 4.089 0 0 1-1.865.072 4.135 4.135 0 0 0 3.858 2.865 8.313 8.313 0 0 1-5.154 1.777c-.335 0-.666-.02-.99-.06a11.733 11.733 0 0 0 6.344 1.86c7.608 0 11.768-6.308 11.768-11.768l-.014-.535a8.284 8.284 0 0 0 2.038-2.108z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
