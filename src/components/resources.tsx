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
    id: 1,
    name: "Residential",
    link: '/services/residential-washing',
    photo: '/images/jjba.gif',
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Driveways", "Sidewalks", "Brick", "Drive Thrus"]
  },
  {
    id: 2,
    name: "Commercial",
    link: '/services/commercial-washing',
    photo: '/images/dance.gif',
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Roofs", "Siding", "Stucco"]
  },
  {
    id: 3,
    name: "Window Washing",
    link: '/services/window-washing',
    photo: '/images/lick.gif',
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Exterior Windows", "Interior Windows", "Glass Doors"]
  },
  {
    id: 4,
    name: "Line Striping",
    link: '/services/line-Striping',
    photo: '/images/zaworld.gif',
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["Parking Lots"]
  },
]