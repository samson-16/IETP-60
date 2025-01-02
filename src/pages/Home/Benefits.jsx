const Benefits = () => {
    const benefits = [
      {
        title: "Environmental Sustainability",
        description:
          "MFCs help reduce organic pollutants and support clean water initiatives.",
        image: "https://via.placeholder.com/400x300",
      },
      {
        title: "Cost-Effective Solutions",
        description:
          "Leverage readily available materials to make energy generation affordable.",
        image: "https://via.placeholder.com/400x300",
      },
      {
        title: "Dual Purpose System",
        description:
          "Simultaneously treat wastewater and generate electricity.",
        image: "https://via.placeholder.com/400x300",
      },
    ];
  
    return (
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center mb-12`}
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
              <div className="text-center md:text-left md:ml-8">
                <h3 className="text-2xl font-bold text-blue-700">{benefit.title}</h3>
                <p className="text-gray-700 mt-2">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Benefits;
  