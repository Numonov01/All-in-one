import { useState } from "react";
import { create } from "zustand";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Button
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Search, Tune, ViewColumn } from "@mui/icons-material";
import AboutPcModal from "./AboutPcModal";

// Table ustunlari
const columns = [
  { id: "productName", label: "Product Name" },
  { id: "serverAddress", label: "Server Address" },
  { id: "computersCount", label: "Computers Count" },
  { id: "registerDate", label: "Uploaded Date" },
  { id: "uploadedDate", label: "Valid Until" },
  { id: "validUntil", label: "Actions" }
];

// Zustand store
interface TableState {
  data: {
    id: number;
    productLogo: string;
    productName: string;
    serverAddress: string;
    computersCount: number;
    uploadedDate: string;
    validUntil: string;
  }[];
}

const useTableStore = create<TableState>(() => ({
  data: [
    {
      id: 1,
      productLogo: "img/icons/datagaze-dlp.png",
      productName: "Datagaze DLP",
      serverAddress: "188.245.151.94",
      computersCount: 3000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      id: 2,
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      id: 3,
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      id: 3,
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      id: 4,
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      id: 5,
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      id: 6,
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      id: 7,
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      id: 8,
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    },
    {
      id: 9,
      productLogo: "img/icons/datagaze-siem.png",
      productName: "Datagaze SIEM",
      serverAddress: "188.245.151.94",
      computersCount: 5000,
      uploadedDate: "12.02.2024",
      validUntil: "12.02.2025"
    }
  ]
}));

const LicenseAppsTable = () => {
  const { data } = useTableStore();
  const [selected, setSelected] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredData = data.filter((row) =>
    row.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: <Search className="mr-2" />
          }}
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              fontWeight: 400,
              borderRadius: "8px"
            }
          }}
        />
        <div className="flex gap-2">
          <Button
            startIcon={<Tune />}
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: 400,
              borderRadius: "8px",
              backgroundColor: "white"
            }}
          >
            Filters
          </Button>
          <Button
            startIcon={<ViewColumn />}
            variant="outlined"
            sx={{
              textTransform: "none",
              fontWeight: 400,
              borderRadius: "8px",
              backgroundColor: "white"
            }}
          >
            Customize Columns
          </Button>
        </div>
      </div>

      {/* Table */}
      <TableContainer>
        <MuiTable size="small">
          <TableHead className="bg-blue/50">
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} sx={{ color: "#303030A3" }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={row.id}
                  className={index % 2 === 0 ? "bg-white/40" : "bg-blue/40"}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        src={row.productLogo}
                        alt={row.productName}
                        style={{ width: 24, height: 24, objectFit: "contain" }}
                      />
                      {row.productName}
                    </div>
                  </TableCell>

                  <TableCell>{row.serverAddress}</TableCell>
                  <TableCell>{row.computersCount}</TableCell>
                  <TableCell>{row.uploadedDate}</TableCell>
                  <TableCell>{row.validUntil}</TableCell>

                  <TableCell>
                    <Button
                      startIcon={<CloudUploadIcon />}
                      sx={{
                        textTransform: "none"
                      }}
                      color="primary"
                      onClick={() => setModalOpen(true)}
                    >
                      Upload License
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            <AboutPcModal open={modalOpen} onClose={() => setModalOpen(false)} />
          </TableBody>
        </MuiTable>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />
    </div>
  );
};

export default LicenseAppsTable;
