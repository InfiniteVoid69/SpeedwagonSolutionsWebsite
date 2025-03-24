import { locations, navItems, socialMedia } from "./resources";

const footer = () => {
  return (
    <footer className="bg-[#222124] text-gray-400 py-12 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-bold text-text-primary">
            Speedwagon Solutions
          </h2>
          <div className="flex space-x-4">
            {socialMedia.map((item) => (
              <a
                href={item.link}
                target="_blank"
                aria-label={item.name}
                className="border border-gray-600 hover:border-text-primary p-2 rounded text-text-primary transition-colors duration-300"
              >
                <i>{item.icon}</i>
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-text-primary font-semibold text-xl mb-2">
            Contact Us
          </h3>
          <p>
            <a className="hover:text-text-primary" href="tel:+8172646035">
              (817) 264-6035
            </a>
          </p>
          <p>
            <a
              className="hover:text-text-primary"
              href="mailto:contact@speedwagonsolutions.com"
            >
              contact@speedwagonsolutions.com
            </a>
          </p>
          <p>Fort Worth, TX</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-text-primary font-semibold text-xl mb-2">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="/contact" className="hover:text-text-primary">
                Contact Us
              </a>
            </li>
            {navItems.map((item) => (
              <li key={item.id}>
                <a className="hover:text-text-primary" href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-text-primary font-semibold text-xl mb-2">
            Locations
          </h3>
          <ul className="space-y-1">
            {locations.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default footer;
