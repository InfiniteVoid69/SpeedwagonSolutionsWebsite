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
    link: "#",
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
