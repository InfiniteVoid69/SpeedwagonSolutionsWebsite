import { FaInstagram, FaGoogle, FaYelp } from "react-icons/fa";

export const services = [
  {
    id: "residential-washing",
    name: "Residential",
    photo: "/images/RESIDENTIAL.jpg",
    info: "Residential pressure washing services are designed to clean and maintain the exterior surfaces of homes, including houses, driveways, walkways, roofs, decks, and patios.",
    tags: ["Houses", "Driveways & Walkways", "Roofs", "Decks & Patios"],
  },
  {
    id: "commercial-washing",
    name: "Commercial",
    photo: "/images/COMMERCIAL.jpg",
    info: "Commercial pressure washing services are designed to clean and maintain the exterior surfaces of businesses, ensuring a professional appearance.",
    tags: ["Fast Food", "Restaurants", "Property Management"],
  },
  {
    id: "window-washing",
    name: "Window Washing",
    photo: "/images/WINDOW.jpg",
    info: "Window washing services involve the cleaning of glass surfaces in residential and commercial buildings, ensuring clear visibility and enhancing the overall appearance.",
    tags: ["Exterior Windows", "Interior Windows", "Glass Doors"],
  },
  // {
  //   id: "line-Striping",
  //   name: "Line Striping",
  //   photo: "/images/",
  //   info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   tags: ["Parking Lots", "Asphalt", "Concrete", "Warehouses"],
  // },
];

export const navItems = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
    sublinks: services.map((service) => ({
      id: service.id,
      name: service.name,
      link: `/services/${service.id}`,
    })),
  },
  {
    id: 3,
    name: "Pricing",
    link: "#",
  },
];

export const locations = [
  {
    id: 1,
    name: "Fort Worth",
  },
  {
    id: 2,
    name: "Dallas",
  },
  {
    id: 3,
    name: "Arlington",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "Google",
    link: "https://g.co/kgs/dZ9uMV7",
    icon: <FaGoogle />,
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://www.instagram.com/speedwagonsolutions/",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    name: "Facebook",
    link: "https://www.yelp.com/biz/speedwagon-solutions-white-settlement/",
    icon: <FaYelp />,
  },
];
