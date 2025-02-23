import React from "react";
import { isFullScreen } from "~/utils";
import type { MacActions } from "~/types";

interface TopBarItemProps {
  hideOnMobile?: boolean;
  forceHover?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const TopBarItem = forwardRef(
  (props: TopBarItemProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const hide = props.hideOnMobile ? "hidden sm:inline-flex" : "inline-flex";
    const bg = props.forceHover
      ? "bg-gray-100/30 dark:bg-gray-400/40"
      : "hover:(bg-gray-100/30 dark:bg-gray-400/40)";

    return (
      <div
        ref={ref}
        className={`hstack space-x-1 h-6 px-1 cursor-default rounded ${hide} ${bg} ${
          props.className || ""
        }`}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
      >
        {props.children}
      </div>
    );
  }
);

interface TopBarProps extends MacActions {
  title: string;
  setSpotlightBtnRef: (value: React.RefObject<HTMLDivElement>) => void;
  hide: boolean;
  toggleSpotlight: () => void;
}

interface TopBarState {
  showControlCenter: boolean;
  showAppleMenu: boolean;
}

const TopBar = (props: TopBarProps) => {
  const appleBtnRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<TopBarState>({
    showControlCenter: false,
    showAppleMenu: false
  });

  const { winWidth, winHeight } = useWindowSize();
  const { toggleFullScreen } = useStore((state) => ({
    toggleFullScreen: state.toggleFullScreen,
    setVolume: state.setVolume,
    setBrightness: state.setBrightness
  }));

  useEffect(() => {
    const isFull = isFullScreen();
    toggleFullScreen(isFull);
  }, [winWidth, winHeight]);

  const toggleAppleMenu = (): void => {
    setState({
      ...state,
      showAppleMenu: !state.showAppleMenu
    });
  };

  const logout = (): void => {
    props.setLogin(false);
  };

  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "System Error",
      message: "Something went wrong!",
      icon: "i-bx:bx-error"
    },
    {
      id: 2,
      title: "Update Available",
      message: "A new version is ready!",
      icon: "i-bx:bx-upvote"
    }
  ];

  return (
    <div
      className={`w-full h-8 px-2 fixed top-0 hstack justify-between ${
        props.hide ? "z-0" : "z-20"
      } text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition`}
    >
      <div className="hstack space-x-1">
        <TopBarItem
          className="px-2"
          forceHover={state.showAppleMenu}
          onClick={toggleAppleMenu}
          ref={appleBtnRef}
        >
          <img src="/img/sites/datagaze-logo.svg" alt="Datagaze" className="w-6 h-6" />
        </TopBarItem>
        <TopBarItem
          className="font-semibold px-2"
          onMouseEnter={() => {
            if (state.showAppleMenu) toggleAppleMenu();
          }}
        >
          {props.title}
        </TopBarItem>
      </div>

      {/* Open this when clicking on Apple logo */}
      {state.showAppleMenu && (
        <AppleMenu
          logout={logout}
          toggleAppleMenu={toggleAppleMenu}
          btnRef={appleBtnRef}
        />
      )}

      <div className="hstack flex-row justify-end space-x-5">
        <TopBarItem onClick={() => window.open("https://www.datagaze.uz/", "_blank")}>
          <span className="i-bx:bx-globe text-[17px]" />
          <span>Go to website</span>
        </TopBarItem>

        <TopBarItem onClick={() => setShowNotifications(!showNotifications)}>
          <span className="i-bx:bx-bell text-[17px]" />
          <span>Notifications</span>
          {notifications.length > 0 && (
            <span className="bg-grey-500 text-white text-sm px-1 rounded-full">
              {notifications.length}
            </span>
          )}
        </TopBarItem>
        {showNotifications && (
          <div className="absolute top-12 right-5 w-80 space-y-3">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className="flex items-start space-x-3 bg-white/50 backdrop-blur-lg p-4 rounded-2xl shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-white rounded-lg">
                  <span className={`${notif.icon} text-blue-500 text-2xl`} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{notif.title}</p>
                  <p className="text-gray-700 text-sm">{notif.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <TopBarItem>
          <span className="i-bx:bxs-smile text-[17px]" />
          <span>Jam</span>
          <span className="i-bx:bx-chevron-down text-[17px]" />
        </TopBarItem>
      </div>
    </div>
  );
};

export default TopBar;
