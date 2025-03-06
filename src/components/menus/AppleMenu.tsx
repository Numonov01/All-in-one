import React from "react";

interface AppleMenuProps {
  logout: () => void;
  toggleAppleMenu: () => void;
  btnRef: React.RefObject<HTMLDivElement>;
}

export default function AppleMenu({
  logout,

  toggleAppleMenu,
  btnRef
}: AppleMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, toggleAppleMenu, [btnRef]);

  return (
    <div className="menu-box left-2 w-56" ref={ref}>
      <MenuItemGroup>
        <MenuItem>About This Application</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup border={false}>
        <MenuItem onClick={logout}>Log Out</MenuItem>
      </MenuItemGroup>
    </div>
  );
}
