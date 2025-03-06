import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface EditDetailsProps {
  data: {
    ipAddress: string;
    portNumber: string;
    username: string;
    password: string;
    remindIt: string;
  };
  onBack: () => void;
}

//edit data
export const agentData = {
  ipAddress: "",
  portNumber: "",
  username: "",
  password: "",
  remindIt: ""
};

const EditDetails: React.FC<EditDetailsProps> = ({ data, onBack }) => {
  const [editData, setEditData] = useState(data);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Box display="grid" gridTemplateColumns="auto auto" gap={1.5}>
        <Box>
          <Typography align="left" variant="body2">
            IP address
          </Typography>
          <TextField
            placeholder="Enter IP address"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
            value={editData.ipAddress}
            onChange={(e) => setEditData({ ...editData, ipAddress: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: "white",
                height: 32,
                fontSize: "0.875rem"
              }
            }}
          />
        </Box>
        <Box>
          <Typography align="left" variant="body2">
            Port number
          </Typography>
          <TextField
            placeholder="Enter Port number"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
            value={editData.portNumber}
            onChange={(e) => setEditData({ ...editData, portNumber: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: "white",
                height: 32,
                fontSize: "0.875rem"
              }
            }}
          />
        </Box>
      </Box>

      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1.5}>
        <Box>
          <Typography align="left" variant="body2">
            Username
          </Typography>
          <TextField
            placeholder="Enter Username"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
            value={editData.username}
            onChange={(e) => setEditData({ ...editData, username: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: "white",
                height: 32,
                fontSize: "0.875rem"
              }
            }}
          />
        </Box>

        <Box>
          <Typography align="left" variant="body2">
            Password
          </Typography>
          <TextField
            placeholder="Enter Password"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
            type={showPassword ? "text" : "password"}
            value={editData.password}
            onChange={(e) => setEditData({ ...editData, password: e.target.value })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: "white",
                height: 32,
                fontSize: "0.875rem"
              }
            }}
          />
        </Box>
      </Box>

      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1.5}>
        <Box>
          <Typography align="left" variant="body2">
            Remind it
          </Typography>
          <TextField
            placeholder="Enter Remind it"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
            value={editData.remindIt}
            onChange={(e) => setEditData({ ...editData, remindIt: e.target.value })}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                bgcolor: "white",
                height: 32,
                fontSize: "0.875rem"
              }
            }}
          />
        </Box>
      </Box>

      {/* Actions */}
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="text"
          sx={{
            // width: "137px",
            borderRadius: 2,
            textTransform: "none"
          }}
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          sx={{
            width: "137px",
            ml: 2,
            borderColor: "#ccc",
            bgcolor: "white",
            borderRadius: 2,
            textTransform: "none"
          }}
          onClick={onBack}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default EditDetails;
