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

const brands = [
  "RTRMAX",
  "DeWalt",
  "Husqvarna",
  "Raider",
  "AL-KO",
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
    submenuContent: <Submenu categori={brands} />,
  },
  {
    title: "Categories",
    isSubmenu: true,
    submenuContent: <Submenu categori={categories} />,
  },
  {
    title: "Blog",
  },
  {
    title: "Contacts",
  },
];
export default links;
