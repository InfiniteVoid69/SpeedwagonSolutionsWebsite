const about = () => {
  return (
    <section className="mt-8 py-12 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2 text-gray-200">
        <h2 className="text-4xl font-bold leading-tight">
          <span className="text-text-primary">Exterior Cleaning</span>{" "}
          <span className="text-blue-400">You Can Trust</span>
        </h2>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a
          href="/about"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-text-primary font-semibold py-2 px-5 rounded transition-colors duration-300"
        >
          Learn More
        </a>
      </div>

      <div className="bg-gray-800 p-4 rounded shadow-md space-y-4">
        <div className="border-l-4 border-blue-400 pl-3">
          <h3 className="font-semibold text-text-primary">What We Offer</h3>
        </div>
        <ul className="space-y-2 text-gray-300">
          <li>🏠 House Washing</li>
          <li>🧼 Concrete Cleaning</li>
          <li>🧽 Roof & Gutter Cleaning</li>
          <li>🏢 Commercial Pressure Washing</li>
        </ul>
      </div>
    </section>
  );
};

export default about;
