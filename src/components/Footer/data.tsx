import type { JSX } from "react";

import { BsGoogle, BsWhatsapp } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

export type TSocial = {
  name: string;
  follow?: string;
  link: string;
  icon: JSX.Element;
};

export type TAddress = {
  icon: JSX.Element;
  title: string;
  name: string[];
  link: string;
};

export type TSite = {
  name: string;
  link: string;
};

export type TAddresslink = {
  name: string;
  link: string;
};

export const sites: TSite[] = [
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Services",
    link: "services",
  },
  {
    name: "About",
    link: "about",
  },
];

export const address: TAddresslink[] = [
  {
    name: "012 880 3155",
    link: "#",
  },
  {
    name: "info@sithembe.co.za",
    link: "mailto:info@sithembe.co.za",
  },
];

export const socials: TSocial[] = [
  {
    name: `WhatsApp`,
    follow: `Let’s Chat on `,
    link: "https://wa.me/+27731241535",
    icon: <BsWhatsapp />,
  },
  {
    name: `LinkedIn`,
    follow: "Follow us on ",
    link: "https://www.linkedin.com/feed/",
    icon: <GrLinkedinOption />,
  },
  {
    name: `Google`,
    follow: "Find us on ",
    link: "https://www.google.com/search?q=sithembe+transportation+and+projects&oq=sithembe+trans&aqs=chrome.1.69i57j0i22i30j0i390j69i61l3.5618j0j1&sourceid=chrome&ie=UTF-8",
    icon: <BsGoogle />,
  },
];
