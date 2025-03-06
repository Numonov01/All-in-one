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
import { Tune, ViewColumn, Search, Add } from "@mui/icons-material";
import AboutPcModal from "../Installed/AboutPc";
import UserModal from "./UserEdit";

type User = {
  id: number;
  fullName: string;
  email: string;
  pcName: string;
  registerDate: string;
};

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
  data: User[];
}

const useTableStore = create<TableState>(() => ({
  data: [
    {
      id: 1,
      fullName: "Alex Pixel",
      email: "jane.doe@example.com",
      pcName: "Luna-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 2,
      fullName: "Jordan Tube",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 3,
      fullName: "Sam Forge",
      email: "emily.jones@availabledata.com",
      pcName: "Zephyr-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 4,
      fullName: "Taylor Office",
      email: "michael.brown@quicknote.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 5,
      fullName: "Jamie Shield",
      email: "sarah.white@contentready.com",
      pcName: "Quantum-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 6,
      fullName: "Sam Forge",
      email: "emily.jones@availabledata.com",
      pcName: "Zephyr-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 7,
      fullName: "Jordan Tube",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 8,
      fullName: "Sam Forge",
      email: "emily.jones@availabledata.com",
      pcName: "Zephyr-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 9,
      fullName: "Jordan Tube",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    },
    {
      id: 10,
      fullName: "Jordan Tube",
      email: "john.smith@usefuldata.com",
      pcName: "Echo-PC",
      registerDate: "12.02.2024"
    }
  ]
}));

const UserContactsTable = () => {
  const { data } = useTableStore();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredData = data.filter((row) =>
    row.fullName.toLowerCase().includes(search.toLowerCase())
  );

  const handleOpenModal = (user: User | null = null) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

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
            onClick={() => handleOpenModal(null)}
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
                      onClick={() => handleOpenModal(row)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
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

      {/* User Modal */}
      <UserModal open={modalOpen} setOpen={setModalOpen} user={selectedUser} />
    </div>
  );
};

export default UserContactsTable;
