import Submenu from "./Submenu";

const categories = [
  "Crap",
  "Predator",
  "Feeder",
  "Cork",
  "Lure",
  "Equipment",
  "Accessory",
  "Camping",
  "Boat",
];

const links = [
  {
    title: "Home",
  },
  {
    title: "Discount",
  },
  {
    title: "Brands",
    isSubmenu: true,
  },
  {
    title: "Categories",
    isSubmenu: true,
    submenuContent: <Submenu categories={categories} />,
  },
  {
    title: "Blog",
  },
  {
    title: "Contacts",
  },
];
export default links;
