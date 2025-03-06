import type { LaunchpadData } from "~/types";

const launchpadApps: LaunchpadData[] = [
  {
    id: "1",
    name: "DLP",
    version: "4.7.2",
    icon: "img/icons/launchpad/dlp.png",
    server_id: true
  },
  {
    id: "WAF",
    name: "WAF",
    version: "4.7",
    icon: "img/icons/launchpad/waf.png",
    server_id: false
  }
  // {
  //   id: "SIEM",
  //   title: "SIEM  1.2",
  //   icon: "i-bx:bx-cloud-download",
  //   img: "img/icons/launchpad/siem.png",
  //   link: "https://oh-vue-icons.js.org"
  // },
  // {
  //   id: "ZOOM",
  //   title: "ZOOM",
  //   img: "img/icons/launchpad/zoom.png",
  //   link: "https://oh-vue-icons.js.org"
  // },
  // {
  //   id: "CLOUD",
  //   title: "CLOUD",
  //   img: "img/icons/launchpad/cloud.png",
  //   link: "https://oh-vue-icons.js.org"
  // },
  // {
  //   id: "FRAME",
  //   title: "FRAME",
  //   img: "img/icons/launchpad/Frame.png",
  //   link: "https://oh-vue-icons.js.org"
  // }
];

export default launchpadApps;
