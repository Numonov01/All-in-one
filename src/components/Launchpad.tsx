import { wallpapers, launchpadApps } from "~/configs";
import { CloudUpload } from "@mui/icons-material";
import { LaunchpadData } from "~/types";

interface LaunchpadProps {
  show: boolean;
  toggleLaunchpad: (target: boolean) => void;
}

const placeholderText = "Search";

export default function Launchpad({ show, toggleLaunchpad }: LaunchpadProps) {
  const [selectedApp, setSelectedApp] = useState<LaunchpadData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (app: LaunchpadData) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApp(null);
  };
  const dark = useStore((state) => state.dark);

  const [searchText, setSearchText] = useState("");
  const [focus, setFocus] = useState(false);

  const search = () => {
    if (searchText === "") return launchpadApps;
    const text = searchText.toLowerCase();
    const list = launchpadApps.filter((item) => {
      return (
        item.name.toLowerCase().includes(text) || item.id.toLowerCase().includes(text)
      );
    });
    return list;
  };

  const close = show ? "" : "invisible";

  return (
    <div
      className={`${close} z-30 transform scale-110 size-full fixed overflow-hidden bg-center bg-cover`}
      id="launchpad"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`
      }}
      onClick={() => toggleLaunchpad(true)}
    >
      <div className="size-full absolute bg-gray-900/20 backdrop-blur-2xl">
        <div
          className="mx-auto flex h-7 w-64 mt-5 bg-gray-200/10"
          border="1 rounded-md gray-200/30"
          onClick={(e) => e.stopPropagation()}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        >
          <div
            className={`${
              focus ? "w-6 duration-200" : "w-26 delay-250"
            } hstack justify-end`}
          >
            <span className="i-bx:search ml-1 text-white" />
          </div>
          <input
            className="flex-1 min-w-0 no-outline bg-transparent px-1 text-sm text-white"
            placeholder={placeholderText}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="max-w-[1100px] mx-auto mt-8 w-full px-4 sm:px-10 grid grid-cols-5 gap-4 ">
          {search().map((item) => (
            <div key={`launchpad-${item.id}`} className="h-32 sm:h-36 flex flex-col">
              <a
                className="w-14 text-white sm:w-20 mx-auto cursor-pointer"
                onClick={() => handleOpenModal(item)}
              >
                <img src={`${item.icon}`} alt={item?.name} />
              </a>
              <span className="mt-2 flex items-center gap-2 cursor-pointer text-white text-sm sm:text-base">
                {!item?.server_id && <CloudUpload />}
                <p className="text-[16px] font-medium">{item?.name}</p>
              </span>
            </div>
          ))}
        </div>
        {isModalOpen &&
          selectedApp &&
          (selectedApp.server_id ? (
            <AppModal open={isModalOpen} onClose={handleCloseModal} app={selectedApp} />
          ) : (
            <InstallModal
              open={isModalOpen}
              onClose={handleCloseModal}
              app={selectedApp}
            />
          ))}
      </div>
    </div>
  );
}
