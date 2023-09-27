import { copyrates, fecebook, instagram, telegram, } from "./assets";

const footerData = [
  {
    title: "Titlu1",
    items: ["Orders", "Payment methods", "Delivery"],
  },
  {
    title: "INFORMATION",
    items: ["Abaut Us", "Return policy", "Frequent questions"],
  },
  {
    title: "CONTACTS",
    phones: ["022-52-52-52", "078295236", "060526363"],
  },
];

const socialIcons = [
  { name: "Instagram", link: "link_retea_sociala_1", icon: instagram },
  { name: "Telegram", link: "link_retea_sociala_1", icon: telegram },
  { name: "Fecebook", link: "link_retea_sociala_1", icon: fecebook },
];

const termsLinks = [
  {
    name: "Terms of service",
    link: "link_pagina_1",
  },
  {
    name: "2023 frontend-dev.com",
    icon: copyrates,
  },
  {
    name: "Privacy Policy",
    link: "link_pagina_2",
  },
];
export { footerData, socialIcons, termsLinks };
