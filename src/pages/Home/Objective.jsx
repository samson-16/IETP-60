const Objectives = () => {
    const objectives = [
      { icon: "🌱", title: "Improve Environmental Pollution" },
      { icon: "💧", title: "Produce Purified Water" },
      { icon: "⚡", title: "Innovate Electricity Generation" },
      { icon: "🔧", title: "Enhance Wastewater Treatment" },
      { icon: "🚀", title: "Promote Technological Innovation" },
    ];
  
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Our Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((obj, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg"
              >
                <div className="text-4xl mb-4">{obj.icon}</div>
                <h3 className="text-lg font-semibold">{obj.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Objectives;
  