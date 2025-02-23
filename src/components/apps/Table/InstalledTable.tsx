import { useState } from "react";
import { create } from "zustand";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Checkbox,
  TablePagination,
  TextField,
  Button
} from "@mui/material";
import { Tune, ViewColumn, Search } from "@mui/icons-material";
import AboutPcModal from "./AboutPcModal";

// Table ustunlari
const columns = [
  { id: "#", label: "#" },
  { id: "os", label: "Operation System (OS)" },
  { id: "name", label: "Computer Name" },
  { id: "ip", label: "IP Address" },
  { id: "active", label: "Activity" },
  { id: "action", label: "Action" }
];

// Zustand store
interface TableState {
  data: { id: number; os: string; name: string; ip: string; active: boolean }[];
}

const useTableStore = create<TableState>(() => ({
  data: [
    { id: 1, os: "Linux", name: "Jaxon-PC", ip: "192.39.32.11", active: true },
    { id: 2, os: "Windows", name: "Luna-PC", ip: "192.39.32.11", active: false },
    { id: 3, os: "Linux", name: "Kai-PC", ip: "192.39.32.11", active: true },
    { id: 4, os: "Linux", name: "Nova-PC", ip: "192.39.32.11", active: false },
    { id: 5, os: "Windows", name: "Zara-PC", ip: "192.39.32.11", active: true },
    { id: 6, os: "Linux", name: "Finn-PC", ip: "192.39.32.11", active: false },
    { id: 7, os: "Linux", name: "Aria-PC", ip: "192.39.32.11", active: false },
    { id: 8, os: "Windows", name: "Leo-PC", ip: "192.39.32.11", active: true },
    { id: 9, os: "Linux", name: "Mila-PC", ip: "192.39.32.11", active: false },
    { id: 10, os: "Linux", name: "Ezra-PC", ip: "192.39.32.11", active: true },
    { id: 11, os: "Linux", name: "Mila-PC", ip: "192.39.32.11", active: false },
    { id: 12, os: "Linux", name: "Ezra-PC", ip: "192.39.32.11", active: true }
  ]
}));

const InstalledTable = () => {
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
    row.name.toLowerCase().includes(search.toLowerCase())
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
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < data.length}
                  checked={selected.length === data.length}
                  onChange={() =>
                    setSelected(
                      selected.length === data.length ? [] : data.map((d) => d.id)
                    )
                  }
                />
              </TableCell>
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
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selected.includes(row.id)}
                      onChange={() => handleSelect(row.id)}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "#303030A3" }}>{row.id}</TableCell>
                  <TableCell sx={{ color: "#303030A3" }}>{row.os}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.ip}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.active ? "Active" : "Inactive"}
                      sx={{
                        backgroundColor: row.active ? "#E6F4EA" : "#FDECEA",
                        color: row.active ? "#2E7D32" : "#D32F2F",
                        borderRadius: "6px"
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Button
                      sx={{
                        textTransform: "none"
                      }}
                      color="primary"
                      onClick={() => setModalOpen(true)}
                    >
                      About PC
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

export default InstalledTable;
