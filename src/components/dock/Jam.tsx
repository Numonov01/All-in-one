import { create } from "zustand";

interface Application {
  id: number;
  name: string;
  licenses: number;
  used: number;
  icon: string;
}

interface ApplicationStore {
  applications: Application[];
}

const useApplicationStore = create<ApplicationStore>((set) => ({
  applications: [
    { id: 1, name: "DataGaze DLP", licenses: 500, used: 138, icon: "img/icons/DLP.png" },
    {
      id: 2,
      name: "DataGaze SIEM",
      licenses: 300,
      used: 238,
      icon: "img/icons/SIEM.png"
    },
    { id: 3, name: "DataGaze WAF", licenses: 100, used: 50, icon: "img/icons/WAF.png" }
  ]
}));

const Jam: React.FC = () => {
  const { applications } = useApplicationStore();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl opacity-70 text-white mb-6">Good afternoon, Jam.</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {applications.map((app: Application) => (
          <div
            key={app.id}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 w-[402px] h-[340px] text-white"
          >
            <div>
              <span className="bg-white/10 backdrop-blur-md rounded-xl text-sm uppercase p-1">
                Activated
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-3xl mt-2">{app.name}</h2>
              <img src={app.icon} alt={app.name} className="w-[66px] h-[66px]" />
            </div>
            <p className="text-sm">Available {app.licenses} licenses</p>
            <div className="relative w-full mt-10">
              <div className="flex justify-between text-xs text-white">
                <span>0</span>
                <span>{Math.floor(app.licenses / 2)}</span>
                <span>{app.licenses}</span>
              </div>
              <div className="flex gap-1 mt-2 items-center">
                {Array.from({ length: 19 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 ${index === 9 ? "h-14" : "h-11"} rounded-md ${
                      index < Math.round((app.used / app.licenses) * 19)
                        ? "bg-white"
                        : "bg-white/30"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <p className="text-xs mt-8">• Running on {app.used} computers</p>
          </div>
        ))}
      </div>
      <button className="self-center mt-6 px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30">
        See all applications
      </button>
    </div>
  );
};

export default Jam;
