import { ReactNode, lazy } from "react";

// Icons Import

import {
  MdOutlineVolunteerActivism,
} from "react-icons/md";

// Pages Import

import HallPage from "./Pages/Hall/Page";

import { GrContact } from "react-icons/gr";
interface RoutesLinksType {
  name?: string;
  href?: string;
  element?: ReactNode;
  icon?: any;
  Viewelement?: ReactNode;
  Viewhref?: string;
  children?: any;
  // Hidden the route from the navigation sidebar
  hidden?: boolean;
}
export const RoutesLinks: RoutesLinksType[] = [
  {
    name: "Hall",

    icon: <MdOutlineVolunteerActivism size={20} />,
    href: "/",
    element: <HallPage />,
  },
 
];
