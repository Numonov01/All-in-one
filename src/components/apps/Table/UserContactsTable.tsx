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
import { Tune, ViewColumn, Search, Add } from "@mui/icons-material";
import AboutPcModal from "./AboutPcModal";

// Table ustunlari
const columns = [
  { id: "fullName", label: "Full name" },
  { id: "email", label: "Email" },
  { id: "pcName", label: "Computer name" },
  { id: "registerDate", label: "Registered date" },
  { id: "action", label: "Action" }
];

// Zustand store
interface TableState {
  data: {
    id: number;
    fullName: string;
    email: string;
    pcName: string;
    registerDate: string;
  }[];
}

const useTableStore = create<TableState>(() => ({
  data: [
    {
      id: 1,
      fullName: "Alex Pixel",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 2,
      fullName: "Alex Pixel",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 3,
      fullName: "Alex Pixel",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 4,
      fullName: "Alex Pixel",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 5,
      fullName: "Alex Pixel",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 6,
      fullName: "Alex Pixel",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 7,
      fullName: "Alex Pixel",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 8,
      fullName: "Alex Pixel",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 9,
      fullName: "Alex Pixel",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 10,
      fullName: "Alex Pixel",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    }
  ]
}));

const UserContactsTable = () => {
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
    row.fullName.toLowerCase().includes(search.toLowerCase())
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
            startIcon={<Add />}
            variant="contained"
            sx={{
              textTransform: "none",
              fontWeight: 400,
              borderRadius: "8px",
              backgroundColor: "#fff",
              color: "black",
              boxShadow: "none",
              "&:hover": { boxShadow: "none" }
            }}
          >
            Add new user
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
                  <TableCell>{row.fullName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.pcName}</TableCell>
                  <TableCell>{row.registerDate}</TableCell>

                  <TableCell>
                    <Button
                      sx={{
                        textTransform: "none"
                      }}
                      color="primary"
                      onClick={() => setModalOpen(true)}
                    >
                      Edit
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

export default UserContactsTable;
