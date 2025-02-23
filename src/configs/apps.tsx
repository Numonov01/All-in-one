import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/menu.png"
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    img: "img/icons/terminal2.png",
    content: <Terminal />
  },
  {
    id: "licenses",
    title: "Licenses",
    desktop: true,
    width: 1080,
    height: 514,
    y: -20,
    img: "img/icons/licenses.png",
    content: <Licenses />
  },
  {
    id: "allApp",
    title: "All Installed",
    desktop: true,
    width: 1080,
    height: 514,
    y: -20,
    img: "img/icons/allApp.png",
    content: <Installed />
  },
  {
    id: "contact",
    title: "Contacts",
    desktop: true,
    width: 1080,
    height: 514,
    y: -20,
    img: "img/icons/contacts.png",
    content: <Contacts />
  },
  {
    id: "support",
    title: "Support",
    desktop: false,
    img: "img/icons/support.png"
    // content: <Installed />
  }
];

export default apps;
