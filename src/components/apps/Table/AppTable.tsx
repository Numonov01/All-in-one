import { create } from "zustand";

interface License {
  productLogo: string;
  productName: string;
  serverAddress: string;
  computersCount: number;
  uploadedDate: string;
  validUntil: string;
}

interface LicenseStore {
  licenses: License[];
  setLicenses: (licenses: License[]) => void;
}

const useLicenseStore = create<LicenseStore>((set) => ({
  licenses: [
    {
      productLogo: "img/icons/datagaze-dlp.png",
      productName: "Datagaze DLP",
      serverAddress: "188.245.151.94",
      computersCount: 3000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    }
  ],
  setLicenses: (licenses) => set({ licenses })
}));

const tableHeaders = [
  { label: "Product Name", key: "productName" },
  { label: "Server Address", key: "serverAddress" },
  { label: "Computers Count", key: "computersCount" },
  { label: "Uploaded Date", key: "uploadedDate" },
  { label: "Valid Until", key: "validUntil" },
  { label: "Actions", key: "actions" }
];

const LicenseTable = () => {
  const { licenses } = useLicenseStore();

  return (
    <div className="w-full h-full overflow-x-auto mr-3">
      <table className="w-full text-left">
        <thead>
          {/* font-thin ishlamayapti */}
          <tr className="bg-blue-200 text-gray-600 text-2xs !font-thin">
            {tableHeaders.map((header) => (
              <th key={header.key} className="py-3 pl-3">
                {header.label}
                <button className="text-gray-500">
                  <i className="i-bx:bx-expand-vertical mx-2"></i>
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {licenses.map((license, index) => (
            <tr
              key={license.productName}
              className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}
            >
              <td className="py-1 flex items-center pl-3">
                <img
                  src={license.productLogo}
                  alt="Product Icon"
                  className="h-10 w-10 mr-3"
                />
                {license.productName}
              </td>
              <td className="py-1 pl-3">{license.serverAddress}</td>
              <td className="py-1 pl-3">{license.computersCount}</td>
              <td className="py-1 pl-3">{license.uploadedDate}</td>
              <td className="py-1 pl-3">{license.validUntil}</td>
              <td className="py-1 pl-3">
                <button className="text-blue-700 flex gap-2">
                  <span className="i-bx:bxs-cloud-upload w-6 h-6"></span> Upload License
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LicenseTable;
