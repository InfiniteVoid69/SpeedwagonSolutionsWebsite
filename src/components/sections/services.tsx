import { services } from "../resources";

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 rounded-lg shadow-md p-6 text-center"
          >
            <img
              src={item.photo}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-700 mb-4">{item.info}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {item.tags.map((tag) => (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
