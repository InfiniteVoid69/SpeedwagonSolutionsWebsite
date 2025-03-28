import { FaInstagram, FaGoogle, FaYelp } from "react-icons/fa";

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

export const services = [
  {
    id: "residential-washing",
    name: "Residential",
    photo: "/images/jjba.gif",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Houses", "Driveways & Walkways", "Roofs", "Decks & Patios"],
  },
  {
    id: "commercial-washing",
    name: "Commercial",
    photo: "/images/dance.gif",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Fast Food", "Restaurants", "Property Management"],
  },
  {
    id: "window-washing",
    name: "Window Washing",
    photo: "/images/lick.gif",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
