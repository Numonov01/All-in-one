export interface LoginActions {
  setLogin: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export {
  AppsData,
  BearMdData,
  BearData,
  LaunchpadData,
  MusicData,
  TerminalData,
  UserData,
  WallpaperData,
  WebsitesData,
  SiteSectionData,
  SiteData
} from "./configs";
