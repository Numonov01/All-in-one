import { create } from "zustand";
import { createDockSlice, type DockSlice } from "./slices/dock";
import { createSystemSlice, type SystemSlice } from "./slices/system";
import { createUserSlice, type UserSlice } from "./slices/user";
import { createUserLicenses, type UserLicenses } from "./slices/licenses";
import { createUserIstalled, type PcIstalled } from "./slices/installed";
import { createUserContacts, type PcContacts } from "./slices/contacts";

export const useStore = create<
  DockSlice & SystemSlice & UserSlice & UserLicenses & PcIstalled & PcContacts
>((...a) => ({
  ...createDockSlice(...a),
  ...createSystemSlice(...a),
  ...createUserSlice(...a),
  ...createUserLicenses(...a),
  ...createUserIstalled(...a),
  ...createUserContacts(...a)
}));
